import { fs, path } from "./file-util";

const QQFS = wx.getFileSystemManager();
const QQ_ROOT = wx.env.USER_DATA_PATH + "/";

export class userfileMgr {

	static logFile = '/logusetime.json';


	/**
	 * 记录资源使用时间
	 */
	static logUseTime(resSrc) {
		let url = resSrc.replace(urlParam.root, '');
		let verPos = url.indexOf('/');
		let ver = url.slice(0, verPos);
		url = url.slice(verPos + 1);

		let json = fs.existsSync(this.logFile) ? JSON.parse(fs.readSync(this.logFile)) : {};
		if (json[url]) {
			// 删除不同版本下的同个资源
			let [, oldVer] = json[url];
			if (oldVer > 0 && oldVer != ver) {
				let targetFilename = path.getLocalFilePath(resSrc);
				if (fs.existsSync(targetFilename)) {
					QQFS.unlinkSync(QQ_ROOT + targetFilename);
				}
			}
		}
		json[url] = [(new Date()).getTime(), ver];
		fs.writeSync(this.logFile, JSON.stringify(json));
	}

	/**
	 * 清理>=一天没使用的资源
	 * 每次启动程序调用一次即可
	 */
	static clear1DayRes() {
		let dayTime = 24 * 60 * 60 * 1000;
		let curTime = (new Date).getTime();
		let json = fs.existsSync(this.logFile) ? JSON.parse(fs.readSync(this.logFile)) : {};
		for (let i in json) {
			let [time, ver] = json[i];
			if (time - curTime >= dayTime) {
				// 删除ver 版本下的i
				let resPath = path.getLocalFilePath(urlParam.root + ver + '/' + i);
				QQFS.unlinkSync(path.getQQUserPath(resPath));
				delete json[i];
			}
		}
		fs.writeSync(this.logFile, JSON.stringify(json));
	}
}