package com.liferay.admin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.liferay.admin.dao.GroupDao;
import com.liferay.admin.vo.GroupVO;

@Service("groupService")
public class GroupServiceImpl implements GroupService {
	@Autowired
	private GroupDao groupDao;

	@Override
	public List<GroupVO> getGroupList(GroupVO Group) {
		return groupDao.getGroupList(Group);
	}

	@Override
	public Integer getGroupCount(GroupVO Group) {
		return groupDao.getGroupCount(Group);
	}

}
