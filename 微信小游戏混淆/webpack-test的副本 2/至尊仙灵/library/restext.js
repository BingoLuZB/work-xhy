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


egret.HttpRequest.prototype.__old_send = egret.HttpRequest.prototype.send;

egret.HttpRequest.prototype.send = function (d) {
    this._response = undefined;
    
    var src = this._url;
    // 1. 检查是否需要缓存
    if (path.isRemotePath(src)) { //判断是本地加载还是网络加载
        if (!cachefiles.needCache(src)) {
            //无需缓存加载
            //console.log('TEXT-无需缓存加载:', src)
            return this.__old_send(d);
        } else {
            // 1.2. 需要：通过缓存机制加载
            var self_1 = this;
            function success(data) {
                if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {
                    try {
                        data = JSON.stringify(data);
                    }
                    catch (e) {
                        data = data;
                    }
                }
                self_1._responseHeader = null;
                self_1._response = data;
                self_1.dispatchEventWith(egret.Event.COMPLETE);
            }
            function fail() {
                self_1.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
            }

            const fullname = path.getLocalFilePath(src);
            if (fs.existsSync(fullname)) {
                //console.log('TEXT-缓存命中:', src, fullname)
                let data = fs.readSync(fullname, 'utf-8');
                success(data);
            } else {
                //console.log('TEXT-下载中:', src, fullname)
                download(src, fullname).then(
                    (filePath) => {
                        //console.log('TEXT-下载成功:', src, filePath)
                        fs.setFsCache(fullname, 1);
                        let data = fs.readSync(fullname, 'utf-8');
                        success(data);
                    },

                    (error) => {
                        //console.log('TEXT-下载失败:', src, filePath)
                        fail();
                        console.error(error);
                    }
                );
            }
        }
    } else {
        console.log('TEXT-本地资源:', src)
        return this.__old_send(d);
    }
};
