judgegame()
	.then(() => {
		// 进游戏
        getJsonToGame()
	})
	.catch(() => {
		intoMiniGame()
	})

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
function hasJsonToGame(str, data) {
	console.log(str, '')
	wx[str] = JSON.parse(data)
	// wx.setStorage({
	// 	key: str,
	// 	data:  JSON.parse(data)
	// })
	let l = jsonList.length - 1
	if (num == l) {
		// debugger
		intoGame()
	}
	num++
}
// 微信api 读取文件
function wxReadFile(filePath, str, toGame) {
	return new Promise((resolve, reject) => {
		fs.readFile({
			filePath,
			encoding: 'utf-8',
			success(res) {
				// console.log('读取成功')
				if (toGame && res.data) {
					hasJsonToGame(str, res.data)
				}
				resolve(res)
			},
			fail(err) {
				// console.log(err, '读取失败')
				reject(err)
			}
		})
	})
}

// 拿到游戏的json
function getJsonToGame() {
	for (let i = 0; i < jsonList.length; i++) {
		let date = jsonList[i].split('_')[0]
		let str = jsonList[i].split('_')[1]
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
							hasJsonToGame(str, res.data)
						} else {
							// 如果是zip文件，直接读取已经解压了的文件
							wxReadFile(zip2JsonPath, zip2JsonName, true)
						}
					})
					.catch(err => {
						// 没缓存，下载
						wx.downloadFile({
							url: `${downloadUrl}/${date}/${str}${end}`,
							filePath: path,
							timeout: 10000,
							success(res) {
								// 如果是json的文件
								if (res.statusCode === 200) {
									if (end) {
										wxReadFile(path, str, true)
									} else {
										// 如果是zip的压缩文件
										fs.unzip({
											zipFilePath: res.filePath || res.tempFilePath,
											targetPath: rootPath,
											success(res) {
												// console.log(res, '解压成功')
												wxReadFile(zip2JsonPath, zip2JsonName, true)
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
	}
}
