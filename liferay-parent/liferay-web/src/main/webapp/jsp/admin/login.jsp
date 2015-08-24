<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>
<%@ include file="/jsp/common/init_bootstrap.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="<%=basePath%>css/login.css">
<title>欢迎您登陆系统</title>
</head>
<body>
	<div class="container">

		<form class="form-signin" method="post" action="<c:url value="/login"/>">
			<h2 class="form-signin-heading">系统后台管理登录</h2>
			<label for="inputEmail" class="sr-only">用户名</label> 
			<input type="text" id="username" name="username" class="form-control" placeholder="用户名" required autofocus /> 
			<label for="inputPassword" class="sr-only">密码</label> 
			<input type="password" id="password" name="password" class="form-control" placeholder="密码" required />
			<div class="checkbox">
				<label> <input type="checkbox" value="remember-me"> 记住密码
				</label>
			</div>
			<button class="btn btn-lg btn-primary btn-block" type="submit">登陆</button>
		</form>

	</div>

</body>
</html>