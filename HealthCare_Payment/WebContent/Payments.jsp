<%@page import="model.Payments"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>


<%
	/*
session.setAttribute("statusMsg", "");
System.out.println("Trying to process........");
Appointment Aobj = new  Appointment();
String stsMsh = "";
//Insert.......................................

if(request.getParameter("hidItemIDSave") == ""){
 
  stsMsh = Aobj.insertData(request.getParameter("Name"), request.getParameter("Nic"), request.getParameter("Phone"), request.getParameter("Hospital"), request.getParameter("Doctor"), request.getParameter("Date"), request.getParameter("Time"));
  session.setAttribute("statusMsg", "Data Record Inserted");
 
}else{
 
 stsMsh = Aobj.updateData(request.getParameter("hidItemIDSave"),request.getParameter("Name"), request.getParameter("Nic"), request.getParameter("Phone"), request.getParameter("Hospital"), request.getParameter("Doctor"), request.getParameter("Date"), request.getParameter("Time"));
 session.setAttribute("statusMsg", "Record Updated");
 
}
//Delete........................................
	
if(request.getParameter("hidItemIdDelete")!= null){
 
 stsMsh = Aobj.deleteData(request.getParameter("hidItemIdDelete"));
 session.setAttribute("statusMsg", " Record Deleted");
}
*/
%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.5.0.min.js"></script>
<script src="Components/main.js"></script>

<meta charset="ISO-8859-1">
<title>Payment</title>
</head>
<body>
	<div class="container w-50 p-3" style="margin-top: 50px;">
		<div class="page-header">
			<h1 id="p">Make Your Payment</h1>
		</div>
		<br>
		<br>


		<form id="form" action="Payments.jsp?">

			<div class="form-group">
				<label for="email">Payment ID :</label> <input type="text"
					class="form-control" id="paymentId" name="paymentId">
			</div>

			<div class="form-group">
				<label for="pwd">Paid Amount :</label> <input type="text"
					class="form-control" name="paidAmount" id="paidAmount">
			</div>

			<div class="form-group">
				<label for="pwd">Payment Description :</label> <input type="text"
					class="form-control" name="paymentDescription" id="paymentDescription">
			</div>
			

			<div class="form-group">
				<label for="pwd">Hospital ID :</label> <input type="date"
					class="form-control" id="Hid" name="Hid">
			</div>

			<div class="form-group">
				<label for="pwd">User ID :</label> <input type="text"
					class="form-control" id="userId" name="userId">
			</div>

			<button type="button" id="btnSave" class="btn btn-primary">Pay
				Now</button>
			<input type="hidden" id="paymentIdSave" name="paymentIdSave" value="">
		</form>
		<br>
		<div id="alertSuccess" class="alert alert-success"></div>
		<div id="alertError" class="alert alert-danger"></div>

		<div id="divItemsGrid" style="margin-top: 10px;">
			<%
				Payments PayObj2 = new Payments();
			out.print(PayObj2.readPaymentDetails());
			%>
		</div>

	</div>

</body>
</html>