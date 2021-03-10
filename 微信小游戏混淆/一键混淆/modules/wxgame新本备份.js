const rootPath = wx.env.USER_DATA_PATH
const fs = wx.getFileSystemManager();
judgegame()
    .then(() => {
        // 进游戏
        intoGame()
    })
    .catch(() => {
        intoMiniGame()
    })

function getJsonName(str) {
    let name = jsonList.filter(item => item.includes(str))
    return name[0]
}

// 判断进壳还是进游戏
function judgegame() {
    return new Promise((resolve, reject) => {
        wx.request({
            url: 'https://gminiapi.xinghe66.cn/mp/index',
            method: 'GET',
            data: {
                app_id: gameId,
                versions,
                format: 'json'
            },
            success(res) {
                // status 2 提审状态
                if (res.data.code == 200 && res.data.data.status == 2) {
                    reject()
                } else {
                    resolve()
                }
            },
            fail() {
                reject()
            }
        })
    })
}

// 赋值json给全局
function hasJsonToGame(str, data, cb) {
    console.log(str, '')
    let res = JSON.parse(data)
    wx[str] = res
    cb && cb(res)
}

// 微信api 读取文件
function wxReadFile(filePath, str, toGame, cb) {
    function rf(sucFn, errFn) {
        fs.readFile({
            filePath,
            encoding: 'utf-8',
            success(res) {
                // console.log('读取成功')
                if (toGame && res.data) {
                    hasJsonToGame(str, res.data, cb)
                }
                sucFn && sucFn(res)
            },
            fail(err) {
                // console.log(err, '读取失败')
                errFn && errFn(err)
            }
        })
    }
    if (toGame) {
        rf()
    } else {
        return new Promise((resolve, reject) => {
            rf(resolve, reject)
        })
    }
}

// 拿到游戏的json
function getJsonToGame(fileName, cb) {
    // for (let i = 0; i < jsonList.length; i++) {
    let date = fileName.split('_')[0]
    let str = fileName.split('_')[1]
    let end = str.includes('.zip') ? '' : '.json'
    const path = `${rootPath}/${date}/${str}${end}`
    const zip2JsonName = !end && str.split('.')[0]
    const zip2JsonPath = `${rootPath}/${zip2JsonName}.json`

    fs.access({
        path: `${rootPath}/${date}`,
        success(res) {
            // console.log(res, '==目录存在')
        },
        fail(err) {
            // console.log('目录不存在')
            fs.mkdir({
                dirPath: `${rootPath}/${date}`,
                recursive: true,
                success(res) {
                    // console.log('目录创建成功')
                }
            })
        },
        complete() {
            wxReadFile(path)
                .then(res => {
                    // 有缓存，直接读取
                    if (end) {
                        // 如果是json文件，直接赋值给全局
                        hasJsonToGame(str, res.data, cb)
                    } else {
                        // 如果是zip文件，直接读取已经解压了的文件
                        wxReadFile(zip2JsonPath, zip2JsonName, true, cb)
                    }
                })
                .catch(err => {
                    // 没缓存，下载
                    wx.downloadFile({
                        url: `${downloadUrl}/${date}/${str}${end}`,
                        timeout: 10000,
                        filePath: path,
                        success(res) {
                            if (res.statusCode === 200) {
                                if (end) {
                                    // 如果是json的文件
                                    wxReadFile(path, str, true, cb)
                                } else {
                                    // 如果是zip的压缩文件
                                    fs.unzip({
                                        zipFilePath: res.filePath || res.tempFilePath,
                                        targetPath: rootPath,
                                        success(res) {
                                            // console.log(res, '解压成功')
                                            wxReadFile(zip2JsonPath, zip2JsonName, true, cb)
                                        },
                                        fail(err) {
                                            console.log(err, '==解压失败')
                                        }
                                    })
                                }
                            } else {
                                console.error('下载失败，文件不存在')
                                fs.unlink({
                                    filePath: `${rootPath}/${date}/${str}${end}`,
                                    success(res) {
                                        // console.log(res, '删除成功')
                                    },
                                    fail(err) {
                                        // console.log(err, '删除失败')
                                    }
                                })
                            }
                        },
                        fail(err) {
                            console.log(err, '====下载失败')
                        }
                    })
                })
        }
    })
    // }
}

wx.getJsonName = getJsonName
wx.getJsonToGame = getJsonToGame
