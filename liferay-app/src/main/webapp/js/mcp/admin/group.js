/**
 * 组管理
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
						fields : ['groupId', 'groupName', 'createTime',
								'groupDescription'],
						pageSize : itemsPerPage,
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

			store.load({
						params : {
							start : 0,
							limit : itemsPerPage
						}
					});
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
									text : '组名称',
									dataIndex : 'groupName',
									width : 150,
									align : 'center'
								}, {
									text : '创建时间',
									dataIndex : 'createTime',
									width : 150,
									align : 'center'
								}, {
									text : '描述',
									dataIndex : 'groupDescription',
									width : 150,
									align : 'center'
								}, {
									text : '操作',
									dataIndex : 'operation',
									width : 150,
									align : 'center'
								}],
						tbar : [{
									xtype : 'button',
									text : '新增组',
									iconCls : 'form_add'
								}, '-', {
									xtype : 'button',
									text : '加入用户',
									iconCls : 'form_edit'
								}, '-', {
									xtype : 'button',
									text : '指定组角色',
									iconCls : 'form_delete'
								}, '->', {
									xtype : 'textfield',
									fieldLabel : '组名称',
									labelWidth : 60
								}, '-', {
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
						items : [grid]
					});

		});