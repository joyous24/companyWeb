<%
	/* 
		Bootstrap 初始化配置
		作者 ：zxq
		日期 ：2015-06-24
		使用：<%@ include file="/jsp/common/init_bootstrap.jsp" %/>  末尾处去掉 “/” 
	*/
%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<script type="text/javascript">
	var ContextPath = "<%=basePath%>";
</script>
<!-- 新 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="<%=basePath%>jsframe/bootstrap-3.3.5/css/bootstrap.min.css">

<!-- 可选的Bootstrap主题文件（一般不用引入） -->
<link rel="stylesheet" href="<%=basePath%>jsframe/bootstrap-3.3.5/css/bootstrap-theme.min.css">

<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script type="text/javascript" src="<%=basePath%>jsframe/jquery/jquery-1.11.3.min.js"></script>

<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script type="text/javascript" src="<%=basePath%>jsframe/bootstrap-3.3.5/js/bootstrap.min.js"></script>
</head>
</html>