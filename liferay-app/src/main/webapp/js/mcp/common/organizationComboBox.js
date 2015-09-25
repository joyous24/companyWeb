/**
 * 组织结构下拉树列表
 */
Ext.define('organization.comboBox.organizationComboBox', {
			extend : 'Ext.form.ComboBox',
			requires : ['Ext.form.ComboBox'],

			height : 250,
			width : 400,

			initComponent : function() {
				var me = this;

				Ext.applyIf(me, {

				});

				me.callParent(arguments);
			}

		});