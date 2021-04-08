$(function(){
//main
  $('.main_bg h3').delay(200).animate({'paddingTop':'+=20px','opacity':'1'},1000);
  $('.main_bg h1').delay(50).animate({'paddingTop':'+=10px','opacity':'1'},1500);

    $("nav .gnb > li").on('click focus', function(){
        var index = $(this).children('nav .gnb > li > ul');
        $(index).stop().slideToggle(500);
        $(index).addClass('on');
    });

var numSlide = $('.travel_slide li').length;
var slideNow = 0;
var slidePrev = 0;
var slideNext = 0;
var slideFirst = 3;
var timerId = '';
var isTimerOn = true;
var timerSpeed = 3000;

showSlide(slideFirst);

$('.travel_visa ul.travel_slide li').each(function(i) {
    $(this).css({'left': (i * 100) + '%', 'display': 'block'});
    });

$('.travel_visa ul.indicator li a').on('click', function() {
    var index = $('.travel_visa ul.indicator li').index($(this).parent());
    showSlide(index + 1);
    });
function showSlide(n) {
     clearTimeout(timerId);
    if (slideNow === 0) {
        $('.travel_visa ul.travel_slide').css({'transition': 'none', 'left': -((n - 1) * 100) + '%'});
    } else {
        $('.travel_visa ul.travel_slide').css({'transition': 'left 0.3s', 'left': -((n - 1) * 100) + '%'});
    }
    $('.travel_visa ul.indicator li').removeClass('on');
    $('.travel_visa ul.indicator li:eq(' + (n - 1) + ')').addClass('on');
    slideNow = n;
    slidePrev = (n - 1) < 1 ? numSlide : n - 1;
    slideNext = (n + 1) > numSlide ? 1 : n + 1;
    if (isTimerOn === true) {
        timerId = setTimeout(function() {showSlide(slideNext);}, timerSpeed);
    }
    };
    
//footer
   		$('div.lang a').on('click', function(e){
			if($(this).hasClass('on')) {
				$(this).add('ul.lang_list').removeClass('on')
			}
			else{$(this).add('ul.lang_list').addClass('on')}
			e.preventDefault();
			});
    
//sub1
var offsetleft = 0;
var boxwidth = $('div.card_list div.card_box').innerWidth();
var barwidth = 0;
var minoffsetleft = 0;

$('div.card_box ul li').each(function() {
    barwidth += $(this).outerWidth(true);
});
$('div.card_box ul').css({'width' : barwidth + 'px'});
    minoffsetleft = -(barwidth - boxwidth);

$('div.card_list .control .con_L a').on('click',function() {
    if (offsetleft === 0){
        $('div.card_box ul').stop(true).animate({'left' : '10px'},200).animate({'left' : 0},100);
    }else {    
        offsetleft += 300;
        if(offsetleft > 0) offsetleft = 0;
        $('div.card_box ul').stop(true).animate({'left' : offsetleft + 'px'},500);
    };
});

$('div.card_list .control .con_R a').on('click',function() {
    if (offsetleft === minoffsetleft){
        $('div.card_box ul').stop(true).animate({'left' : (minoffsetleft -10 ) +'px'},200).animate({'left' : minoffsetleft + 'px'},100);
    }else {   
        offsetleft -= 300;
        if(offsetleft < minoffsetleft) offsetleft = minoffsetleft;
        $('div.card_box ul').stop(true).animate({'left' : offsetleft + 'px'},500);
    };
});

//sub2
    $(".pratready_sol a.sol_btn").on('click', function(){
        $('.pratready_sol .partready_mask').slideToggle(500);
    });
    
//sub4-1
    $('ul.tech_indicator li a').on('click',function(e) {
        var href = $(this).attr('href');
      $( 'html, body' ).animate({scrollTop: $( href ).offset().top}, '300' );
     e.preventDefault();
    });
    
//sub3
    var TRSlide = $('div.travel_menu_box ul li').length;
    var TRNow = 0;
    var TrPrev = 0;
    var TrNext = 0;
    
    $('div.travel_menu_box ul li').each(function(i) {
      $(this).css({'left': (i * 100) + '%', 'display': 'block'});
    });
    
    TrShow(1);
    
    $('div.travelmenu_indicator ul li a').on('click', function() {
        var Trmain = $('div.travelmenu_indicator ul li').index($(this).parent());
        TrShow(Trmain + 1);
    });
    $('div.travel_menu_box div.trabvelmenu_arrow a.arr_L').on('click', function() {
        TrShow(TrPrev);
    });
    $('div.travel_menu_box div.trabvelmenu_arrow a.arr_R').on('click', function() {
        TrShow(TrNext);
        });
    
    function TrShow(n) {
       if (TRNow === 0) {
            $('div.travel_menu_box ul').css({'transition': 'none', 'left': -((n - 1) * 100) + '%'});
        } else {
            $('div.travel_menu_box ul').css({'transition': 'left 0.3s', 'left': -((n - 1) * 100) + '%'});
        }
        $('div.travelmenu_indicator ul li').removeClass('on');
        $('div.travelmenu_indicator ul li:eq(' + (n - 1) + ')').addClass('on');
        $('div.tralvelmenu_body div.tra_BD').removeClass('on');
        $('div.tralvelmenu_body div.tra_BD:eq(' + (n - 1) + ')').addClass('on');
        TRNow = n;
        TrPrev = (n - 1) < 1 ? TRSlide : n - 1;
        TrNext = (n + 1) > TRSlide ? 1 : n + 1;
        }
        
    $('div.TP_menu ul li a').on('click',function(e) {
        var TPhref = $(this).attr('href');
      $( 'html, body' ).animate({scrollTop: $( TPhref ).offset().top}, '300' );
     e.preventDefault();
    });
        
        //모바일
          $("nav a.menu_bars").on('click focus', function(){
        var MoIndex = $(this).siblings('nav ul.gnb');
        $(MoIndex).stop().slideToggle(500);
        $(MoIndex).addClass('on');
    });  

});