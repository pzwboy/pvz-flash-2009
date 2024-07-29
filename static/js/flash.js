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

function flashWrite(id,movie,width,height,wmode,flashvars) {
	var flashDebug = false;
	var flashObject = '';
	//object tag
	flashObject += "<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0\" width=\"" + width + "\" height=\"" + height + "\" id=\"" + id + "\" align=\"middle\">";
	flashObject += "<param name=\"allowScriptAccess\" value=\"sameDomain\" />";
	flashObject += "<param name=\"movie\" value=\"" + movie + "\" />";
	flashObject += "<param name=\"quality\" value=\"high\" />";
	flashObject += "<param name=\"bgcolor\" value=\"#ffffff\" />";
	flashObject += "<param name=\"wmode\" value=\"" + wmode + "\" />";
	if (typeof(flashvars) != 'undefined') {
		flashObject += "<param name=\"FlashVars\" value=\"" + flashvars + "\" />";
	}
	//embed tag
	flashObject += "<embed src=\"" + movie + "\" quality=\"high\" bgcolor=\"#ffffff\" width=\"" + width + "\" height=\"" + height + "\" name=\"" + id + "\" wmode=\"" + wmode + "\" align=\"middle\" allowScriptAccess=\"sameDomain\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\"";
	if (typeof(flashvars) != 'undefined') {
		flashObject += " FlashVars=\"" + flashvars + "\"";
	}
	flashObject += " />";
	//end object tag
	flashObject += "</object>";
	document.write(flashObject);
	//debug
	if (flashDebug) {
		document.write("<form><textarea id='flashWriteDebug' style='width:600px; height:300px;'>" + flashObject + "</textarea></form>")
	}
}


}
/*
     FILE ARCHIVED ON 22:48:16 Oct 02, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:00:41 Jul 29, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.459
  exclusion.robots: 0.034
  exclusion.robots.policy: 0.026
  esindex: 0.007
  cdx.remote: 27.229
  LoadShardBlock: 59.057 (3)
  PetaboxLoader3.datanode: 66.076 (4)
  load_resource: 144.689
  PetaboxLoader3.resolve: 134.95
*/