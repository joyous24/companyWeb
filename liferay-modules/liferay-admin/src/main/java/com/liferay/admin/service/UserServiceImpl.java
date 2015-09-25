package com.liferay.admin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.liferay.admin.dao.UserDao;
import com.liferay.admin.vo.UserVO;

@Service("userService")
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao userDao;

	@Override
	public List<UserVO> getUserList(UserVO user) {
		return userDao.getUserList(user);
	}

	@Override
	public Integer getUserCount(UserVO user) {
		return userDao.getUserCount(user);
	}

}
