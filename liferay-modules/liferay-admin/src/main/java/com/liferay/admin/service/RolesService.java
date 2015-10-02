package com.liferay.admin.service;

import java.util.List;

import com.liferay.admin.vo.RolesVO;

public interface RolesService {
	public List<RolesVO> getRolesList(RolesVO Roles);

	public Integer getRolesCount(RolesVO Roles);
}
