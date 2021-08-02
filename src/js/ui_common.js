(function($){
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
  $( "#tabs_v" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
  $( "#tabs_v li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

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
	});

  /* fileDeco */
  $('.fileAdd').on('change',function(){
    var fileAdd = $(this);
    fileAdd.parent('span').prev('.filePath').val(fileAdd.val());
  });

  // pop
  $('.pop_close').on('click',function(){
    $(this).parents('.pop_overlay').hide();
  });

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


// admin01
  var mydata = [
    { 't1': '관리자', 't2': 'sysadmin', 't3': '홍길동', 't4': '경북도청', 't5': '', 't6': '', 't7': '2019-12-13', 't8': 'edit' },
    { 't1': '사용자', 't2': '', 't3': '', 't4': '', 't5': '', 't6': '', 't7': '', 't8': 'edit' },
    { 't1': '사용자', 't2': '', 't3': '', 't4': '', 't5': '', 't6': '', 't7': '', 't8': 'edit' },
    { 't1': '', 't2': '', 't3': '', 't4': '', 't5': '', 't6': '', 't7': '', 't8': 'edit' },
    { 't1': '', 't2': '', 't3': '', 't4': '', 't5': '', 't6': '', 't7': '', 't8': '' }
  ]
  $("#jqgrid").jqGrid({
    data: mydata,
    datatype: "local",
    colModel: [
      { label: '권한', name: 't1', width: 120 },
      { label: '사용자ID', name: 't2', width: 100 },
      { label: '사용자명', name: 't3', width: 100 },
      { label: '소속기관', name: 't4', width: 100 },
      { label: '부서', name: 't5', width: 70 },
      { label: '직급', name: 't6', width: 70 },
      { label: '등록일', name: 't7', width: 70 },
      { label: '수정', name: 't8', width: 50, formatter:tblBtn }
    ],
    multiselect: true,
    loadonce: true,
    viewrecords: true,
    width:1200,
    height:300,
    rowTotal: -1,
    pager: '#jqgridPager'
  });

// tblBtn
function tblBtn(cellValue, options, rowdata, action) {
  var html, txt = "";
  switch (cellValue) {
    case "edit":
      txt = "edit";
      break;
    case "del":
      txt = "del";
      break;
    case "dtl":
      txt = "dtl";
      break;
    case "down":
      txt = "down";
      break;
    case "file":
      txt = "file";
      break;
    default:
      txt = "none";
  }
  html = '<button type="button" class="axi btn_' + txt + '"></button>';
  return html;
  }

  $('ul.eqtabs li, .eq_map_list li').on('click',function(){
    var tab_id = $(this).attr('data_tab');
		$('ul.eqtabs li, .eqtab_content, .eq_map_list li').removeClass('current');
		$(this).addClass('current');
		$("."+tab_id).addClass('current');

    return false;
  });

})(jQuery);