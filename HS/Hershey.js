// JavaScript Document
$(function(){
	//banner
	var num = 0;
	var myli = $('.banner ul li:first').clone(true);
	$('.banner ul').append(myli);
	
	var timer01 = null;
	function myfn(){
		num++;
		if(num > 3){
			num = 0;	
		}
	};
	
	timer01 = setInterval(function(){
			myfn();	
	},2000);
	
	$('.banner').hover(function(e) {
        clearInterval(timer01);
    },function(){
		timer01 = setInterval(function(){
			myfn();
		},2000);	
	});	
	//index--con_wrap part
	$('.con_wrap ul li').hover(function(e) {
        $(this).css('opacity','1');
		$(this).children('p').stop().animate({'bottom':'0px'},500);
		
    },function(){
		$(this).css('opacity','0.5');
		$(this).children('p').stop().animate({'bottom':'-34px'},500);
	});
	//list--list_con part
	$('.list_con dl dt a').hover(function(e) {
        $(this).closest('dl').find('a').stop().animate({'margin-left':'0px','opacity':'0.5'},500);
		$(this).stop().animate({'margin-left':'-15px','opacity':'1'},500);
    },function(){
		$(this).closest('dl').find('a').stop().animate({'margin-left':'0px','opacity':'1'},500);	
	});
	//backTop
	$('.backTop').click(function(e) {
        $('html,body').stop().animate({'scrollTop':'0px'},500);
    });
})













