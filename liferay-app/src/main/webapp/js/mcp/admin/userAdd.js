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

		// 分组store
		var group_store = Ext.create('Ext.data.Store', {
					fields : ['groupId', 'groupName'],
					proxy : {
						type : 'ajax',
						url : '/admin/group/groupList.data?content=json',
						reader : {
							type : 'json',
							root : 'rows',
							totalProperty : 'totalCount'
						},
						actionMethods : {
							read : 'POST'
						}
					}
				});

		// 角色store
		var roles_store = Ext.create('Ext.data.Store', {
					fields : ['roleId', 'roleName'],
					proxy : {
						type : 'ajax',
						url : '/admin/roles/rolesList.data?content=json',
						reader : {
							type : 'json',
							root : 'rows',
							totalProperty : 'totalCount'
						},
						actionMethods : {
							read : 'POST'
						}
					}
				});

		// 状态store
		var state_store = Ext.create('Ext.data.Store', {
					fields : ['id', 'name'],
					data : user_state_data
				});

		var organization_comboBox = Ext.create("Ext.ux.comboboxtree", {
					storeUrl : '/admin/organization/organizationTreeAllList.json',
					cascade : 'child',// 级联方式:1.child子级联;2.parent,父级联,3,both全部级联
					checkModel : 'single',// 当json数据为不带checked的数据时只配置为single,带checked配置为double为单选,不配置为多选
					fieldLabel : '组织机构',
					anchor : '100%',
					editable : false,
					emptyText : '请选择组织结构',
					rootId : 'organizationId',
					rootText : 'organizationName'
				});

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
														store : state_store,
														editable : false,
														emptyText : '请选择状态',
														fieldLabel : '状态',
														displayField : 'name',
														valueField : 'id'
													}, {
														xtype : 'combobox',
														anchor : '100%',
														store : roles_store,
														editable : false,
														emptyText : '请选择用户角色',
														fieldLabel : '用户角色',
														displayField : 'roleName',
														valueField : 'roleId'
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
													}, organization_comboBox, {
														xtype : 'combobox',
														anchor : '100%',
														store : group_store,
														fieldLabel : '分组',
														editable : false,
														emptyText : '请选择分组',
														displayField : 'groupName',
														valueField : 'groupId'
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