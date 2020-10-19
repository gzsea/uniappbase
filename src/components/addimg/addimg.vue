<template>
	<view>
		<view class="titleLine">
			<view class="leftRight">
				<view class="left">
					<view class="titleBold">
						<slot></slot>
					</view>
				</view>
			</view>
			<view class="psPic">
				<view class="onePic" v-if="storpic.length != 0" v-for="(item, index) in storpic" :key='index'>
					<view class="pic">
						<image :src="item" mode="aspectFit"></image>
					</view>
					<view class="delPic">
						<image :src="del" mode="" @click="delpic(index)"></image>
					</view>
				</view>
				<view class="onePic" v-if="storpic.length < count">
					<view class="addIcon">
						<image :src="add" mode="" @click="addpic"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'addimg',
		data() {
			return {
				storpic: [],
				add: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAACLElEQVR4Xu2cwUrDQBCGZ0yxptJDjxYr6LWCDyFefA4vgoLgc4iCghefw4v4EEJ7VbBSjwXbJq00HdnUak0MdEITQvr3lrKbZL58O8sm7DAFft3hsM6ed0QiB8S8RSLlYJtcHDN3SeSVmB/Esu7KxWJzNi6eHjREVrdd90JEjonIykXw8wfhMfPti22f7zJ/mm4+GANlZzC4H4/H+/OfK38tV5gfn2370MDxwfQd51pETvIXqj4iZr5ZL5VO2c8po9HTEg6fKGqeFAp73HOcSxI507PNcQ/mK+71+w0iquc4zDihNY0xH7mdkuMg8ack7hpjJG7/PPcDmIinCzAAoxv4MAbGwBgdARij44UcA2NgjI4AjNHxykSOGbgudTod/84rlQqt2bYuigRaZwLMe7tNnuf54VmWRRvVagKh6k6ZCTBvrdafu96s1XRRJNAaYLKcfGFMxNMBGIDRZUMYA2NgjI4AjNHxQo5ZZmOmC8Lp2kfnjr61WVslsfBc+JJgdkGoDzNejyQWngCT1loJQyme9f/2wqy0zLNSHJFgDIzReQNjYAyM0RGAMTpeyDEwBsboCES0xifaCDD4qL8Qv9I5ycLfx6Rz28lfBWDSelGV/LNM5wowBsboTIMxMAbG6AjAGB0v5BgYozUG24vDxL63F2NDehiNvyEdJQyCYEwJAxS9COkyKXph/kaZlF84P2VSzF8orDMBEyqsM4WDUkyBUkyzowzFuyY0vgDE7eD6sWlm4wAAAABJRU5ErkJggg==',
				del: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACy0lEQVRYR82XS0hUURiAv4OiCycRQpnKNmH5yMkgfEAPol24ciEVFaGURA+z0qYMJxrJmuxhVkYWAyFh4MJVtIvoAT4I0jEfFW0qG5RAzCBDOfHLvTE66oyKXc/y3nP+/zv/+yjCXFprG5AL7AAygDVArHF8GPgMdADPgadKqZFwRKtQm7TWSYAT2APEhNpv/P8FNAIepdSn2c7MCKC1jgbcQAkQpbXG19VLS/s7evo+8rXfz8iI6AGbLYbElXZSk9eSk7kRR3oKSk2I/gPUAC6l1Oh0INMCaK3tQDOQI4pfvWnD29DEt35/WAZIXGWnYF8+WzdnmSAtQJ5SKkhAEIDW2iE+BFZ/9w9Qda2O3r5ZrTgjVEpyEuWlR1hhT5A9XySGlFK+wAOTAIybt4nyDl837su1DP8MK5ZmhIhdZsN1rpgMR5oJkRVoiX8Ahs9fiNlF+dkKD2Pj42GZPNSmyIgIrlQ6TQhxx3YzJgIBPMAZMfuxU64F33wqlFjizg236Y6rSinJLCYAjFR7r7WOKi67OG+fh7KExERt9QUJTMmO9ZKiJsAD4ODL161Uem6HkrOg/xXO42zbki0yHiqlDimjwvm11jEFh8vCTrX5UkiKeu9VixWkiNgFYBfwpMPXQ2n5pfnKndO561Xn2eBIlTO7BeA+UFTvbaSpWdJ/8Vd+Xi5FhVLZqRcASYvsk043Xd0fFl87kJ62jpsel+hqFYABID5//xGGhqSpTV6ZmzIoOVpIQvzyOcENDP6g5q6X9rfSICevuLhYmhrq5OOgAPwGonfmHWBsLLjwPPbemrNyU51A7C08EQQQGRnBs+ZH8n10SQBY7gLLg9DyNJwoRJ2+Hk5bVIhk2LSuFBvd0LpmtCTasQFh3UBiAMgYbt1IZkDIOG7NUGoWbEvH8gAI6x4mARBBT7POrl5a/8fTLLB/WvY4ndrEF+t5/hd2j8VY9WAqPwAAAABJRU5ErkJggg=='
			};
		},
		props: {
			imgarr: {
				type: Array,
				default: function() {
					return []
				}
			},
			count:{
				type:Number,
				default: 1
			}
		},
		beforeCreate: function() {
			console.log('beforeCreate 创建前状态===============》');			
		},
		created: function() {
			console.log('created 创建完毕状态===============》');
		},
		beforeMount: function() {
			console.log('beforeMount 挂载前状态===============》');
		},
		mounted: function() {
			console.log('mounted 挂载结束状态===============》');
		},
		beforeUpdate: function() {
			console.log('beforeUpdate 更新前状态===============》');
			this.imgarr.length>0?this.storpic = this.imgarr:''
		},
		updated: function() {
			console.log('updated 更新完成状态===============》');
		},
		beforeDestroy: function() {
			console.log('beforeDestroy 销毁前状态===============》');
		},
		destroyed: function() {
			console.log('destroyed 销毁完成状态===============》');
		},
		methods: {
			async addpic() {
				var upload = await this.upload({
					count: this.count,
					url: this.API.public.upload,
					name: 'name'
				})
				// 3.存到this的data里
				for (var i = 0; i < upload.length; i++) {
					if (this.storpic.length < 6) {
						this.storpic.push(upload[i])
					}
				}
				this.$emit('click', this.storpic)
			},
			delpic(index) {
				this.storpic.splice(index, 1);
			}
		}
	}
</script>

<style>
	.titleLine {
		background: rgba(255, 255, 255, 1);
		padding: 40rpx 30rpx;
		margin-top: 20rpx;
	}

	.titleAddLine {
		background: rgba(255, 255, 255, 1);
		padding: 40rpx 30rpx 0rpx 30rpx;
		margin-top: 20rpx;
	}

	.leftRight {
		display: flex;
		justify-content: space-between;
	}

	.left {
		display: flex;
	}

	.titleBold {
		flex-shrink: 0;
		font-size: 34rpx;
		font-weight: 500;
		color: rgba(32, 35, 40, 1);
		line-height: 34rpx;
	}

	.titleSign {
		font-size: 34rpx;
		margin-left: 16rpx;
		color: rgba(235, 93, 77, 1);
		margin-top: -6rpx;
	}

	.paragraph textarea {
		width: 100%;
		font-size: 30rpx;
		font-weight: 500;
		color: rgba(127, 131, 139, 1);
		line-height: 46rpx;
		text-align: justify;
		margin-top: 32rpx;
		height: 164rpx;
	}

	.rightIcon {

		display: flex;
	}

	.chooseTex {
		font-size: 30rpx;
		font-weight: 500;
		color: rgba(33, 33, 33, 1);
		line-height: 30rpx;
		text-align: right;
		margin-right: 36rpx;
		width: 400rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.rightIcon image {
		width: 26rpx;
		height: 26rpx;
		margin-top: 4rpx;
	}

	.rightInput {
		width: 404rpx;
		margin-top: -4rpx;
	}

	.rightInput input {
		font-size: 30rpx;
		font-weight: 500;
		color: rgba(127, 131, 139, 1);
		text-align: right;
		padding-left: 30rpx;
	}

	.buttonheight {
		height: 100upx;
	}

	.psPic {
		margin-top: 32rpx;
		display: flex;
	}

	.onePic {
		position: relative;
		margin-left: 30rpx;

	}

	.onePic:nth-child(1) {
		margin-left: 0rpx;
	}

	.pic {
		width: 70rpx;
		height: 70rpx;
		border-radius: 8rpx;
	}

	.pic image {
		border-radius: 8rpx;
		width: 100%;
		height: 100%;
	}

	.delPic {
		width: 32rpx;
		height: 32rpx;
		position: absolute;
		top: -16rpx;
		left: 50rpx;
	}

	.delPic image {
		width: 32rpx;
		height: 32rpx;
	}

	.addIcon {
		width: 70rpx;
		height: 70rpx;
		border-radius: 8px;
	}

	.addIcon image {
		width: 70rpx;
		height: 70rpx;
		border-radius: 8px;
	}
</style>
