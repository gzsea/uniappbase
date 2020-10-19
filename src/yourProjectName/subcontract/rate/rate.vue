<template>
	<view class="content">
		<view v-for="(item,index) in array" class="ababab">
			<view>评分项{{index+1}}:</view>
			<view>	
				<u-rate :count="count" custom-prefix="custom-icon" :inactive-icon="'bordercircle'" active-icon="greenyuan" :active-color="'#004E2D'" :inactive-color="'#07291E'" v-model="array[index]" @change="ababab"></u-rate>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count: 10,
				value: 0,
				array: [],
			};
		},
		onLoad() {
			for (var i = 0; i < 10; i++) {
				this.array.push(0)
			}
		},
		methods: {
			ababab(e){
				console.log(e)
			}
		}
	};
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.ababab{
		display: flex;
	}
</style>
