function fetch(url,options) {
	let xhr = new XMLHttpRequest();
	xhr.open(options, url, false);
	xhr.send();
	if (xhr.status != 200) {
		alert(xhr.status + ': ' + xhr.statusText);
	} else {
		alert(xhr.responseText);
	}
}
module.exports = fetch