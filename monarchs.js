
$(document).ready(function(){

  $('.monarch').hide();
  $('.bio').hide();


  $(document).ready(function(){
    $('button').hover(function(){
      $(this).css('background-color', '#1b599b');
    }, function(){
      $(this).css('background-color', '#10365e');
    });
  });


  $('button').click(function() {
    if( $(this).siblings(".monarch_unit").children('.monarch').is(":hidden") ) {
        $(this).siblings(".monarch_unit").children('.monarch').show();
    }
    else
    {
      $(this).siblings(".monarch_unit").children('.monarch').hide();
    }
  });
});


$(document).ready(function(){
  $('.monarch').click(function() {
    if( $(this).siblings('.bio').is(":hidden") ) {
      $(this).siblings('.bio').show();
    }
    else
    {
      $(this).siblings('.bio').hide();
    }
  });
});
