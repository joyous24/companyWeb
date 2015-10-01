package com.liferay.admin.service;

import java.util.List;

import com.liferay.admin.vo.GroupVO;

public interface GroupService {
	public List<GroupVO> getGroupList(GroupVO user);

	public Integer getGroupCount(GroupVO user);
}
