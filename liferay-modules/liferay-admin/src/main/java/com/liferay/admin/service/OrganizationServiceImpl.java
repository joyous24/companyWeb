package com.liferay.admin.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.liferay.admin.dao.OrganizationDao;
import com.liferay.admin.vo.OrganizationVO;

@Service("organizationService")
public class OrganizationServiceImpl implements OrganizationService {

	@Autowired
	private OrganizationDao organizationDao;

	@Override
	public List<OrganizationVO> buildTreeMenu(List<OrganizationVO> topMenuList, List<OrganizationVO> resultMenuList) {
		resultMenuList = new ArrayList<OrganizationVO>();
		for (OrganizationVO topMenu : topMenuList) {
			if (organizationDao.getChildMenuList(topMenu.getOrganizationId()).size() == 0) {// 该节点菜单为叶子菜单
				topMenu.setLeaf(true); // （无子菜单）不递归了
				continue;
			}
			// 开始递归
			List<OrganizationVO> children = organizationDao.getChildMenuList(topMenu.getOrganizationId());
			topMenu.setChildren(children);
			resultMenuList.add(topMenu);
			buildTreeMenu(children, resultMenuList);
		}
		return resultMenuList;
	}

	@Override
	public List<OrganizationVO> getTreeMenuList() {
		List<OrganizationVO> menuList = null;
		return this.buildTreeMenu(organizationDao.getParentMenuList(), menuList);
	}

}
