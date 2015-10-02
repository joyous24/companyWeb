package com.liferay.common.adapter;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.xml.bind.annotation.adapters.XmlAdapter;

public class DateAdapter extends XmlAdapter<String, Date> {

	@Override
	public String marshal(Date v) throws Exception {
		if (v != null) {
			SimpleDateFormat dateTimeFormat = new SimpleDateFormat("yyyyMMdd:Z");
			return dateTimeFormat.format(v);
		}
		return null;
	}

	@Override
	public Date unmarshal(String v) throws Exception {
		if (v != null && v.length() > 0) {
			SimpleDateFormat dateTimeFormat = new SimpleDateFormat("yyyyMMdd:Z");
			return dateTimeFormat.parse(v);
		}
		return null;
	}

}
