/**
 * 用户管理
 * 
 * @author zxq
 * @data 2015-06-29
 */
Ext.require(['Ext.Viewport', 'Ext.data.Store', 'Ext.tree.Panel',
		'Ext.form.ComboBox']);
Ext.onReady(function() {
			var itemsPerPage = 10; // 设置你想要的每页显示条数
			// --------------------状态下拉框------------------------
			var stateStore = Ext.create('Ext.data.Store', {
						fields : ['value', 'name'],
						data : []
					});
			var stateComboBox = Ext.create('Ext.form.ComboBox', {
						fieldLabel : '状态',
						store : stateStore,
						queryMode : 'local',
						displayField : 'name',
						valueField : 'value',
						editable : false,
						width : 150,
						labelWidth : 40,
						emptyText : '全部'
					});

			// --------------------表格展示列表------------------------
			var store = Ext.create('Ext.data.Store', {
						fields : ['userAccount', 'userName', 'mobile', 'email',
								'state', 'organizationName', 'roleName',
								'groupName', 'createTime', 'loginTime',
								'lastLoginTime', 'loginCount'],
						pageSize : itemsPerPage,
						proxy : {
							type : 'ajax',
							url : '/admin/user/userList.data?content=json',
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
			store.load({
						params : {
							start : 0,
							limit : itemsPerPage
						}
					});

			var userAddWindow = null;
			var grid = Ext.create('Ext.grid.Panel', {
						useArrows : true,
						rootVisible : false,
						multiSelect : true,
						singleExpand : true,
						store : store,
						defaults : {
							autoScroll : true
						},
						columns : [{
									xtype : "rownumberer"
								}, {
									text : '账户',
									dataIndex : 'userAccount',
									width : 150,
									align : 'center'
								}, {
									text : '姓名',
									dataIndex : 'userName',
									width : 150,
									align : 'center'
								}, {
									text : '手机号',
									dataIndex : 'mobile',
									width : 150,
									align : 'center'
								}, {
									text : '邮箱',
									dataIndex : 'email',
									width : 150,
									align : 'center'
								}, {
									text : '状态',
									dataIndex : 'state',
									width : 150,
									align : 'center'
								}, {
									xtype : 'treecolumn',
									text : '组织机构',
									dataIndex : 'organizationName',
									width : 150,
									align : 'center'
								}, {
									xtype : 'treecolumn',
									text : '用户角色',
									dataIndex : 'roleName',
									width : 150,
									align : 'center'
								}, {
									xtype : 'treecolumn',
									text : '分组',
									dataIndex : 'groupName',
									width : 150,
									align : 'center'
								}, {
									text : '创建时间',
									dataIndex : 'createTime',
									width : 150,
									align : 'center'
								}, {
									text : '登陆时间',
									dataIndex : 'loginTime',
									width : 150,
									align : 'center'
								}, {
									text : '上次登陆时间',
									dataIndex : 'lastLoginTime',
									width : 150,
									align : 'center',
									hidden : true
								}, {
									text : '登陆次数',
									dataIndex : 'loginCount',
									width : 150,
									align : 'center',
									hidden : true
								}, {
									text : '操作',
									dataIndex : 'operation',
									width : 150,
									align : 'center'
								}],
						tbar : [{
									xtype : 'button',
									text : '新增用户',
									iconCls : 'form_add',
									handler : function() {
										if (userAddWindow == null) {
											userAddWindow = new user.window.userAdd();
										}
										userAddWindow.show();
									}
								}, {
									xtype : 'button',
									text : '重置密码',
									iconCls : 'form_user_key'
								}, '->', {
									xtype : 'textfield',
									fieldLabel : '账户',
									labelWidth : 40
								}, '-', {
									xtype : 'textfield',
									fieldLabel : '姓名',
									labelWidth : 40
								}, '-', stateComboBox, {
									xtype : 'button',
									text : '查询',
									iconCls : 'form_query'
								}],
						bbar : {
							xtype : 'pagingtoolbar',
							store : store,
							dock : 'bottom',
							displayInfo : true,
							plugins : new Ext.ux.ProgressBarPager()
						}
					});

			// --------------------布局界面------------------------
			var viewport = Ext.create('Ext.Viewport', {
						layout : "fit",
						items : grid
					});

		});