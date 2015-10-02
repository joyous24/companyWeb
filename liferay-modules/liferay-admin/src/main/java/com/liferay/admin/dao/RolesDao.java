package com.liferay.admin.dao;

import java.util.List;

import com.liferay.admin.vo.RolesVO;

public interface RolesDao {

	public List<RolesVO> getRolesList(RolesVO Roles);

	public Integer getRolesCount(RolesVO Roles);

}
