$(window).scroll(function(){
	if($('#part1').length){
		if($(this).scrollTop() >= $('#part5').offset().top-500){
		$('.offergroup').css('visibility','visible');
		$('.offergroup').addClass('animated fadeIn');
		$('.offerline').css('visibility','visible');
		$('.offerline').addClass('animated fadeIn');
		}
		if($(this).scrollTop() >= $('#part5').offset().top){
			$('.graph').css('visibility','visible');
			$('.graph').addClass('animated fadeIn');
		}
		if($(this).scrollTop() >= $('#part2').offset().top-500){
			$('.part2group').css('visibility','visible');
			$('.part2group').addClass('animated fadeIn');
		}
		if($(this).scrollTop() >= $('#part3').offset().top-300){
			$('.inviteiconblock').css('visibility','visible');
			$('.inviteiconblock').addClass('animated fadeIn');
		}
	}
	if($('#ico1').length){
		if($(this).scrollTop() >= $('#ico2').offset().top-300){
			$('.ico2title').css('visibility','visible');
			$('.ico2title').addClass('animated fadeIn');
			$('.ico2content1').css('visibility','visible');
			$('.ico2content1').addClass('animated fadeIn');
			$('.ico2content2').css('visibility','visible');
			$('.ico2content2').addClass('animated fadeIn');
			$('.ico2content3').css('visibility','visible');
			$('.ico2content3').addClass('animated fadeIn');
		}
		if($(this).scrollTop() >= $('#ico3').offset().top-300){
			$('.ico3titlegroup').css('visibility','visible');
			$('.ico3titlegroup').addClass('animated fadeIn');
			$('.ico3content1').css('visibility','visible');
			$('.ico3content1').addClass('animated fadeIn');
			$('.ico3content2').css('visibility','visible');
			$('.ico3content2').addClass('animated fadeIn');
		}
		if($(this).scrollTop() >= $('#ico4').offset().top-300){
			$('.ico4animate').css('visibility','visible');
			$('.ico4animate').addClass('animated fadeIn');
		}
		if($(this).scrollTop() >= $('#ico5').offset().top-300){
			$('.ico5sidea').css('visibility','visible');
			$('.ico5sidea').addClass('animated fadeIn');
			$('.ico5sideb').css('visibility','visible');
			$('.ico5sideb').addClass('animated fadeIn');
			$('.ico5content1').css('visibility','visible');
			$('.ico5content1').addClass('animated fadeIn');
			$('.ico5content2').css('visibility','visible');
			$('.ico5content2').addClass('animated fadeIn');
		}
	}
});
$(document).ready(function(){
	if($('#part1').length){
		if($(this).scrollTop() >= $('#part5').offset().top-500){
			$('.offergroup').css('visibility','visible');
			$('.offergroup').addClass('animated fadeIn');
			$('.offerline').css('visibility','visible');
			$('.offerline').addClass('animated fadeIn');
		}   
		if($(this).scrollTop() >= $('#part5').offset().top){
			$('.graph').css('visibility','visible');
			$('.graph').addClass('animated fadeIn');
		}
		if($(this).scrollTop() >= $('#part2').offset().top-500){
			$('.part2group').css('visibility','visible');
			$('.part2group').addClass('animated fadeIn');
		}
		if($(this).scrollTop() >= $('#part3').offset().top-300){
			$('.inviteiconblock').css('visibility','visible');
			$('.inviteiconblock').addClass('animated fadeIn');
		}
		if($(window).width() <= '1225'){
			$('#drn-s').css('visibility','visible');
			$('#drn-s').addClass('animated fadeIn');
		}
		var ss = $(window).width();
		var com = (0.24*ss)+305;
		$('.hovergroup').css('margin-right', com);
		if($(window).width()<=767 && $(window).width()>=620){
			$('#part1right').removeClass('col-xs-12');
			$('#part1right').addClass('col-xs-6');
			$('#part1right').css('float','right');
			$('#part1left').removeClass('col-xs-12');
			$('#part1left').addClass('col-xs-6');
			$('#part1left').css('float','right');
			$('#part1left').css('padding-top','30px');
		}
	}
	if($('#ico1').length){

		var countRef = firebase.database().ref();
        countRef.once('value')
        .then(function(snapshot) {
            var key = snapshot.key; // null
			var counttime = snapshot.child("countdown").child("yymmdd").val();

			$('#countdown').countdown(counttime, function(event) {
			var $this = $(this).html(event.strftime(
				'<div class="circlegroup"><span class="circle">%D<span class="circletext">DAYS</span></span></div>'
				+ '<div class="circlegroup"><span class="circle">%H<span class="circletext">HOURS</span></span></div>'
				+ '<div class="circlegroup"><span class="circle">%M<span class="circletext">MINUTES</span></span></div>'
				+ '<div class="circlegroup"><span class="circle">%S<span class="circletext">SECONDS</span></span></div>'));
			});
        });

		// counter();
		$('.ico5scroll').niceScroll({
			cursorcolor:'#acacac',
			cursorwidth: '10px',
		});
		if($(this).scrollTop() >= $('#ico2').offset().top-300){
			$('.ico2title').css('visibility','visible');
			$('.ico2title').addClass('animated fadeIn');
			$('.ico2content1').css('visibility','visible');
			$('.ico2content1').addClass('animated fadeIn');
			$('.ico2content2').css('visibility','visible');
			$('.ico2content2').addClass('animated fadeIn');
			$('.ico2content3').css('visibility','visible');
			$('.ico2content3').addClass('animated fadeIn');
		}
		if($(this).scrollTop() >= $('#ico3').offset().top-300){
			$('.ico3titlegroup').css('visibility','visible');
			$('.ico3titlegroup').addClass('animated fadeIn');
			$('.ico3content1').css('visibility','visible');
			$('.ico3content1').addClass('animated fadeIn');
			$('.ico3content2').css('visibility','visible');
			$('.ico3content2').addClass('animated fadeIn');
		}
		if($(this).scrollTop() >= $('#ico5').offset().top-300){
			$('.ico5sidea').css('visibility','visible');
			$('.ico5sidea').addClass('animated fadeIn');
			$('.ico5sideb').css('visibility','visible');
			$('.ico5sideb').addClass('animated fadeIn');
			$('.ico5content1').css('visibility','visible');
			$('.ico5content1').addClass('animated fadeIn');
			$('.ico5content2').css('visibility','visible');
			$('.ico5content2').addClass('animated fadeIn');
		}
		$('#copybutton1').on('click touchstart', function(){
			if (document.selection) { 
				    var range = document.body.createTextRange();
				    range.moveToElementText(document.getElementById("eth"));
				    range.select().createTextRange();
				    document.execCommand("Copy"); 

				} else if (window.getSelection) {
				    var range = document.createRange();
				     range.selectNode(document.getElementById("eth"));
				     window.getSelection().removeAllRanges();
				     window.getSelection().addRange(range);
				     document.execCommand("Copy");
				     $('#copybutton1').html('COPIED!');
				     setInterval(function(){
				     	$('#copybutton1').html('COPY ADDRESS')
				     },2500);
			}
		});
		$('#ico5button2').on('click touchstart', function(){
			var input = document.getElementById("ico5scroll");
			var isiOSDevice = navigator.userAgent.match(/ipad|iphone/i);

			if (isiOSDevice) {
			  
				var editable = input.contentEditable;
				var readOnly = input.readOnly;

				input.contentEditable = true;
				input.readOnly = false;

				var range = document.createRange();
				range.selectNodeContents(input);

				var selection = window.getSelection();
				selection.removeAllRanges();
				selection.addRange(range);

				input.setSelectionRange(0, 999999);
				input.contentEditable = editable;
				input.readOnly = readOnly;

			} else {
			 	input.select();
			}
			document.execCommand('copy');
			$('#ico5button2').html('COPIED!');
			setInterval(function(){
				$('#ico5button2').html('COPY PUBLIC PGP KEY')
			},2500);
		});
		$('#copybutton3').on('click touchstart', function(){
			var input = document.getElementById("ico5scroll");
			var isiOSDevice = navigator.userAgent.match(/ipad|iphone/i);

			if (isiOSDevice) {
			  
				var editable = input.contentEditable;
				var readOnly = input.readOnly;

				input.contentEditable = true;
				input.readOnly = false;

				var range = document.createRange();
				range.selectNodeContents(input);

				var selection = window.getSelection();
				selection.removeAllRanges();
				selection.addRange(range);

				input.setSelectionRange(0, 999999);
				input.contentEditable = editable;
				input.readOnly = readOnly;

			} else {
			 	input.select();
			}
			document.execCommand('copy');
			$('#copybutton3').html('COPIED!');
			setInterval(function(){
				$('#copybutton3').html('COPY PUBLIC PGP KEY')
			},2500);
		});
	}
	$('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top+10
			}, 1000);
			return false;
		}
	}
	})
});
$(window).resize(function(){
	if($('#part1').length){
		if($("#drn-s").css('display') == 'block'){
			$('#drn-s').css('visibility','visible');
			$('#drn-s').addClass('animated fadeIn');
		}
		var ss = $(window).width();
		var com = (0.24*ss)+305;
		$('.hovergroup').css('margin-right', com);
		if($(window).width()<=767 && $(window).width()>=620){
			$('#part1right').removeClass('col-xs-12');
			$('#part1right').addClass('col-xs-6');
			$('#part1right').css('float','right');
			$('#part1left').removeClass('col-xs-12');
			$('#part1left').addClass('col-xs-6');
			$('#part1left').css('float','right');
			$('#part1left').css('padding-top','30px');
		}
	}
	if($('#ico1').length){
		// var x=0;
		// var value = 0.727;
		// var total = $('#barborder').width()-6;
		// var maks = value*total;
		// counter();
	}
});