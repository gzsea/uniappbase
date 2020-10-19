<template>
	<view>
		<view class="bg">
			<view class="model">
				<canvas class="poster" canvas-id="Poster" id="Poster" @tap="posterClick"></canvas>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				path:""
			}
		},
		onReady() {
			// 创建画布对象
			const ctx = uni.createCanvasContext('Poster')
			// 头部图片
			ctx.drawImage('../static/posterBg.jpg', 0, 0, 355, 507)
			ctx.drawImage('../static/posterTop.png', 10, 10, 315, 236)
			// 用户头像
			ctx.save()
			ctx.beginPath()
			ctx.arc(50, 286, 20, 0, 360)
			ctx.clip()
			ctx.drawImage('../static/posterAvatar.jpg', 30, 266, 40, 40)
			ctx.closePath()
			ctx.restore()
			// 用户名
			ctx.setFontSize(14)
			ctx.setFillStyle('#07291E')
			ctx.fillText("笨鸟", 80, 281)
			// 说明
			ctx.setFontSize(12)
			ctx.setFillStyle('#799482')
			ctx.fillText("正在 茶档案 上阅读这篇茶评", 80, 300, 240)
			// 文案
			let initHeight = 357;
			let lineWidth = 0;
			let lastSubStrIndex = 0;
			let text = "饮山审评录 | 布朗山的古树茶";
			ctx.setFontSize(24)
			ctx.setFillStyle('#07291E')
			for (let i = 0; i < text.length; i++) {
				lineWidth += ctx.measureText(text[i]).width;
				 if (lineWidth > 270) {
				            ctx.fillText(text.substring(lastSubStrIndex, i), 30, initHeight); //绘制截取部分
				            initHeight += 32;
				            lineWidth = 0;
				            lastSubStrIndex = i;
				        }
				        if (i == text.length - 1) {
				            ctx.fillText(text.substring(lastSubStrIndex, i + 1), 30, initHeight);
				        }

			}
			//线条
			ctx.moveTo(30,412)
			ctx.lineTo(305, 412)
			ctx.setStrokeStyle('#07291E')
			ctx.stroke()
			// 小程序码
			ctx.drawImage("../static/posterCode.jpg",30,427,60,60)
			// 文字
			ctx.setFontSize(12)
			ctx.setFillStyle('#799482')
			ctx.fillText("长按小程序码", 110, 449)
			ctx.fillText("进入 茶档案 阅读全文", 110, 469)
			ctx.draw(false,(suc)=>{
				console.log(suc)
				uni.canvasToTempFilePath({
					canvasId:'Poster',
					success: (res) => {
						console.log(res.tempFilePath)
						this.path = res.tempFilePath
					}
				})
			})
			
		},
		methods: {
			posterClick(){
				var arr = [this.path]
				uni.previewImage({
					urls:arr,
					fail: (err) => {
						console.log(e)
					}
				})
			}
		}
	}
</script>

<style>
	.bg {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #00000045;
	}

	.bg .model {
		background-color: #FFFFFF;
		width: 335px;
		height: 507px;
		margin: 64rpx auto;
	}

	.poster {
		width: 335px;
		height: 100%;
		background-color: #FFFFFF;
	}
</style>
