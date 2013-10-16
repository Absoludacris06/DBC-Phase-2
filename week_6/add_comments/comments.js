// Shorthand for document ready
$(function(){
  var new_form = $("<form id='new_comment' name='new_comment'><textarea rows='2'></textarea><input id='authorName' type='text' placeholder='Your name' /><input type='submit' value='Create Comment' /></form>");
  $("#new_comment_button").click(function(e) {
  	e.preventDefault();
  	$("#new_comment_button").toggle();
  	$("#comment_list").after(new_form);
  	$("#new_comment").submit('false', function(e) {
  		e.preventDefault();
  		var content = $('#new_comment textarea').val();
  		var name = $('#authorName').val();
  		var new_comment = $("<li>" + content + "<span class='author'>" + name + "</span></li>");
  		if (content != "") {
  			new_comment.appendTo("#comment_list");
 		 	}
 		 	$("#new_comment").remove();
  		$("#new_comment_button").toggle();
  	});
  });
});