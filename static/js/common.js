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

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function doClear(txtEl){
	if(txtEl.value==" Enter your email address"){
		txtEl.value="";
	}
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function setCookie(name,value,days,path,domain,secure) {
	//negative days removes cookie
	//unset or 0 days keeps cookie until browser is closed
	//days, path, domain and secure are optional
	//path defaults to "/", days defaults to -1
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	thisCookie = name+"="+value+expires +
	((path) ? "; path=" + path : "; path=/") +
	((domain) ? "; domain=" + domain : "") +
	((secure) ? "; secure" : "");	
	document.cookie = name+"="+value+expires+"; path=/";
}

function removeCookie(name) {
	setCookie(name,"",-1);
}

function changeLanguageCommon(languageList, baseURL, platform, lcid) {
    
	var baseURL = window.location.pathname;

	var languageURL = baseURL+"?lcid="+lcid;
	if (platform != '') languageURL += "&p="+platform;
	
	//get existing query string
	var qs = window.location.search.substring(1);

	if (qs.length > 0) {
		//disassemble query string into name/value pairs
		var qsPairs = qs.split('&');
		for(var i = 0; i < qsPairs.length; i++) {
			var qsPair = qsPairs[i].split('=');
			var qsName = qsPair[0];
			var qsValue = qsPair[1]; 
			//reassemble name/values not passed via languageURL
			if (qsName != 'lcid' && qsName != 'p') {
				languageURL += "&" + qsName + "=" + qsValue;
			}
		}
	}
	
	window.location.href = languageURL;
}

function get_language_abbreviation(lcid) {

	var language_shortname = '';	
	
	if (lcid == '1031') {
		language_shortname = 'de';
	}
	else if (lcid == '1034') {
		language_shortname = 'es';
	}
	else if (lcid == '1036') {
		language_shortname = 'fr';
	}
	else if (lcid == '1040') {
		language_shortname = 'it';
	}
	else if (lcid == '1043') {
		language_shortname = 'nl';
	}
	else if (lcid == '1053') {
		language_shortname = 'sv';
	}
	else {
		language_shortname = 'en';
	}
	
	return language_shortname;
}

function in_array(needle, haystack) {
	for (var i = 0; i < haystack.length; i++) {
		if (haystack[i] == needle) {
			return true;
		}
	}
	return false;
} 




}
/*
     FILE ARCHIVED ON 22:48:56 Oct 02, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:58:58 Jul 29, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 9.43
  exclusion.robots: 8.857
  exclusion.robots.policy: 8.846
  esindex: 0.01
  cdx.remote: 10.328
  LoadShardBlock: 63.124 (3)
  PetaboxLoader3.datanode: 64.488 (4)
  load_resource: 23.168
  PetaboxLoader3.resolve: 18.875
*/