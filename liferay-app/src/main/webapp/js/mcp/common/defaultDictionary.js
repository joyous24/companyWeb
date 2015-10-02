/**
 * 缺省字典 2015-10-01
 */

// 用户状态数据
var user_state_data = [{
			"id" : "1",
			"name" : "正常"
		}, {
			"id" : "2",
			"name" : "冻结"
		}, {
			"id" : "3",
			"name" : "已删除"
		}, {
			"id" : "4",
			"name" : "锁定"
		}, {
			"id" : "5",
			"name" : "超级管理员"
		}];

var user_state_data_fn = function(value) {
	var name = "";
	Ext.iterate(user_state_data, function(k, v, m) {
				if (value == k.id) {
					name = k.name;
					return false;
				}// end if
			});
	return name;
}