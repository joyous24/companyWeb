package com.liferay.admin.controller;

import java.lang.reflect.InvocationTargetException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.liferay.admin.service.OrganizationService;
import com.liferay.admin.vo.OrganizationTreeVO;
import com.liferay.admin.vo.OrganizationVO;

/**
 * 组织机构管理控制层
 * 
 * @author ZhaoXQ 2015-07-03
 */
@Controller
@RequestMapping("/organization")
public class OrganizationController {

	@Autowired
	private OrganizationService organizationService;

	/**
	 * 组织管理树
	 * 
	 * @param organization
	 * @param model
	 * @throws InvocationTargetException
	 * @throws IllegalArgumentException
	 * @throws IllegalAccessException
	 * @throws SecurityException
	 * @throws NoSuchMethodException
	 */
	@RequestMapping(value = "/organizationTreeList", method = RequestMethod.POST)
	@ResponseBody
	public List<OrganizationVO> organizationTreeList(OrganizationVO organization, ModelMap model) throws NoSuchMethodException, SecurityException, IllegalAccessException, IllegalArgumentException, InvocationTargetException {
		List<OrganizationVO> organizationList = organizationService.getTreeMenuList(); 
		return organizationList;
	}
	
	/**
	 * 组织树菜单
	 * 
	 * @param organization
	 * @param model
	 * @throws InvocationTargetException
	 * @throws IllegalArgumentException
	 * @throws IllegalAccessException
	 * @throws SecurityException
	 * @throws NoSuchMethodException
	 */
	@RequestMapping(value = "/organizationTreeAllList", method = RequestMethod.POST)
	@ResponseBody
	public List<OrganizationTreeVO> organizationTreeAllList(ModelMap model) throws NoSuchMethodException, SecurityException, IllegalAccessException, IllegalArgumentException, InvocationTargetException {
		List<OrganizationTreeVO> organizationList = organizationService.getTreeMenuAllList(); 
		return organizationList;
	}
}
