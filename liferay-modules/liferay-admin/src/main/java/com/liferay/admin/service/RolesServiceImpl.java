package com.liferay.admin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.liferay.admin.dao.RolesDao;
import com.liferay.admin.vo.RolesVO;

@Service("rolesService")
public class RolesServiceImpl implements RolesService {
	@Autowired
	private RolesDao rolesDao;

	@Override
	public List<RolesVO> getRolesList(RolesVO roles) {
		return rolesDao.getRolesList(roles);
	}

	@Override
	public Integer getRolesCount(RolesVO roles) {
		return rolesDao.getRolesCount(roles);
	}

}
