package com.liferay.admin.vo;

import java.util.List;

public class OrganizationTreeVO {
	private int id;
	private String text;
	private String expanded;
	private boolean leaf;
	private List<OrganizationTreeVO> children;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getExpanded() {
		return expanded;
	}

	public void setExpanded(String expanded) {
		this.expanded = expanded;
	}

	public boolean isLeaf() {
		return leaf;
	}

	public void setLeaf(boolean leaf) {
		this.leaf = leaf;
	}

	public List<OrganizationTreeVO> getChildren() {
		return children;
	}

	public void setChildren(List<OrganizationTreeVO> children) {
		this.children = children;
	}

}
