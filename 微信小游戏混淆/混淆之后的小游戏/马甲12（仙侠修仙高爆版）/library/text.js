const fileutil = require('./file-util');
const path = fileutil.path;
const fs = fileutil.fs;
const QQFS = wx.getFileSystemManager();

/**
 * 重写的文本加载器，代替引擎默认的文本加载器
 * 该代码中包含了大量日志用于辅助开发者调试
 * 正式上线时请开发者手动删除这些注释
 */
class TextProcessor {

	onLoadStart(host, resource) {

		const {
			root,
			url
		} = resource;


		return new Promise((resolve, reject) => {
			let xhrURL = url.indexOf('://') >= 0 ? url : root + url; //获取网络加载url
			if (RES['getVirtualUrl']) {
				xhrURL = RES['getVirtualUrl'](xhrURL);
			}
			if (path.isRemotePath(xhrURL)) { //判断是本地加载还是网络加载
				if (needCache(root, url)) {
					//通过缓存机制判断是否本地加载
					const targetFilename = path.getLocalFilePath(xhrURL);
					if (fs.existsSync(targetFilename)) {
						//缓存命中
						// console.log('缓存命中');
						let data = fs.readSync(targetFilename, 'utf-8');
						resolve(data);
					} else {
						//通过url加载，加载成功后加入本地缓存
						loadText(xhrURL).then((content) => {
							const dirname = path.dirname(targetFilename);
							fs.mkdirsSync(dirname);
							fs.writeSync(targetFilename, content);
							resolve(content);
						}).catch((e) => {
							reject(e);
						});
					}

				} else {
					//无需缓存，正常url加载
					loadText(xhrURL).then((content) => {
						resolve(content);
					}).catch((e) => {
						reject(e);
					})
				}
			} else {
				//本地加载
				const content = QQFS.readFileSync(xhrURL, 'utf-8');
				resolve(content);
			}
		});
	}

	onRemoveStart(host, resource) {
		return Promise.resolve();
	}
}

let bigTextFile = [
	`resource/cfg/cfg1.json`
];

function loadText(xhrURL) {
	for (let file of bigTextFile) {
		if (xhrURL.indexOf(file) < 0) continue;
		return new Promise((resolve, reject) => {
			// 文件名字
			let fileName = file.split('/').pop().split('.')[0];
			// 获取文件版本号
			let ver = verData[file] || 0;
			// 解压路径
			let unZipDir = `${fileName}/${ver}/`;
			// 解压文件
			let zipFile = unZipDir + `${fileName}.json`;

			if (fs.existsSync(zipFile) && !window.urlParam.isLocation) {
				//只用外网才读取本地文件
				// console.log(`命中文件`)

				// 本地已经有文件，直接返回
				resolve(fs.readSync(zipFile));
			} else {
				// console.log(`开始下载`)

				// 没有文件，先删除同名的文件夹
				fs.remove(fileName);
				// 创建同名文件夹
				fs.mkdirsSync(unZipDir);
				// 开始下载zip文件
				wx.downloadFile({
					url: xhrURL.replace(`.json`, `.zip`),
					filePath: path.getQQUserPath(`${fileName}/${fileName}.zip`),
					success: (v) => fs.unzip(`${fileName}/${fileName}.zip`, unZipDir).then(e => {
						resolve(fs.readSync(zipFile));
					}),
					fail: (e) => {
						const error = new RES.ResourceManagerError(1001, xhrURL.replace(`.json`, `.zip`));
						reject(error);
					}
				})
			}
		})
	}
	return new Promise((resolve, reject) => {

		const xhr = new XMLHttpRequest();
		xhr.onload = () => {
			if (xhr.status >= 400) {
				const message = `加载失败:${xhrURL}`;
				console.error(message);
				reject(message);
			} else {
				resolve(xhr.responseText);
			}

		}
		xhr.onerror = (e) => {
			const error = new RES.ResourceManagerError(1001, xhrURL);
			console.error(e);
			reject(error);
		}
		xhr.open("get", xhrURL);
		xhr.send();
	})

}

/**
 * 由于QQ小游戏限制只有50M的资源可以本地存储，
 * 所以开发者应根据URL进行判断，将特定资源进行本地缓存
 */
function needCache(root, url) {
	if (root.indexOf("miniGame/resource/") >= 0) {
		return true;
	} else {
		return false;
	}
}


const processor = new TextProcessor();
RES.processor.map("text", processor);