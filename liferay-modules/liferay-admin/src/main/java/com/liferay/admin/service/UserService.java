package com.liferay.admin.service;

import java.util.List;

import com.liferay.admin.vo.UserVO;

public interface UserService {
	public List<UserVO> getUserList(UserVO user);

	public Integer getUserCount(UserVO user);
}
