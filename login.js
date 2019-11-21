$(document).ready(function(){
	$("#login-button").on("click",function(e){
		let username = $("#login-username").val();
		let password = $("#login-password").val();


		$.ajax({
			url: 'api.php',
			type: 'POST',
			data: {
				'ok-login': '1',
				'username': username,
				'password': password
			},
			dataType: 'json',
			success: function(f){
				console.log(f);
			},
			error: function(e){
				console.log(e);
			}
		});
	});
});