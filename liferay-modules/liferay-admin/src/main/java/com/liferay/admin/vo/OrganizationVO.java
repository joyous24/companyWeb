package com.liferay.admin.vo;

import java.util.Date;
import java.util.List;

public class OrganizationVO {
	private int organizationId;
	private String organizationName;
	private Date createTime;
	private String description;
	private String parentId;
	private boolean leaf;
	private List<OrganizationVO> children;

	public int getOrganizationId() {
		return organizationId;
	}

	public void setOrganizationId(int organizationId) {
		this.organizationId = organizationId;
	}

	public String getOrganizationName() {
		return organizationName;
	}

	public void setOrganizationName(String organizationName) {
		this.organizationName = organizationName;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getParentId() {
		return parentId;
	}

	public void setParentId(String parentId) {
		this.parentId = parentId;
	}

	public boolean isLeaf() {
		return leaf;
	}

	public void setLeaf(boolean leaf) {
		this.leaf = leaf;
	}

	public List<OrganizationVO> getChildren() {
		return children;
	}

	public void setChildren(List<OrganizationVO> children) {
		this.children = children;
	}

}
