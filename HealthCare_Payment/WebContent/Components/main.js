$(document).on("click", ".btnUpdate", function(event) { 
	
	$("#paymentIdSave").val($(this).closest("tr").find('#paymentIdUpdate').val());
	$("#paymentId").val($(this).closest("tr").find('td:eq(0)').text());
	$("#paidAmount").val($(this).closest("tr").find('td:eq(1)').text());
	$("#paymentDescription").val($(this).closest("tr").find('td:eq(2)').text());
	$("#Hid").val($(this).closest("tr").find('td:eq(3)').text());
	$("#userId").val($(this).closest("tr").find('td:eq(4)').text());
	
	$("#alertSuccess").text().trim() == "Data Retrived"

});



$(document).ready(function () {
	 document.forms['form'].reset();
	 
});

$(document).ready(function() { 
	
	if($("#alertSuccess").text().trim() == ""){
		$("#alertSuccess").hide();
	}
	
	$("#alertError").hide(); 
	
});

$(document).on("click", "#btnSave", function(event) { 
	
	$("#alertSuccess").text("");  
	$("#alertSuccess").hide();  
	$("#alertError").text(""); 
	$("#alertError").hide(); 
	
	var status = validateItemForm(); 
	
	if (status != true)  {  
		$("#alertError").text(status);  
		$("#alertError").show();  
		return; 	
		} 
	
	var type = ($("#paymentIdSave").val() == "") ? "POST" : "PUT"; 
	
	$.ajax( { 
		url : "PaymentAPI", 
		type : type,  
		data : $("#form").serialize(),  
		dataType : "text",  
		complete : function(response, status) 
		{   
			onItemSaveComplete(response.responseText, status);  
		
		} 
	}); 
	
});

function onItemSaveComplete(response, status) {  
	
	var resultSet = JSON.parse(response); 
	 
	if (resultSet.status.trim() == "success") {  
		
		$("#alertSuccess").text("Successfully saved.");  $("#alertSuccess").show(); 
		 
		 $("#divItemsGrid").html(resultSet.data); 
	
	} else if (resultSet.status.trim() == "error") 
	
	{  
		$("#alertError").text(resultSet.data); 
		$("#alertError").show(); 
		
	}
	else if (status == "error") {
		
		$("#alertError").text("Error while saving.");  
		$("#alertError").show(); 
	}
	 else 
	 {  
		 $("#alertError").text("Unknown error while saving.."); 
		 $("#alertError").show(); 
	 }
	
	$("#paymentIdSave").val(""); 
	$("#form")[0].reset(); 
}


$(document).on("click", ".btnRemove", function(event) { 
	
	
	$.ajax( { 
		url : "PaymentAPI",   
		type : "DELETE",   
		data : "Appoid=" + $(this).data("appid"),   
		dataType : "text",   
		complete : function(response, status) 
		{   
			onItemDeleteComplete(response.responseText, status);  
		
		} 
	}); 
	
});

function onItemDeleteComplete(response, status) {  
	
	var resultSet = JSON.parse(response); 
	 
	if (resultSet.status.trim() == "success") {  
		
		$("#alertSuccess").text("Successfully deleted."); 
		$("#alertSuccess").show(); 
		 
		 $("#divItemsGrid").html(resultSet.data); 
	
	} else if (resultSet.status.trim() == "error") 
	
	{  
		$("#alertError").text(resultSet.data); 
		$("#alertError").show(); 
		
	}
	else if (status == "error") {
		
		$("#alertError").text("Error while deleting.");  
		$("#alertError").show(); 
	}
	 else 
	 {  
		 $("#alertError").text("Unknown error while deleting.."); 
		 $("#alertError").show(); 
	 }
	
}




	

function validateItemForm() {  
	
	if ($("#paymentId").val().trim() == "") {  
		
		return "Please Enter Payment ID";
	} 
	
	if ($("#paidAmount").val().trim() == "") {  
		 
		return "Please Enter Paid Amount";
	} 
	
	if ($("#paymentDescription").val().trim() == "") {  
		
		return "Please Enter Payment Description";
	} 
	
	if ($("#Hid").val().trim() == "") {  

		return "Please Enter Hospital ID";
	} 
	
	if ($("#userId").val().trim() == "") {  

		return "Please Enter User ID ";
	}
	
	return true; 
	 
	}
