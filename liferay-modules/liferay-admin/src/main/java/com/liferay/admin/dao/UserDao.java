package com.liferay.admin.dao;

import java.util.List;

import com.liferay.admin.vo.UserVO;

public interface UserDao {

	public List<UserVO> getUserList(UserVO user);

	public Integer getUserCount(UserVO user);

}
