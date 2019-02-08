
console.log("starting");
var lnk = localStorage.getItem("token");
console.log("Token is:   " + lnk);


document.getElementById('kata').innerHTML=lnk;
//Remote event listener IDs:
//10009 	= back
//13		= Enter
//37		= Left
//38		= Up
//39		= Right
//40		= Down
//--------------------------------------------

document.addEventListener('keydown', function(remoteEvent) {

	switch(remoteEvent.keyCode) {
	  case 10009:
			tizen.application.getCurrentApplication().exit();
		    break;
	  case 13:
		  var pressedValue = document.getElementById(btnFocusPointer).value;
		  inputValue(pressedValue);
		  document.getElementById('kata').innerHTML=pressedValue;
		    break;
	  case 37:
		  shifting(0, -1);
		  btnHighlight(btnFocusPointer);
		  document.getElementById('kata').innerHTML=btnFocusPointer;
		  	break;
	  case 38:
		  shifting(-1, 0);
		  btnHighlight(btnFocusPointer);
		  document.getElementById('kata').innerHTML=btnFocusPointer;
		    break;
	  case 39:
		  shifting(0, 1);
		  btnHighlight(btnFocusPointer);
		  document.getElementById('kata').innerHTML=btnFocusPointer;
		    break;
	  case 40:
		  shifting(1, 0);
		  btnHighlight(btnFocusPointer);
		  document.getElementById('kata').innerHTML=btnFocusPointer;
		    break;
	  default:
		  	document.getElementById('kata').innerHTML=remoteEvent.keyCode;
	}
});