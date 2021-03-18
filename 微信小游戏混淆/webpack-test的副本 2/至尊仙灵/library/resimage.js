const fileutil = require('./file-util');
const path = fileutil.path;
const fs = fileutil.fs;
const WXFS = wx.getFileSystemManager();
const cachefiles = require('./cachefiles');

function download(url, target) {

    return new Promise((resolve, reject) => {

        const dirname = path.dirname(target);
        fs.mkdirsSync(dirname);
        const file_target = path.getWxUserPath(target);
        wx.downloadFile({
            url: url,
            filePath: file_target,
            success: (v) => {
                if (v.statusCode >= 400) {
                    try {
                        WXFS.accessSync(file_target);
                        WXFS.unlinkSync(file_target);
                    } catch (e) {

                    }
                    const message = `加载失败:${url}`;
                    reject(message);
                } else {
                    resolve(file_target);
                }
            },
            fail: (e) => {
                const message = `加载失败:${url}`;
                reject(message);
            }
        })
    })
}

egret.ImageLoader.prototype.__old_loadImage = egret.ImageLoader.prototype.loadImage;

egret.ImageLoader.prototype.loadImage = function (src) {
    // 1. 检查是否需要缓存
    if (path.isRemotePath(src)) { //判断是本地加载还是网络加载
        if (!cachefiles.needCache(src)) {
            //无需缓存加载
            this.__old_loadImage(src);
        } else {
            // 1.2. 需要：通过缓存机制加载
            const fullname = path.getLocalFilePath(src);
            if (fs.existsSync(fullname)) {
                //console.log('IMAGE-缓存命中:', src, fullname)
                this.__old_loadImage(path.getWxUserPath(fullname));
            } else {
                //console.log('IMAGE-下载中:', src, fullname)
                download(src, fullname).then(
                    (filePath) => {
                        //console.log('IMAGE-下载成功:', src, fullname)
                        fs.setFsCache(fullname, 1);
                        this.__old_loadImage(filePath);
                    },

                    (error) => {
                        //console.log('IMAGE-下载失败:', src, fullname)
                        console.error(error)
                        this.dispatchIOError(src);
                    });
            }
        }
    } else {
        this.__old_loadImage(src);
    }
}


window["smallGameFileCached"] = function(itemUrl) {
    if (itemUrl in cachefiles.cachefiles) {
        var src = RES.$getVirtualUrl(itemUrl);
        const fullname = path.getLocalFilePath(src);
        return fs.existsSync(fullname);
    }
    return false;
}