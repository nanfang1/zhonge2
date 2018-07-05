window.onload=function(){
	document.getElementById("back").onclick=function(){
		// alert(document.referrer)
		window.history.back(); //后退一页
		// window.location.reload();
	}
}