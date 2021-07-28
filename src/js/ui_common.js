(function($){
  $('.sub a').on({
    focusin : function(){
      $('.sub').removeClass('focusing');
      $(this).parents('.sub').addClass('focusing');
    },
    focusout : function(){
      // console.log($(this).parents('.sub').parent('li').eq())
    }
  })

  // accordion
  $( ".accordion > div" ).accordion({
    header : "h3",
    collapsible: false,
    heightStyle: "content",
    active:0
  });

  // datepicker
  $.datepicker.setDefaults({
    regional:["ko"],
    buttonImageOnly: true,
    showOn: "both",
    buttonImage: "../img/btn_calendar.png",
    changeMonth: true,
    changeYear: true,
    dateFormat:"yy-mm-dd"
  });
  $( ".datepic" ).datepicker({
    buttonText: "날짜를 선택해주세요."
  });
  $( ".from" ).datepicker({
    buttonText: "시작날짜를 선택해주세요.",
    onClose: function( selectedDate ) {
      var getName=$(this).attr('name');
      $("input[name='"+ getName +"'].to").datepicker( "option", "minDate", selectedDate );
    }
  });
  $( ".to" ).datepicker({
    buttonText: "종료날짜를 선택해주세요.",
    onClose: function( selectedDate ) {
      var getName=$(this).attr('name');
      $("input[name='"+ getName +"'].from").datepicker( "option", "maxDate", selectedDate );
    }
  });
  // datetimepicker
  function date_to_str(format){
    var year = format.getFullYear(),
        month = format.getMonth() + 1,
        date = format.getDate(),
        hour = format.getHours(),
        min = format.getMinutes(),
        sec = format.getSeconds();
    if(month<10) month = '0' + month;
    if(date<10) date = '0' + date;
    hour = hour % 12;
    hour = hour ? hour : 12;
    if(hour<10) hour = '0' + hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    return year + "-" + month + "-" + date + "  " + hour + ":" + min + ":" + sec;
  }
  $(".datetimepic").val( date_to_str(new Date()));
  // use jqueryui-timepicker-addon
  // https://trentrichardson.com/examples/timepicker/
  $(".datetimepic").datetimepicker({
    timeFormat: 'HH : mm : ss',
    controlType: 'select',
    oneLine: true
  });
  Date.prototype.addMinutes = function(minutes) {
    this.setMinutes(this.getMinutes() + minutes);
    return this;
  };

  // tab
  $("#tabs").tabs();

  // toggle
  $('.btn_toggle').on('click',function(e){
		e.preventDefault();
		var cur = $(this).hasClass('on');
		if($(this).attr('disabled') == 'disabled') return false;
		if(cur){
			$(this).addClass('off').removeClass('on');
		}else{
			$(this).addClass('on').removeClass('off');
		}
	})

})(jQuery);