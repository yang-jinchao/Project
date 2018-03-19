$(function(){
	//顶部导航
	(function(){
		
		$('.topright').find('li').filter('.item-ijumei,.item-more').hover(function(){
		$(this).addClass('active').find('.icon_down').css({'transform':'rotate(180deg)'},1000).siblings('.sub_nav').stop().slideDown(300);

		},function(){
			$(this).removeClass('active').find('.icon_down').css('transform','rotate(0deg)').siblings('.sub_nav').stop().slideUp(300);
		});
		
	})();
	
	//搜索框
	
	(function(){
		
		$('.text').focus(function(){
			
			$('.searchword').stop().slideDown(300);
			
		});
		
		$('.text').blur(function(){
			
			$('.searchword').stop().slideUp(300);
			
		});
		
	})();
	
	
	//购物车
	
	(function(){
		
		$('.cart').hover(function(){
			
		$(this).find('.cartbox').stop().slideDown(500).siblings('.icon_down').css('transform','rotate(180deg)').find('span').addClass('active');
		
		},function(){
			
			$(this).find('.cartbox').hide().siblings('.icon_down').css('transform','rotate(0deg)').find('span').removeClass('active');
			
		});
		
	})();
	
	
	//导航条美妆商城
	(function(){
		
		var $nav=$('.navbar');
		var timer=null;
		$nav.hover(function(){
			var index=$(this).index();
			
			timer=setTimeout(function(){
				$nav.find('a').eq(index).addClass('active');
			},500);
			
		},function(){
			$(this).find('a').removeClass('active');
			clearTimeout(timer);
			
			
		});
		
		$('.navbar .mzshop').add('.mzbox').hover(function(){
			$('.navbar .mzshop').addClass('active').find('.icon_down').css('transform','rotate(180deg)');
			$('.mzbox').stop().slideDown(500);
			
		},function(){
			
			$('.mzbox').stop().slideUp(500);
			$('.navbar .mzshop').removeClass('active').find('.icon_down').css('transform','rotate(0deg)');
		});
		
		$('.mzimg a img').hover(function(){
			$(this).addClass('active');
		},function(){
			$(this).removeClass('active');
		});
		
		
		
	})();
	
	/*今日疯抢，明天预告*/
	(function(){
		
		$('.hot_tab li').click(function(){
			var index=$(this).index();
			var $icon=$('.hot_tab li i');
			var $hotList=$('.hotlist');
			$(document).scrollTop(528);
			$(this).addClass('active').siblings().removeClass('active');
			$icon.eq(index).addClass('icon_down_back');
			$icon.not($icon.eq(index)).removeClass('icon_down_back');
			$hotList.eq(index).show();
			$hotList.not($hotList.eq(index)).hide();
		});
		
		$('.hot_list a').hover(function(){
			$(this).find('img').addClass('active');
		},function(){
			$(this).find('img').removeClass('active');
		});
		
		$('.mt_list a').hover(function(){
			$(this).find('.mt_listbg').addClass('active');
		},function(){
			$(this).find('.mt_listbg').removeClass('active');
		});
		
		
	})();
	
	
	//每日必看
	
	(function(){
		
		$('.must_see_tab').hover(function(){
			$(this).find('.must_see_tip').show();
		},function(){
			$(this).find('.must_see_tip').hide();
		});
		
		
		$('.must_see_link').hover(function(){
			$(this).find('.must_see_img').addClass('active');
		},function(){
			$(this).find('.must_see_img').removeClass('active');
		});
		
	
	})();
	
	
	//倒计时
	(function(){
		
		//倒计时
		
		
	

		/*
		var starttime = new Date().getTime();
  		alert( starttime/365/ 1000 / 60 / 60 / 24);
  		*/
		
		
		var newTime = $.now()+100000000;
		var timer=null;
  		timer = setInterval(countDown, 1000);
  		countDown ();
  		
  		function checkTime ( n ) {
			return n < 10 ?  '0' + n : '' + n;
		}

		function countDown () {
		
    		var nowtime = new Date();
   	 		var time = newTime - nowtime;
    		var day = Math.floor(time / 1000 / 60 / 60 / 24);
   			var hour = Math.floor(time / 1000 / 60 / 60 % 24);
    		var minute = Math.floor(time / 1000 / 60 % 60);
    		var second = Math.floor(time / 1000 % 60);
    		//var str = checkTime(day) + "<em>:</em>" + checkTime(hour) + "<em>:</em>" + checkTime(minute) + "<em>:</em>" + checkTime(second);
    	
    	
    	$('.today_time').each(function(){
    		if( time>=0 ){
    		$('.icon').html('距特卖结束');
    		$('.today_time').html(checkTime(day) + "<em>:</em>" + checkTime(hour) + "<em>:</em>" + checkTime(minute) + "<em>:</em>" + checkTime(second));
    	}else{
    		clearInterval( timer );
    		$('.today_time').html('明天再来看看');
    	}
    	});
    	}
		
		/*var newTime = new Date("2018/3/20");
  		setInterval(countDown, 1000);
		function countDown () {
    	var nowtime = new Date();
   	 	var time = newTime - nowtime;
    	var day = parseInt(time / 1000 / 60 / 60 / 24);
   		var hour = parseInt(time / 1000 / 60 / 60 % 24);
    	var minute = parseInt(time / 1000 / 60 % 60);
    	var seconds = parseInt(time / 1000 % 60);
    	$('.today_time').html(day + "<em>:</em>" + hour + "<em>:</em>" + minute + "<em>:</em>" + seconds);
  		}*/
  		
  		
  		
  		/*setInterval(countDown,1000);//定义倒计时的定时器
	 	countDown();
	 	var end_time = $('.today_time').attr('time');
	 	function countDown(){
	 		
		 	var timeObj = new Date();
		 	var now_time = timeObj.getTime();
		 	var differ_time = end_time - now_time;//计算结束时间和现在时间的差距
		 	var day = Math.floor(differ_time/(24*60*60*1000));//计算还剩多少天
		 	differ_time = differ_time%(24*60*60*1000);//获得计算天数之后还剩多少毫秒
		 	var hour = Math.floor(differ_time/(60*60*1000));//计算还剩多少小时
		 	differ_time = differ_time%(60*60*1000);//获得计算小时数之后还剩多少毫秒
		 	var min = Math.floor(differ_time/(60*1000));//计算还剩多少分钟
		 	differ_time = differ_time%(60*1000);//获得计算分钟数之后还剩多少毫秒
		 	var sec = Math.floor(differ_time/(1000));//计算还剩多少秒
			$('.today_time').html(day + '<em>:</em>' + hour + '<em>:</em>' + min + '<em>:</em>' + sec);
	 	}*/
		
		//今日上新
		
		$('.time_box').countDown({date: '2018-04-24 18:00:00'});
		
		//美妆品牌团/

		$('.home_timer').countDown({date: '2018-05-24 18:00:00'});
		
		
	})();
	
	
	
	//今日上新
	
	(function(){
		
		$('.newdeal_box').hover(function(){
			
			$(this).find(".commit_new,.add_cart_box").show();
			$(this).find(".all_cart_img").addClass('active');
		},function(){
			
			$(this).find(".commit_new,.add_cart_box").hide()
			$(this).find(".all_cart_img").removeClass('active');
		});
		
	})();
	
	//美妆品牌团
	(function(){
		
		$('.brand_content').find('img').hover(function(){
			$(this).addClass('active');
		},function(){
			$(this).removeClass('active');
		});
		
	})();
	
	//底部中间
	(function(){
		
		$('.links_ul').find('a').hover(function(){
			$(this).stop().animate({
				left:10
			});
		},function(){
			$(this).stop().animate({
				left:0
			});
		});
		
	})();
	
	
	//左侧悬浮窗结束
	(function(){
		
		
			var index = null;
			var $homeLi = $('.home_nav_list li');
		$('.home_nav_list li').click(function(){
			var index = $(this).index();
			
			$(this).find('a').eq(index).addClass('active');
			$(this).find('a').not($homeLi.find('a').eq(index)).removeClass('active');
			
			$(this).find('a').each(function(i){
				var $id = $(this).attr('href');
				var $clickTop = $($id).offset().top;
				$('bady,html').stop().animate({
				scrollTop:$clickTop
			},500);
				
			});
			
		});
		
		
		//滚动监听
		$(window).scroll(function(){
			var top = $(window).scrollTop();
			
			var $firstId = $homeLi.find('a').first().attr('href');//获取第一楼层的Id
			var $lastId = $homeLi.find('a').last().attr('href');//获取最后楼层的Id
			var $firstTop = $($firstId).offset().top;//获取第一楼层offset().top
			var $lastTop = $($lastId).offset().top;//获取最后楼层offset().top
			var $lastHeight = $($lastId).outerHeight();
			if(top < $firstTop ){
				
				$('#left_side').stop().fadeOut(300);
				
			}else{
				
			$homeLi.find('a').each(function(i){
				
				var $homeLiA = $(this).attr('href');//获取a连接的描点（描点就是楼层的Id）
				var $eleTop = $($homeLiA).offset().top;//获取楼层的offset().top
				
				if(top > ($eleTop - 200)){
					
					$('#left_side').stop().fadeIn(300);
					$homeLi.find('a').eq(i).addClass('active');
					$homeLi.find('a').not($homeLi.find('a').eq(i)).removeClass('active');
					
					
					if(top > ($lastTop + $lastHeight) ){
						$homeLi.find('a').removeClass('active');
					}
					
				}

				
			});
			
			}
			
		});
		
		
	})();
	
	
	//右侧悬浮导航
	(function(){
		$('.right_side_nav').find('li').hover(function(){
			$(this).find('s,a').addClass('active');
			$(this).find('div').show(300);
		},function(){
			$(this).find('s,a').removeClass('active');
			$(this).find('div').hide();
		});
		
		
		
		//点击隐藏登陆盒子
		$('.status_logout .ibar_closebtn').click(function(){
			$('.login_box').hide();
			
		});
		
		
		//点击划出购物车盒子
		$('.right_side_cart').click(function(){
			$('.shopping_cart').animate({
				left:-287
			},1000);
		});
		
		//点击关闭购物车盒子
		$('#shopping_cart_closebtn').click(function(){
			$('.shopping_cart').animate({
				left:40
			},1000);
		});
		
		
		$('.btn_gotop').click(function(){  
              $('body,html').animate({scrollTop:0},500); 
		});
		
		
		
		
	})();
	
	
	
	
	
	
	
	
	
	
	
	
});
