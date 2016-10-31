 function reslinks(){
	  var url1 = document.getElementById('reslinks').selectedIndex;
	  var url2 = document.getElementById('reslinks').options[url1].value;
	  window.location = url2;
	 }