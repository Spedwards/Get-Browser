/*
	Using the navigator vendor and application name we can gather the information
	needed to determine which browser is being used.
*/

function getBrowser() {
	var nv = navigator.vendor,
		nan = navigator.appName;
	if (/Google Inc./.test(navigator.vendor)) {
		return 'Google Chrome';
	} else if (/Apple Computer/.test(navigator.appName)) {
		return 'Safari';
	} else if (/Opera Software ASA/.test(navigator.vendor)) {
		return 'Opera';
	} else if (/Microsoft Internet Explorer/.test(navigator.appName)) {
		return 'Microsoft Internet Explorer';
	} else if (/Firefox/.test(navigator.userAgent) && !/PaleMoon/.test(navigator.userAgent) && !/SeaMonkey/.test(navigator.userAgent)) {
		return 'Mozilla Firefox';
	} else if (/K-Meleon/.test(navigator.vendor)) {
		return 'K-Meleon';
	} else if (/Maxthon Asia Ltd./.test(navigator.vendor)) {
		return 'Maxthon';
	} else if (/PaleMoon/.test(navigator.userAgent)) {
		return 'Pale Moon';
	} else if (/SeaMonkey/.test(navigator.userAgent)) {
		return 'SeaMonkey';
	} else if (/Arora/.test(navigator.userAgent)) {
		return 'Arora';
	}
}
