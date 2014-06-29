$(document).on('ready', function() {
 	
 	$('#form-submit').on('click', function(e){
 		e.preventDefault();
 		
 		$('#user-name').append($('#form-name').val());
 		$('#user-bio').append($('#form-bio').val());
 		$('#user-books').append($('#form-books').val());
 		$('#user-lib').append($('#form-lib').val());

 		$('.userInfo').show();
 		$('.userForm').hide();

 		$('table').find('input').val('');

 	});

 	$('#edit-form').on('click', function(){

 		$('#form-name').val($('#user-name').text());
 		$('#form-bio').val($('#user-bio').text());
 		$('#form-books').val($('#user-books').text());
 		$('#form-lib').val($('#user-lib').text());

 		$('.userForm').show();
 		$('.userInfo').hide();

 		$('.userInfo').find('h3').text('');
 		

 	});



});