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

jQuery.plugdetect = function(pluginFind) {
	switch(pluginFind)
	{
		case "flash":
			pluginMimeType = "application/x-shockwave-flash";
			pluginName = "Shockwave Flash";
			checkPlugin();
			break    
		case "java":
			pluginMimeType = "application/x-java-applet";
			pluginName = "Java Applet";
			checkPlugin();
			pluginMimeType = "application/x-java-vm";
			pluginName = "Java VM";
			checkPlugin();
			break
		case "activex":
			pluginMimeType = "application/x-popcaploader;version=1.0.0.2";
			pluginName = "PopCap Games Plugin";
			checkPlugin();
			break
		default:
			pluginStatus = false;
	}
	function checkPlugin() {
		plugin = (navigator.mimeTypes && navigator.mimeTypes[pluginMimeType]) ? navigator.mimeTypes[pluginMimeType].enabledPlugin : 0;
		if (plugin && pluginName == "Shockwave Flash") {
			words = navigator.plugins[pluginName].description.split(" ");
			for (i = 0; i < words.length; ++i) {
				if (isNaN(parseInt(words[i])))
					continue;
				pluginVersion = words[i]; 
			}
			if(pluginVersion >= 9) {
				pluginStatus = true;
			}
		} else if (plugin) {
			pluginStatus = true;
		} else {
			pluginStatus = false;
		}
	}
	return pluginStatus;
}

}
/*
     FILE ARCHIVED ON 23:04:13 Oct 02, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:58:57 Jul 29, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.58
  exclusion.robots: 0.041
  exclusion.robots.policy: 0.029
  esindex: 0.01
  cdx.remote: 6.851
  LoadShardBlock: 60.517 (3)
  PetaboxLoader3.datanode: 58.858 (4)
  load_resource: 62.304
  PetaboxLoader3.resolve: 46.42
*/