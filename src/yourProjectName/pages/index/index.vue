<template>
	<view>
		<u-cell-group title="实验组件">
			<u-cell-item icon="setting-fill" title="茶档案-评分" @click="rate"></u-cell-item>
			<u-cell-item icon="integral-fill" title="茶档案-海报" @click="poster"></u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		onLoad() {},
		methods: {
			// 茶档案-评分
			rate(){
				uni.navigateTo({
					url:'../../subcontract/rate/rate'
				})
			},
			// 茶档案-海报
			/**
			 * @
			 */
			poster(){
				uni.navigateTo({
					url:'../../subcontract/poster/poster'
				})
			}
		}
	};
</script>

<style>
</style>
