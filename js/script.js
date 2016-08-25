var btn = document.getElementById('firstbtn');
btn.onlick = function () {
    var httpRequest; 
    if(window.XMLHttpRequest) {
	    httpRequest = new XMLHttpRequest();
    } else {
	    httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
    }

    httpRequest.open('GET', 'data/data.json');

    httpRequest.onreadystatechange = function(){
	    if((httpRequest.status == 200)&&(httpRequest.readyState==4)) {
	        var data = JSON.parse(httpRequest.responseText);
	        var result = '<ul>';
	        for (var key in data) {
	            result += '<li>' + data[key].shortname + '</li>';
	        }
	        result = '</ul>';
	        document.getElementById('readData').innerHTML = result;
	    }
    }
    httpRequest.send();
}

