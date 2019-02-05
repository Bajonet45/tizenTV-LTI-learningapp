
var loginNumber 		="";

//define variable for button array
var vertical 			= 0;
var horizontal			= 0;
var btnFocusPointer 	= 00;

// document.getElementById("00").style.backgroundColor = "red";
document.getElementById("00").style.border = "10px solid #008CBA";


// Button pointer
//--------------------------------------------
function shifting(verticalShift,horizontalShift){
	
	newVertical		= vertical + verticalShift;
	newHorizontal	= horizontal + horizontalShift;
	if (newVertical <= 3 && newVertical >=0) {
		vertical 	= newVertical;
	} else {
		vertical = vertical;
	}
	
	if (newHorizontal <= 2 && newHorizontal >= 0) {
		horizontal 	= newHorizontal;
	} else {
		horizontal = horizontal;
	}
	
	
	btnFocusPointer = vertical.toString()+horizontal.toString();
  }

//Button highlighting in css

function btnHighlight(btnID){
	btnClearHighlight();
  	document.getElementById(btnID.toString()).style.border = "10px solid #008CBA";
  }

function btnClearHighlight(){
  	var button = document.getElementsByClassName("fbutton column");

  	for (var i = button.length - 1; i >= 0; i--) {
  		button[i].style.border = "none";
  	}
  }

// Input value process
//--------------------------------------------

function inputValue(buttonValue){
  	document.getElementById('telNo').value+=buttonValue;
  	loginNumber +=buttonValue;
  	
  }

// For C value case
function clearInput(){
  	document.getElementById('telNo').value="";
  }

//For OK value case
function postLoginRequest(){
    document.getElementById('telNo').value=loginNumber;
  }


// Remote event listener IDs:
// 10009 	= back
// 13		= Enter
// 37		= Left
// 38		= Up
// 39		= Right
// 40		= Down
// --------------------------------------------

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















