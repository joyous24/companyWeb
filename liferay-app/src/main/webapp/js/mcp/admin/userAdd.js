/**
 * 用户新增
 * 
 * @author zxq
 * @data 2015-09-24
 */
Ext.define('user.window.userAdd', {
			extend : 'Ext.window.Window',

			requires : ['Ext.form.Panel', 'Ext.form.field.ComboBox',
					'Ext.toolbar.Toolbar', 'Ext.button.Button',
					'Ext.form.field.TextArea'],

			autoShow : true,
			height : 320,
			width : 714,
			closeAction : 'hide',
			resizable : false,
			animCollapse : true,
			title : '新增用户',
			maximizable : true,
			modal : true,
			iconCls : 'form_add',
			layout : {
				type : 'vbox',
				align : 'stretch'
			},

			initComponent : function() {
				var me = this;

				Ext.applyIf(me, {
							defaults : {
								border : false
							},
							items : [{
										xtype : 'form',
										layout : {
											type : 'hbox',
											align : 'stretch'
										},
										defaults : {
											border : false
										},
										items : [{
													xtype : 'form',
													flex : 1,
													bodyPadding : 10,
													items : [{
																xtype : 'textfield',
																anchor : '100%',
																fieldLabel : '账户'
															}, {
																xtype : 'textfield',
																anchor : '100%',
																fieldLabel : '手机号'
															}, {
																xtype : 'combobox',
																anchor : '100%',
																fieldLabel : '状态'
															}, {
																xtype : 'combobox',
																anchor : '100%',
																fieldLabel : '用户角色'
															}]
												}, {
													xtype : 'form',
													flex : 1,
													bodyPadding : 10,
													items : [{
																xtype : 'textfield',
																anchor : '100%',
																fieldLabel : '姓名'
															}, {
																xtype : 'textfield',
																anchor : '100%',
																fieldLabel : '邮箱',
																vtype : 'email'
															}, {
																xtype : 'combobox',
																anchor : '100%',
																fieldLabel : '组织机构'
															}, {
																xtype : 'combobox',
																anchor : '100%',
																fieldLabel : '分组'
															}]
												}]
									}, {
										xtype : 'form',
										flex : 1,
										bodyPadding : 10,
										title : '',
										items : [{
													xtype : 'textareafield',
													anchor : '100%',
													fieldLabel : '描述'
												}]
									}],
							dockedItems : [{
										xtype : 'toolbar',
										flex : 1,
										dock : 'bottom',
										ui : 'footer',
										layout : {
											type : 'hbox',
											pack : 'center'
										},
										items : [{
													xtype : 'button',
													text : '保存'
												}, {
													xtype : 'button',
													text : '重置'
												}]
									}]
						});

				me.callParent(arguments);
			}

		});