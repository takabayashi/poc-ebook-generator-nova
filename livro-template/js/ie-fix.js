function applyIeFix(){
	document.getElementById("capa").onmouseover = function(){
		document.getElementById("capa").style.backgroundImage="url('images/controles/home_rollover.png')";
		document.getElementById("capa").style.cursor='pointer'; 
	}

	document.getElementById("capa").onmouseout = function(){
		document.getElementById("capa").style.backgroundImage="none";
		document.getElementById("capa").style.cursor='auto'; 
	}

	document.getElementById("back").onmouseover = function(){
		document.getElementById("back").style.backgroundImage="url('images/controles/left_rollover.png')";
		document.getElementById("back").style.cursor='pointer'; 
	}

	document.getElementById("back").onmouseout = function(){
		document.getElementById("back").style.backgroundImage="none";
		document.getElementById("back").style.cursor='auto'; 
	}

	document.getElementById("next").onmouseover = function(){
		document.getElementById("next").style.backgroundImage="url('images/controles/right_rollover.png')";
		document.getElementById("next").style.cursor='pointer'; 
	}

	document.getElementById("next").onmouseout = function(){
		document.getElementById("next").style.backgroundImage="none";
		document.getElementById("next").style.cursor='auto'; 
	}

	document.getElementById("zoomIn").onmouseover = function(){
		document.getElementById("zoomIn").style.backgroundImage="url('images/controles/zoomin_rollover.png')";
		document.getElementById("zoomIn").style.cursor='pointer'; 
	}

	document.getElementById("zoomIn").onmouseout = function(){
		document.getElementById("zoomIn").style.backgroundImage="none";
		document.getElementById("zoomIn").style.cursor='auto'; 
	}

	document.getElementById("zoomOut").onmouseover = function(){
		document.getElementById("zoomOut").style.backgroundImage="url('images/controles/zoomout_rollover.png')";
		document.getElementById("zoomOut").style.cursor='pointer'; 
	}

	document.getElementById("zoomOut").onmouseout = function(){
		document.getElementById("zoomOut").style.backgroundImage="none";
		document.getElementById("zoomOut").style.cursor='auto'; 
	}

	document.getElementById("zoomFit").onmouseover = function(){
		document.getElementById("zoomFit").style.backgroundImage="url('images/controles/restore_rollover.png')";
		document.getElementById("zoomFit").style.cursor='pointer'; 
	}

	document.getElementById("zoomFit").onmouseout = function(){
		document.getElementById("zoomFit").style.backgroundImage="none";
		document.getElementById("zoomFit").style.cursor='auto'; 
	}

	document.getElementById("modalCloseLink").onmouseover = function(){
		document.getElementById("modalCloseLink").style.background="#00d9ff";
		document.getElementById("modalCloseLink").style.cursor='pointer'; 
	}

	document.getElementById("modalCloseLink").onmouseout = function(){
		document.getElementById("modalCloseLink").style.background="transparent";
		document.getElementById("modalCloseLink").style.cursor='auto'; 
	}
}