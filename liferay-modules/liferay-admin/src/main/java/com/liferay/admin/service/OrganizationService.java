package com.liferay.admin.service;

import java.util.List;

import com.liferay.admin.vo.OrganizationTreeVO;
import com.liferay.admin.vo.OrganizationVO;

public interface OrganizationService {

	public List<OrganizationVO> buildTreeMenu(List<OrganizationVO> topMenuList, List<OrganizationVO> resultMenuList);

	public List<OrganizationVO> getTreeMenuList();

	public List<OrganizationTreeVO> buildTreeMenuAll(List<OrganizationTreeVO> topMenuList, List<OrganizationTreeVO> resultMenuList);
	
	public List<OrganizationTreeVO> getTreeMenuAllList();
}
