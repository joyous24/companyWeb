package com.liferay.admin.dao;

import java.util.List;

import com.liferay.admin.vo.GroupVO;

public interface GroupDao {
	public List<GroupVO> getGroupList(GroupVO group);

	public Integer getGroupCount(GroupVO group);
}
