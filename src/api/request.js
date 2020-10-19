import store from '../../store/index.js'
export const request = (options) => {
	return new Promise((resolve, reject) => {
		if(!options.url){
			console.error('请传入URL')
		}
		var api = store.state.globalApi
		if(uni.getStorageSync('istest')){
			api = store.state.tGlobalApi
		}
		if (uni.getStorageSync('token')) {
			uni.request({
				// #ifdef H5
				url: "/api/" + options.url,
				// #endif
				// #ifndef H5
				url:  + options.url,
				// #endif
				method: options.method || 'GET',
				data: options.data || '',
				header: {
					"Content-Type": "application/json",
				},
				success: (res) => {
					if(res.statusCode >= 500){
						console.error('服务端错误，请检查接口')
					}else{
						resolve(res.data)
					}
				},
				fail: (err) => {
					uni.showToast({
						title: '请求失败'
					})
					reject(err)
				}
			})
		} else {

		}
	})
}
export const uploadimage = (event) => {
	return new Promise((resolve, reject) => {
		const token = uni.getStorageSync('userInfo').token
		var pathList = [];
		uni.chooseImage({
			count: event.count ? event.count : 1,
			success: (chooseImageRes) => {
				const tempFilePaths = chooseImageRes.tempFilePaths;
				console.log(tempFilePaths)
				uni.showLoading({
					title: '上传中'
				})
				var userid = uni.getStorageSync('userinfo').id
				for (let i = 0; i < tempFilePaths.length; i++) {
					uni.request({
						url: "https://api.coufu.net/common/common/oss/aliyun/sign/" + userid,
						method: 'GET',
						header: {
							"Content-Type": "application/json",
							Authentication: uni.getStorageSync('token')
						},
						success: (res) => {
							console.log(res)
							var key = userid + "/" + Date.now()
							console.log(key)
							uni.uploadFile({
								url: "http://coufu001.oss-cn-qingdao.aliyuncs.com/",
								filePath: tempFilePaths[i],
								name:'file',
								formData: {
									key :key,
									policy: res.data.data.policy,
									OSSAccessKeyId: res.data.data.accessId,
									success_action_status: 200,
									Signature: res.data.data.signature
								},
								header: {
									"Content-Type": "multipart/form-data"
								},
								success: (uploadFileRes) => {
									console.log(uploadFileRes)
									var feedback = 'http://coufu001.oss-cn-qingdao.aliyuncs.com/'+ key
									pathList.push(feedback)
									console.log(feedback)
									if(pathList.length == tempFilePaths.length){
										resolve(pathList)
										console.log(pathList)
										uni.hideLoading();
									}
								},
								fail:(res) =>{
									console.error(res)
								}
							});
						}
					})
				}
			}
		});
	})
}
export const uploadvideo = (event) => {
	return new Promise((resolve, reject) => {
		const token = uni.getStorageSync('userInfo').token
		uni.chooseVideo({
			count: event.count ? event.count : 1,
			success: (res) => {
				console.log(res)
				const tempFilePaths = res.tempFilePath;
				console.log(tempFilePaths)
				// for (let i = 0; i < tempFilePaths.length; i++) {
				uni.uploadFile({
					url: event.url,
					filePath: tempFilePaths,
					name: event.name ? event.name : 'file',
					header: {
						"Content-Type": "multipart/form-data"
					},
					formData: {
						token: token
					},
					success: (uploadFileRes) => {
						var path = JSON.parse(uploadFileRes.data).data.path
						resolve(path)
					}
				});
				// }
			}
		});
	})
}
