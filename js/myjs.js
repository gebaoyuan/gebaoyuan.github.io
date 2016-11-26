$(function(){
	var num = 0;
	var timer = null;
	$(document).mousewheel(function(event,delta){
		clearTimeout(timer);
		timer = setTimeout(function(){
			myfn(delta);
		},200);
	})
	$('.page0 .top').addClass('topAfter');
	$('.page0 .left').addClass('leftAfter');
	$('.page0 .right').addClass('rightAfter');
	$('.page0 .bot').addClass('botAfter');
	function myfn(delta){
		num = num-delta;
		if(num<0){
			num=0;
		}else if(num>3){
			num = 3;
		}
		$('#con').attr('class','go'+num);
	}
	//music
	var kg=true;
	$('b').click(function(e) {
		if(kg==true){
			$('audio').get(0).pause();
			kg=false
        }else{
            $('audio').get(0).play();
			kg=true
        }
    })
	//nav
	$('.nav li').click(function(event) {
		num = $(this).index();
		$('#con').attr('class','go'+num);
	});
	//work
	$('.page2 .wrapBox li').hover(function() {
		$(this).siblings().stop().fadeTo(500,0.3);
	}, function() {
		$(this).siblings().stop().fadeTo(500,1);
	});
})