const fileutil = require('./file-util');
const path = fileutil.path;
const fs = fileutil.fs;
const wxFS = wx.getFileSystemManager();


/**
 * 重写的图片加载器，代替引擎默认的图片加载器
 * 该代码中包含了大量日志用于辅助开发者调试
 * 正式上线时请开发者手动删除这些注释
 */
class ImageProcessor {

    onLoadStart(host, resource) {
        let scale9Grid;
        const {
            root,
            url,
            scale9grid

        } = resource;

        if (scale9grid) {
            const list = resource.scale9grid.split(",");
            scale9Grid = new egret.Rectangle(parseInt(list[0]), parseInt(list[1]), parseInt(list[2]), parseInt(list[3]));
        }

        let imageSrc = root + url;
        if (RES['getVirtualUrl']) {
            imageSrc = RES['getVirtualUrl'](imageSrc);
        }

        let tamppath = getTampImgPath(imageSrc);
        if (!!tamppath) {
            //有临时文件
            if (!wxFS.accessSync(tamppath)) {
                return loadImage(tamppath, scale9Grid).then(
                    (texture) => {
                        return texture;
                    },
                    (error) => {
                        //加载临时文件失败，删除临时文件路径，再从服务器加载
                        removeTampImgPath(imageSrc);
                        console.error("本地临时文件加载失败：", error);
                        return this.downloadImg(imageSrc, scale9Grid);
                    }
                );
            } else {
                //加载临时文件失败，删除临时文件路径，再从服务器加载
                removeTampImgPath(imageSrc);
            }
        }
        return this.downloadImg(imageSrc, scale9Grid);
    }

    downloadImg(imageSrc, scale9Grid) {
        return download(imageSrc).then(
            (filePath) => {
                // fs.setFsCache(fullname, 1);
                return loadImage(filePath, scale9Grid);
            },

            (error) => {
                console.error(error);
                return;
            });
    }


    onRemoveStart(host, resource) {
        let texture = host.get(resource);
        texture.dispose();
        return Promise.resolve();
    }
}


function loadImage(imageURL, scale9grid) {
	return new Promise((resolve, reject) => {
		const image = wx.createImage();
		image.onload = () => {
			const bitmapdata = new egret.BitmapData(image);
			const texture = new egret.Texture();
			texture._setBitmapData(bitmapdata);
			if (scale9grid) {
				texture["scale9Grid"] = scale9grid;
			}
			setTimeout(() => {
				resolve(texture);
			}, 0);

		}
		image.onerror = (e) => {
			// console.error(e);
			const error = new RES.ResourceManagerError(1001, imageURL);
			reject(error);
		}
		image.src = imageURL;
	})
}


function download(url) {
    return new Promise((resolve, reject) => {
        wx.downloadFile({
            url: url,
            // filePath: file_target,
            success: (v) => {
                if (v.statusCode >= 400) {
                    const message = `加载失败:${url}`;
                    reject(message);
                } else {
                    tampImgPath[url] = v.tempFilePath;//临时文件路径
                    resolve(v.tempFilePath);
                }
            },
            fail: (e) => {
                const error = new RES.ResourceManagerError(1001, url);
                reject(error);
            }
        })
    });
}

var tampImgPath = {};

function removeTampImgPath(url) {
    delete tampImgPath[url];
}

function getTampImgPath(url) {
    return tampImgPath[url];
}


const processor = new ImageProcessor();
RES.processor.map("image", processor);