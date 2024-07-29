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


/**
* Allow State/Province select box as necessary
* option to disable or hide element, disable is default
*/
function allowStateProvinceSelect(thisSelect, thatSelectID) {
	/* optonal hide mode argument check, otherwise default to disable mode */
	mode = (arguments.length>2) ? arguments[2] : null;
	if (mode == 'hide') {
		/* hide element */
		if ((thisSelect.options[thisSelect.selectedIndex].value == "US") || (thisSelect.options[thisSelect.selectedIndex].value == "CA")) {
			document.getElementById(thatSelectID).style.display = "inline";
			document.getElementById(thatSelectID+"_label").style.display = "inline";
		} else {
			document.getElementById(thatSelectID).style.display = "none";
			document.getElementById(thatSelectID+"_label").style.display = "none";
		}
	} else {
		/* disable element */
		if ((thisSelect.options[thisSelect.selectedIndex].value == "US") || (thisSelect.options[thisSelect.selectedIndex].value == "CA")) {
			document.getElementById(thatSelectID).disabled = false;
			document.getElementById(thatSelectID+"_label").disabled = false;
		} else {
			document.getElementById(thatSelectID).disabled = true;
			document.getElementById(thatSelectID+"_label").disabled = true;
		}
	}
}
/* 
* NOTE: added id to label, <label for="SelectID" id="SelectID_label">
* Future problems with multiple labels on a single form element? 
*/


/* TO DO: hide or show Postal Code conditionally (e.g. Ireland = hide) */


function allowEmailInput(thisInput, thatInputID) {
	/* optonal hide mode argument check, otherwise default to disable mode */
	mode = (arguments.length>2) ? arguments[2] : null;
	if (mode == 'hide') {
		/* hide element */
		if (thisInput.checked) {
			document.getElementById(thatInputID).style.display = "inline";
			document.getElementById(thatInputID+"_label").style.display = "inline";
		} else {
			document.getElementById(thatInputID).style.display = "none";
			document.getElementById(thatInputID+"_label").style.display = "none";
		}
	} else {
		/* disable element */
		if ((thisInput.checked)) {
			document.getElementById(thatInputID).disabled = false;
			document.getElementById(thatInputID+"_label").disabled = false;
		} else {
			document.getElementById(thatInputID).disabled = true;
			document.getElementById(thatInputID+"_label").disabled = true;
		}
	}
}


function disableInput(inputID) {
	document.getElementById(inputID).disabled = true;
}

function limitClick() {
	//use in body onload to limit form submit links to a single click
	//all link ids used as arguments are tied to the same click limit
	var clickedOnce = 0;
	for (i = 0; i < arguments.length; i++) {
		document.getElementById(arguments[i]).onclick = function() {
			if (clickedOnce == 1) {
				//alert('prevent click ['+clickedOnce+']');
				return false;
			}
			clickedOnce = 1;
			//alert('allow click ['+clickedOnce+']');
			return true;
		};
		//alert('id "'+arguments[i]+'" click limited');
	}
} 

function limitField(field, maxlimit, counterfield) {
	// if too long...trim it!
	if (field.value.length > maxlimit) {
		field.value = field.value.substring(0, maxlimit);
	}
	// otherwise, update optional counter field with remaining characters
	else {
		if (counterfield) {
			counterfield.value = maxlimit - field.value.length;
		}
	}
}


// TODO: fix and use function below instead of separate copyBillingToShipping.js

function insertCopyBillingToShippingOption(inputName, inputLabel, inputType) {
	if((typeof document.getElementById!='undefined')&&(inputType=='checkbox')) {
		var inputGroup = '<label for="'+inputName+'">'+inputLabel+'</label><input type="checkbox" name="'+inputName+'" id="'+inputName+'" />';
		document.write(inputGroup);
		document.getElementById(inputName).onclick=copyBillingToShipping(inputName);
		//alert(document.getElementById(inputName).onclick);
	}
}



function set_payment_method(thisSelect) {
	new_question_list_id = -1;
	for (var loop = 0; loop <payment_methods.length; loop++)
		{
			if (payment_methods[loop][0] == thisSelect.options[thisSelect.selectedIndex].value) {
				new_question_list_id = payment_methods[loop][1];
				break;
			}
		
		}
	if (new_question_list_id != question_list_id) {
		payment_type = thisSelect.options[thisSelect.selectedIndex].value;
		location.href = "summary.php?a=sp&payment_type=" + payment_type;
	}
}


function copyBillingToShipping(inputName) {
	if(document.getElementById(inputName).checked) {

  var inputtags=document.body.getElementsByTagName('input');
	var inputtagslength=inputtags.length;
	var billingobject;
  /*-----DEBUG var debug=''; */

  for(var x=0; x<inputtagslength; x++) {
		if(inputtags[x].name.substring(0, 7)=='billing') {
			// watch out for no properties error on inputtags with no id set to match billing/shipping scheme
			if (document.getElementById(inputtags[x].name.replace('billing', 'shipping'))) {
				document.getElementById(inputtags[x].name.replace('billing', 'shipping')).value=inputtags[x].value;
			}
			/*-----DEBUG
			else debug += inputtags[x].name + '--' + document.getElementById(inputtags[x].name) + '\n';
			*/
		}
	}
	document.getElementById('shipping_country').selectedIndex=document.getElementById('billing_country').selectedIndex;
	document.getElementById('shipping_state').selectedIndex=document.getElementById('billing_state').selectedIndex;
	}
/*-----DEBUG alert(debug); */
}





}
/*
     FILE ARCHIVED ON 22:48:02 Oct 02, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:59:02 Jul 29, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.471
  exclusion.robots: 0.037
  exclusion.robots.policy: 0.027
  esindex: 0.008
  cdx.remote: 40.714
  LoadShardBlock: 113.043 (3)
  PetaboxLoader3.datanode: 130.4 (4)
  load_resource: 58.159
  PetaboxLoader3.resolve: 34.187
*/