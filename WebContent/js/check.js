function checkForm() {

	var titre = document.getElementById("form_name");
	var mail = document.getElementById("form_email");
	var content = document.getElementById("form_message");
	
	
	if (titre.value.length != 0 && content.value.length != 0 && mail.value.length != 0) {
		document.getElementById("boutonSubmit").disabled = false;
	} else
		document.getElementById("boutonSubmit").disabled = true;
}