/**
 * 用户新增
 * 
 * @author zxq
 * @data 2015-09-24
 */
Ext.define('user.window.userAdd', {
			extend : 'Ext.container.Container',
			requires : ['Ext.Window', 'Ext.form.Panel'],
			// 构造
			constructor : function(config) {
				this.user_window = null;
				this.init();
			},
			// 初始化
			init : function() {
				var form = Ext.create('Ext.form.Panel', {
							bodyPadding: 10,
							fieldDefaults : {
								msgTarget : 'side'
							},
							defaults : {
								border : false,
								xtype : 'panel',
								flex : 1,
								layout : 'anchor'
							},
							layout : 'hbox',
							items : []
						});

				// windows
				this.user_window = Ext.create('Ext.Window', {
							title : '新增用户',
							animCollapse : true,
							maximizable : true,
							modal : true,
							width : 750,
							height : 500,
							minWidth : 300,
							minHeight : 200,
							layout : 'fit',
							items : form,
							dockedItems : [{
										xtype : 'toolbar',
										dock : 'bottom',
										ui : 'footer',
										layout : {
											pack : 'center'
										},
										items : [{
													minWidth : 80,
													text : '保存'
												}, {
													minWidth : 80,
													text : '取消'
												}]
									}]
						});
			},
			show : function() {
				this.user_window.show();
			}

		});