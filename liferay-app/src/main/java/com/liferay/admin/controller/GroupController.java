package com.liferay.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.liferay.admin.service.GroupService;
import com.liferay.admin.vo.GroupVO;

/**
 * 组管理控制层
 * 
 * @author ZhaoXQ 2015-09-29
 */
@Controller
@RequestMapping("/group")
public class GroupController {

	@Autowired
	private GroupService groupService;

	@RequestMapping(value = "/groupList.data", method = RequestMethod.POST)
	public String GroupListDate(GroupVO group, Model model) {
		Integer totalCount = groupService.getGroupCount(group);
		List<GroupVO> groupList = groupService.getGroupList(group);
		model.addAttribute("success",true);
		model.addAttribute("totalCount",totalCount);
		model.addAttribute("rows", groupList);
		return "groupList";
	}

}
