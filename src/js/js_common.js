
$(function(){
  // pop
  var popBtn = $('[openpop]');
  popBtn.on('click', function () {
    var target = $(this).attr('openpop');
    $('#' + target).show();
  })
  var closePop = $('[closePop]');
  closePop.on('click', function () {
    $(this).parents('.pop_overlay').hide();
  })
})