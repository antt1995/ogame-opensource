function reloadEventbox(d){if(d.length==0){return}var c=$.parseJSON(d);var a=false;var b=typeof c.eventText;var e=parseInt(c.friendly)+parseInt(c.neutral)+parseInt(c.hostile);if(e>0){a=true}if(a){$("#eventFriendly").html(c.friendly);$("#eventNeutral").html(c.neutral);$("#eventHostile").html(c.hostile);$("#eventContent").html(c.eventText);$("#eventClass").attr("class",c.eventText)}if(b=="string"||b=="undefined"){$("#eventboxLoading").hide();if(a){$("#eventboxBlank").hide();$("#eventboxFilled").show();new simpleCountdown(getElementByIdWithCache("tempcounter"),c.eventTime,initAjaxEventbox)}else{$("#eventboxBlank").show();$("#eventboxFilled").hide()}}}function reloadResources(b){var a=$.parseJSON(b);reloadResourceTicker(b);$("#resources_metal").html(a.metal["resources"]["actualFormat"]);$("#resources_metal").attr("class",a.metal["class"]);$("#metal_box").attr("title",a.metal["tooltip"]);$("#resources_crystal").html(a.crystal["resources"]["actualFormat"]);$("#resources_crystal").attr("class",a.crystal["class"]);$("#crystal_box").attr("title",a.crystal["tooltip"]);$("#resources_deuterium").html(a.deuterium["resources"]["actualFormat"]);$("#resources_deuterium").attr("class",a.deuterium["class"]);$("#deuterium_box").attr("title",a.deuterium["tooltip"]);$("#resources_energy").html(a.energy["resources"]["actualFormat"]);$("#resources_energy").attr("class",a.energy["class"]);$("#energy_box").attr("title",a.energy["tooltip"]);$("#resources_darkmatter").html(a.darkmatter["resources"]["actualFormat"]);$("#resources_darkmatter").attr("class",a.darkmatter["class"]);$("#darkmatter_box").attr("title",a.darkmatter["tooltip"])}function reloadResourceTicker(b){var a=$.parseJSON(b);resourceTickerMetal.available=a.metal["resources"]["actual"];resourceTickerMetal.limit=[0,a.metal["resources"]["max"]];resourceTickerMetal.production=a.metal["resources"]["production"];resourceTickerCrystal.available=a.crystal["resources"]["actual"];resourceTickerCrystal.limit=[0,a.crystal["resources"]["max"]];resourceTickerCrystal.production=a.crystal["resources"]["production"];resourceTickerDeuterium.available=a.deuterium["resources"]["actual"];resourceTickerDeuterium.limit=[0,a.deuterium["resources"]["max"]];resourceTickerDeuterium.production=a.deuterium["resources"]["production"];if(!vacation){metalTicker=new resourceTicker(resourceTickerMetal);crystalTicker=new resourceTicker(resourceTickerCrystal);deuteriumTicker=new resourceTicker(resourceTickerDeuterium)}}function reloadRightmenu(a){$.get(a,{},displayRightmenu)}function displayRightmenu(a){$("#rechts").html(a);initCluetip()}function ajaxFormSubmit(c,b,d){var e=$("#"+c+"").serialize();var a=null;if(d!=null&&typeof d=="function"){a=d}$.ajax({type:"POST",url:b,data:e,success:a})};