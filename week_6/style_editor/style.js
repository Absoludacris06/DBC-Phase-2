// Shorthand for document ready
$(function(){
  $("#style_editor").submit(function(e) {
    e.preventDefault();
  	var selector = $("input[name=selector]").val();
  	var prop = $("input[name=property]").val();
  	var value = $("input[name=value]").val();
  	$(selector).css(prop, value);
  });
});