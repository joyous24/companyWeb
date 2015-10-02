package com.liferay.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.liferay.admin.service.RolesService;
import com.liferay.admin.vo.RolesVO;

/**
 * 角色管理控制层
 * 
 * @author ZhaoXQ 2015-10-01
 */
@Controller
@RequestMapping("/roles")
public class RolesController {

	@Autowired
	private RolesService rolesService;

	@RequestMapping(value = "/rolesList.data", method = RequestMethod.POST)
	public String RolesListDate(RolesVO roles, Model model) {
		Integer totalCount = rolesService.getRolesCount(roles);
		List<RolesVO> rolesList = rolesService.getRolesList(roles);
		model.addAttribute("success",true);
		model.addAttribute("totalCount",totalCount);
		model.addAttribute("rows", rolesList);
		return "rolesList";
	}

}
