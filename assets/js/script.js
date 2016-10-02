$(document).ready(function(){
  $('.change span').click(function() {
    $(this).parent().children().text('').append('&#9734;');
    $(this).text('').append('&#9733;').next().text('').append('&#9733;').next().text('').append('&#9733;').next().text('').append('&#9733;').next().text('').append('&#9733;');
  });
});