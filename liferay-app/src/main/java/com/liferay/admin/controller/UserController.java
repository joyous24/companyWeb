package com.liferay.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.liferay.admin.service.UserService;
import com.liferay.admin.vo.ListPagingVO;
import com.liferay.admin.vo.UserVO;

/**
 * 组织机构管理控制层
 * 
 * @author ZhaoXQ 2015-07-03
 */
@Controller
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	@RequestMapping(value = "/userList.data", method = RequestMethod.POST)
	public String userListDate(UserVO user, Model model) {
		Integer totalCount = userService.getUserCount(user);
		

		List<UserVO> userList = userService.getUserList(user);
		model.addAttribute("success",true);
		model.addAttribute("totalCount",totalCount);
		model.addAttribute("rows", userList);
		return "userList";
	}

}
