	window.setInterval(function(){
	var val = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	/*console.log(val);*/

	var bodyRect = document.body.getBoundingClientRect();

    var elemRect = document.getElementById('hdMyProjects').getBoundingClientRect(),
    elem1 = elemRect.top - bodyRect.top;

    var elemRect = document.getElementById('hdProjectDesigns').getBoundingClientRect(),
    elem2 = elemRect.top - bodyRect.top;

    var elemRect = document.getElementById('hdMySuccess').getBoundingClientRect(),
    elem3 = elemRect.top - bodyRect.top;

    var elemRect = document.getElementById('hdAboutMe').getBoundingClientRect(),
    elem4 = elemRect.top - bodyRect.top;

/*	console.log(elem1);
	console.log(elem2);
	console.log(elem3);*/

	if (val < elem1-200) {
		if (document.getElementById('nav1')) {
			document.getElementById('nav1').classList.remove("active01");
		}
		if (document.getElementById('nav2')) {
			document.getElementById('nav2').classList.remove("active01");
		}
		if (document.getElementById('nav3')) {
			document.getElementById('nav3').classList.remove("active01");
		}
		if (document.getElementById('nav4')) {
			document.getElementById('nav4').classList.remove("active01");
		}
		if (document.getElementById('goToTop')) {
			document.getElementById('goToTop').style.visibility = "hidden";
		}
		if (document.getElementById('tagline')) {
			document.getElementById('tagline').style.visibility = "visible";
		}
	} else
	if (val >= elem1-200 && val < elem2-200) { 
		if (document.getElementById('nav1')) {
			document.getElementById('nav1').classList.add("active01");
		}
		if (document.getElementById('nav2')) {
			document.getElementById('nav2').classList.remove("active01");
		}
		if (document.getElementById('nav3')) {
			document.getElementById('nav3').classList.remove("active01");
		}
		if (document.getElementById('nav4')) {
			document.getElementById('nav4').classList.remove("active01");
		}
		if (document.getElementById('goToTop')) {
			document.getElementById('goToTop').style.visibility = "visible";
		}
		if (document.getElementById('tagline')) {
			document.getElementById('tagline').style.visibility = "hidden";
		}
	} else
	if (val >= elem2-200 && val < elem3-200) { 
		if (document.getElementById('nav1')) {
			document.getElementById('nav1').classList.remove("active01");
		}
		if (document.getElementById('nav2')) {
			document.getElementById('nav2').classList.add("active01");
		}
		if (document.getElementById('nav3')) {
			document.getElementById('nav3').classList.remove("active01");
		}
		if (document.getElementById('nav4')) {
			document.getElementById('nav4').classList.remove("active01");
		}
		if (document.getElementById('goToTop')) {
			document.getElementById('goToTop').style.visibility = "visible";
		}
		if (document.getElementById('tagline')) {
			document.getElementById('tagline').style.visibility = "hidden";
		}
	} else  
	if (val >= elem3-200 && val < elem4-400 ) {
		if (document.getElementById('nav1')) {
			document.getElementById('nav1').classList.remove("active01");
		}
		if (document.getElementById('nav2')) {
			document.getElementById('nav2').classList.remove("active01");
		}
		if (document.getElementById('nav3')) {
			document.getElementById('nav3').classList.add("active01");
		}
		if (document.getElementById('nav4')) {
			document.getElementById('nav4').classList.remove("active01");
		}
		if (document.getElementById('goToTop')) {
			document.getElementById('goToTop').style.visibility = "visible";
		}
		if (document.getElementById('tagline')) {
			document.getElementById('tagline').style.visibility = "hidden";
		}
	} 
	else {
		if (document.getElementById('nav1')) {
			document.getElementById('nav1').classList.remove("active01");
		}
		if (document.getElementById('nav2')) {
			document.getElementById('nav2').classList.remove("active01");
		}
		if (document.getElementById('nav3')) {
			document.getElementById('nav3').classList.remove("active01");
		}
		if (document.getElementById('nav4')) {
			document.getElementById('nav4').classList.add("active01");
		}
		if (document.getElementById('goToTop')) {
			document.getElementById('goToTop').style.visibility = "visible";
		}
		if (document.getElementById('tagline')) {
			document.getElementById('tagline').style.visibility = "hidden";
		}	
	}
}, 5);
