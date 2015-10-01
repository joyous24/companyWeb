package com.liferay.admin.dao;

import java.util.List;

import com.liferay.admin.vo.OrganizationTreeVO;
import com.liferay.admin.vo.OrganizationVO;

public interface OrganizationDao {
	public List<OrganizationVO> getParentMenuList();

	public List<OrganizationVO> getChildMenuList(int menuId);
	
	public List<OrganizationTreeVO> getParentMenuAllList();
	
	public List<OrganizationTreeVO> getChildMenuAllList(int menuId);
	
}
