var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function(){
	allgames_click = true;
	$("#allgames").click(function(){
		if (allgames_click == true) {
			$('#all_games_roll').show();
			allgames_click = false;
		} else {
			$('#all_games_roll').hide();
			allgames_click = true;
			}
		})
		$("#close_allgames").click(function(){
			$('#all_games_roll').hide();
			allgames_click = true;   
		})
		
	more_click = true;
	$("#more").click(function(){
		if (more_click == true) {
			$('#nav_drop').show();
			more_click= false;
		} else {
			$('#nav_drop').hide();
			more_click = true;
			}
		})
		
	$("#nav_drop").mouseover( function() { 
		$('#nav_drop_rolloff').show();
		} 
		);
		
	$("#nav_drop_rolloff").mouseover( function() { 
		$('#nav_drop').hide();
		$('#nav_drop_rolloff').hide();
		more_click = true;
		} 
		);
		
	drop_click = true;
	$("#dropdown").click(function(){
		if (drop_click == true) {
			$('#subnav_drop').show();
			$('#dropdown').css("background", 'url(images/allgames_dropdown_280.jpg) bottom left no-repeat');
			drop_click= false;
		} else {
			$('#subnav_drop').hide();
			$('#dropdown').css("background", 'url(images/allgames_dropdown_280.jpg) top left no-repeat');
			drop_click = true;
			}
		})

		$(".diff").click(function(){
			$('#subnav_drop').hide();
			$('#dropdown').css("background", 'url(images/allgames_dropdown_280.jpg) top left no-repeat');
		})

	$(".diff").click(function(){
		$('#subnav_drop').hide();
		$('#dropdown').css("background", 'url(images/allgames_dropdown_280.jpg) top left no-repeat');
	})	
	
	$("#subnav_drop").mouseover( function() { 
		$('#rolloff_area').show();
		} 
		);
		
	$("#rolloff_area").mouseover( function() { 
		$('#subnav_drop').hide();
		$('#rolloff_area').hide();
		$('#dropdown').css("background", 'url(images/allgames_dropdown_280.jpg) top left no-repeat');
		drop_click = true;
		} 
		);
	
	
	
	
		
	lang_click = true;
	$("#lang_link").click(function(){
		if (lang_click == true) {
			$('#lang_drop').show();
			$('#lang_link').addClass('clicked');
			lang_click= false;
		} else {
			$('#lang_drop').hide();
			$('#lang_link').removeClass('clicked')
			lang_click = true;
			}
		})
		
    $("#lang_drop").mouseover( function() { 
    	$('#lang_drop_rolloff').show();
    	} 
    	);
   
    $("#lang_drop_rolloff").mouseover( function() { 
    	$('#lang_drop').hide();
    	$('#lang_drop_rolloff').hide();
		$('#lang_link').removeClass('clicked')
    	lang_click = true;
    	} 
    	);

	mobile_click = true;
	$("#mobile_drop").click(function(){
		if (mobile_click == true) {
			$(this).addClass("mobile_clicked");
			$("#subnav_drop").show();
			mobile_click = false;
		} else {
			$("#subnav_drop").hide();
			$("#mobile_drop").removeClass("mobile_clicked");
			mobile_click = true;
			}
		})
		

	$(".diff").click(function(){
		$("#subnav_drop").hide();
		$(this).addClass("unclicked");
	})
		
	wrapper_height = $("#wrapper").height();
	wrapper_height = wrapper_height + 170;
	window_height = $(window).height();
	
	if (wrapper_height < window_height) {
		$("#bottom_promo").css({ bottom: "0" });
	}
		
	});

}
/*
     FILE ARCHIVED ON 22:43:59 Oct 02, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:00:46 Jul 29, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.18
  exclusion.robots: 0.078
  exclusion.robots.policy: 0.058
  esindex: 0.017
  cdx.remote: 6.319
  LoadShardBlock: 28.193 (3)
  PetaboxLoader3.datanode: 74.814 (4)
  load_resource: 126.403
  PetaboxLoader3.resolve: 71.998
*/