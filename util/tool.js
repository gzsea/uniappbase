import Vue from 'vue'
import App from '../src/App.vue'

/**
 * 保留两位小数点
 * @author 晨昱
 * @date 2020-09-15
 * @param {Number} price
 */
Vue.filter('price', function(price) {
	return parseFloat(price).toFixed(2)
})

/**
 * 服务端数据-时间戳转字符串
 * @author 晨昱
 * @date 2020-09-15
 * @param {Number} timestamp
 */
Vue.filter('datestamp', function(timestamp) {
	console.log(timestamp)
	var d = new Date(timestamp * 1000); //根据时间戳生成的时间对象
	var year = d.getFullYear();
	var month = d.getMonth() + 1
	if (month < 10) {
		month = "0" + month
	}
	var date = d.getDate();
	if (date < 10) {
		date = "0" + date
	}
	var date = year + "-" + month + "-" + date
	return date
})

/**
 * 时间戳转字符串
 * @author 晨昱
 * @date 2020-09-15
 * @param {Number} timestamp
 */
Vue.filter('timestamp', function(timestamp) {
	console.log(timestamp)
	var d = new Date(timestamp * 1000); //根据时间戳生成的时间对象
	var year = d.getFullYear();
	var month = d.getMonth() + 1
	if (month < 10) {
		month = "0" + month
	}
	var date = d.getDate();
	if (date < 10) {
		date = "0" + date
	}
	var hours = d.getHours()
	if (hours < 10) {
		hours = "0" + hours
	}
	var minutes = d.getMinutes()
	if (minutes < 10) {
		minutes = "0" + minutes
	}
	var seconds = d.getSeconds()
	if (seconds < 10) {
		seconds = "0" + seconds
	}
	var date = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
	return date
})

/**
 * 生成的时间戳
 * @author 晨昱
 * @date 2020-09-15
 * @param {Number} timestamp
 */
Vue.filter('jstimestamp', function(timestamp) {
	var d = new Date(timestamp); //根据时间戳生成的时间对象
	var date = (d.getFullYear()) + "-" +
		(d.getMonth() + 1) + "-" +
		(d.getDate()) + " " +
		(d.getHours()) + ":" +
		(d.getMinutes()) + ":" +
		(d.getSeconds());
	return date
})

/**
 * 获取年月日
 * @author 晨昱
 * @date 2020-09-15
 * @param {String} type
 */
Vue.prototype.getDate = function(type){
	const date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
				
	if (type === 'start') {
		year = year - 10;
	} else if (type === 'end') {
		year = year + 10;
	}
	month = month > 9 ? month : '0' + month;;
	day = day > 9 ? day : '0' + day;
	return `${year}-${month}-${day}`;
}