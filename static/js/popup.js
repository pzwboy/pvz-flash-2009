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

function genericPop(url, width, height, scrollbars, resizable) {	
	var Params;	
	var Title;
	Title = "PopCap Games"
	Params = "width=" + width + ", height=" + height + ",title=1,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=" + scrollbars + ",resizable=" + resizable + ",copyhistory=0,left=0,top=0";	
	window.open (url, 'genericPop', Params);
}

function printPop(url, width, height, scrollbars, resizable, windowname, title) {
	//menu and tool bars enabled to allow printing
	var Params;	
	var Title;
	Title = "PopCap Games - " + title;
	Params = "width=" + width + ", height=" + height + ",title=0,toolbar=1,location=0,directories=0,status=0,menubar=1,scrollbars=" + scrollbars + ",resizable=" + resizable + ",copyhistory=0,left=0,top=0";	
	window.open (url, 'printPop' + windowname, Params);
}


// popup utilities

function removeString(string, subject) {
	var regex = new RegExp(string, 'g');
	return subject.replace(regex, '');
}

//bundle upsell flyout
function showTip() {
	tip = document.getElementById('upsell_hover');
	tip.style.display = "block";
}
function hideTip() {
	tip = document.getElementById('upsell_hover');
	tip.style.display = "none";
}


}
/*
     FILE ARCHIVED ON 22:50:38 Oct 02, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:58:54 Jul 29, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.501
  exclusion.robots: 0.039
  exclusion.robots.policy: 0.029
  esindex: 0.008
  cdx.remote: 6.312
  LoadShardBlock: 220.11 (3)
  PetaboxLoader3.datanode: 42.469 (4)
  PetaboxLoader3.resolve: 232.257 (2)
  load_resource: 81.286
*/