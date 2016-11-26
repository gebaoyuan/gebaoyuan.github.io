// JavaScript Document
$(function(){
	//banner
	var num01 = 0;
	var num02 = 0;
	var myli = $('.con_c ul li:first').clone(true);
	$('.con_c ul').append(myli);
	var timer01 = null;
	function myfn01(){
		num01++;
		if(num01>4){
			num01=0;	
		}
		num02++;
		if(num02>5){
			num02=1;
			$('.con_c ul').css('left','0px');	
		}
		var move = num02*-730;
		$('.con_c ul').stop().animate({'left':''+move+'px'},500);
		$('.con_c ol li').eq(num01).addClass('current').siblings().removeClass('current');
	}
	timer01 = setInterval(function(){
			myfn01();
	},2000);
	$('.con_c .right').click(function(e) {
        	myfn01();
    });
	$('.con_c .left').click(function(e) {
        	num01--;
			if(num01<0){
				num01 = 4;	
			}
			num02--;
			if(num02<0){
				num02 = 4;
				$('.con_c ul').css('left','-3650px');		
			}
			var move = num02*-730;
			$('.con_c ul').stop().animate({'left':''+move+'px'},500);
			$('.con_c ol li').eq(num01).addClass('current').siblings().removeClass('current');
    });
	
	$('.con_c ol li').click(function(e) {
        $(this).addClass('current').siblings().removeClass('current');
		num01 = $(this).index();
		var move = num01*-730;
		$('.con_c ul').stop().animate({'left':''+move+'px'},500);
		$('.con_c ol li').eq(num01).addClass('current').siblings().removeClass('current');
    });
	
	$('.con_c').hover(function(e) {
        clearInterval(timer01);
    },function(){
		timer01 = setInterval(function(){
				myfn01();
		},2000);
	});
	
	$('.ul01 li:eq(5)').css('width','81px');
	$('.ul01 li').eq(6).css('width','81px');
	$('.ul01 li').eq(7).css('width','81px');
	$('.ul01 li:last').css('width','83px');
	$('.oneFtop span').css('margin-left','15px');
	//今日推荐
	$('.recom li').hover(function(){
			$(this).closest('ul').find('li').stop().animate({'opacity':'0.3'},500);
			$(this).stop().animate({'opacity':'1'},500);
		},function(){
			$(this).closest('ul').find('li').stop().animate({'opacity':'1'},500);
		});
	$('.con_l li').hover(function(e) {
       $(this).children('.whole').show();
    },function(){
		$(this).children('.whole').hide();
	});
	//特色京东购
	$('.special_con li a').hover(function(e) {
        $(this).closest('.special').find('a').stop().animate({'opacity':'0.5'},500);
		$(this).stop().animate({'opacity':'1'},500);
    },function(){
		$(this).closest('.special').find('a').stop().animate({'opacity':'1'},500);
	});	
	//oneF
	$('.oneFtop .ul01 li').hover(function(e) {
		$(this).addClass('current').siblings().removeClass('current');
        $(this).closest('.oneFtop').siblings().find('.shwb').show();
    });
	//oneF——oneCon_bot
	$('.oneCon_bot ul li a').hover(function(e) {
        $(this).closest('ul').find('a').stop().animate({'margin-left':'0px','opacity':'0.5'},500);
		$(this).stop().animate({'marginLeft':'-15px','opacity':'1'},500);
    },function(){
		$(this).closest('ul').find('a').stop().animate({'margin-left':'0px','opacity':'1'},500);
	});
	//ad
	$('.adDiv').animate({'bottom':'0px'},500).fadeOut().fadeIn();
	$('.adbtn').click(function(e) {
        $('.adDiv').animate({'bottom':'-217px'},500);
    });
	//rocket
	$(window).scroll(function(e) {
        if($(window).scrollTop() > $(window).height()){
			$('.rocket').show();	
		}else{
			$('.rocket').hide();	
		}
		$('.rocket').click(function(e) {
            $('html,body').stop().animate({'scrollTop':'0px'},500);
        });
    });
	//
	$('.top_r .hi').click(function(e) {
        $('.whiteDiv,.grayDiv').show();
    });
	$('.closeBtn').click(function(e) {
        $('.whiteDiv,.grayDiv').hide();
    });
})