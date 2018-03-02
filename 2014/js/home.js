/**
 * ...
 * @author kri
 */

(function() {
	
	var display = document.getElementById('date').getElementsByTagName('span')[0];
	var target = display.getElementsByTagName('span');
	var now;
	var startFlag = new Date(2014,9,12,10,0,0,0);
	var closeFlag = new Date(2014,9,12,15,0,0,0);
	var a_day = 24 * 60 * 60 * 1000;
	
	var measure = function(){
		
		var gap = new Date(startFlag-now);
		var d = Math.floor(gap / a_day);
		var h = Math.floor((gap % a_day) / (60 * 60 * 1000));
		var m = Math.floor((gap % a_day) / (60 * 1000)) % 60;
		target[0].innerHTML = d;
		target[1].innerHTML = h;
		target[2].innerHTML = m;
		
		setTimeout(update,30*1000);
		
	}
	
	var update = function(){
		
		now = new Date();
		if(0<startFlag-now){
			measure();
		}else if(0<closeFlag-now){
			//nowを表示
			display.className = 'now';
			display.innerHTML = '開催中！';
		}else{
			//closeを表示してsetClear
			display.className = 'close';
			display.innerHTML = '終了しました！<br>ありがとうございました！';
		}
		
	}
	
	update();
	
	$(function(){
		$("#owl-carousel").owlCarousel({
			'items':1,
			'itemsDesktop':[1199,1],
			'itemsDesktopSmall':[979,1],
			'itemsTablet':[768,1],
			'slideSpeed':1000,
			'paginationSpeed':400,
			'rewindSpeed':400,
			'stopOnHover':true,
			'autoPlay':true
		});
	});
	
})();