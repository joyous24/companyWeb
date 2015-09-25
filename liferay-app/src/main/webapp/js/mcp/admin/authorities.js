/**
 * 权限管理
 * 
 * @author zxq
 * @data 2015-07-01
 */
Ext.require(['Ext.Viewport', 'Ext.data.TreeStore', 'Ext.tree.Panel',
		'Ext.ux.ProgressBarPager', 'Ext.form.ComboBox']);
Ext.onReady(function() {
			// --------------------表格展示列表------------------------
			var store = Ext.create('Ext.data.TreeStore', {
						folderSort : true,
						fields : ['', '', ''],
						proxy : {
							type : 'ajax',
							//url : '/admin/organization/organizationTreeList.json',
							reader : {
								type : 'json'
							},
							actionMethods : {
								read : 'POST'
							}
							
						}
					});

			var grid = Ext.create('Ext.tree.Panel', {
						//rootVisible : false,
						store : store,
						defaults : {
							autoScroll : true
						},
						selModel : Ext.create('Ext.selection.CheckboxModel', {
									mode : "SIMPLE"
								}),
						columns : [/*{
									xtype : "rownumberer"
								},*/{
									text : '权限名称',
									dataIndex : '',
									width : 150,
									align : 'center'
								}, {
									text : '权限描述',
									dataIndex : '',
									width : 200,
									align : 'center'
								}],
						tbar : [{
									xtype : 'button',
									text : '新增权限',
									iconCls : 'form_add'
								}, '-', {
									xtype : 'button',
									text : '编辑权限',
									iconCls : 'form_edit'
								}, '-', {
									xtype : 'button',
									text : '删除权限',
									iconCls : 'form_delete'
								}, '->', {
									xtype : 'textfield',
									fieldLabel : '权限名称',
									labelWidth : 60
								}, '-', {
									xtype : 'button',
									text : '查询',
									iconCls : 'form_query'
								}]
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