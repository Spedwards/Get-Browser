/*
	Using the navigator vendor and application name we can gather the information
	needed to determine which browser is being used.
*/

function getBrowser() {
	var nv = navigator.vendor,
		nan = navigator.appName;
	if (nv == 'Google Inc.') {
		return 'Google Chrome';
	} else if (nv == 'Apple Computer') {
		return 'Safari';
	} else if (nv == 'Opera Software ASA') {
		return 'Opera';
	} else if (nan == 'Microsoft Internet Explorer') {
		return 'Microsoft Internet Explorer';
	} else if (/Firefox/.test(navigator.userAgent)) {
		return 'Mozilla Firefox';
	}
}
