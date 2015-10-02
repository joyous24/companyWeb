/**
 * 角色管理
 * 
 * @author zxq
 * @data 2015-07-01
 */
Ext.require(['Ext.Viewport', 'Ext.data.Store', 'Ext.grid.Panel',
		'Ext.ux.ProgressBarPager', 'Ext.form.ComboBox']);
Ext.onReady(function() {
			var itemsPerPage = 10; // 设置你想要的每页显示条数
			// --------------------表格展示列表------------------------
			var store = Ext.create('Ext.data.Store', {
						fields : ['roleCode', 'roleName', 'createTime',
								'roleDescription'],
						pageSize : itemsPerPage,
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
			store.load({
						params : {
							start : 0,
							limit : itemsPerPage
						}
					});
			var grid = Ext.create('Ext.grid.Panel', {
						store : store,
						defaults : {
							autoScroll : true
						},
						selModel : Ext.create('Ext.selection.CheckboxModel', {
									mode : "SIMPLE"
								}),
						columns : [{
									xtype : "rownumberer"
								}, {
									text : '角色代码',
									dataIndex : 'roleCode',
									width : 150,
									align : 'center'
								}, {
									text : '角色名称',
									dataIndex : 'roleName',
									width : 150,
									align : 'center'
								}, {
									text : '创建时间',
									dataIndex : 'createTime',
									width : 150,
									align : 'center'
								}, {
									text : '描述',
									dataIndex : 'roleDescription',
									width : 150,
									align : 'center'
								}],
						tbar : [{
									xtype : 'button',
									text : '新增角色',
									iconCls : 'form_add'
								}, '-', {
									xtype : 'button',
									text : '分配授权',
									iconCls : 'form_add'
								}, '-', {
									xtype : 'button',
									text : '分配缺省权限',
									iconCls : 'form_edit'
								}, '->', {
									xtype : 'textfield',
									fieldLabel : '角色名称',
									labelWidth : 60
								}, '-', {
									xtype : 'button',
									text : '查询',
									iconCls : 'form_query'
								}],
						bbar : {
							xtype : 'pagingtoolbar',
							pageSize : 10,
							store : store,
							displayInfo : true,
							plugins : new Ext.ux.ProgressBarPager()
						}
					});

			// --------------------布局界面------------------------
			var viewport = Ext.create('Ext.Viewport', {
						layout : "fit",
						defaults : {
							border : false
						},
						items : grid
					});

		});