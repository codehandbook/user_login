const signInModule = function() {	
	let $btnSignIn = $('#btnSignin')
	let $signForm = $('.form-signin')
	let $txtEmail = $('#txtEmail')
	let $txtPassword = $('#txtPassword')

	const validateForm = function() {
		/*
		** TODO : Add email validations and 
		** password valiations, probably a regex validation
		** for email and validation for a strong password
		*/
		if($txtEmail.val() && $txtPassword.val()) return true;
		return false;
	}

	/* signIn button click handler method*/
	const signInHandler = function() {
		if(validateForm()){

			$signForm.submit();

			/*
			$.ajax({
				url : '/users/validateLogin',
				type : 'POST',
				data : JSON.stringify({
					'email' : $txtEmail.val(),
					'password' : $txtPassword.val()
				}),
		        contentType: 'application/json; charset=utf-8',
            	dataType: 'json',
				success : function(response) {
					$.get('/home?token=' + response.token)
				},
				error : function(error) {
					console.log('error is ')
				}
			})
			*/
			
		} else {
			alert('email and password required !! ')
		}
	}

	/* sign in module initializer method */
	const init = function(){
		$btnSignIn.click(signInHandler)
	}

	return {
		init : init
	}

};

/* When the DOM is ready initialize the sign in module*/
$(function(){
	signInModule().init()
})