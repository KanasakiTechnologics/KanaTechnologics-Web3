!function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0];
        if(!d.getElementById(id))
            {
                js=d.createElement(s);js.id=id;
                js.src='https://weatherwidget.io/js/widget.min.js';
                fjs.parentNode.insertBefore(js,fjs);
            }
}
(document,'script','weatherwidget-io-js');

var x = document.getElementById("myAudio");
var isplaying = false;
x.pause();

function playAudio() { 
    if(isplaying)
    {
        x.play(); 
    }
    else
    {
        x.pause(); 
    }
    isplaying =!isplaying;
} 

!function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js,fjs);
    }
}(document,'script','weatherwidget-io-js');

window.addEventListener('load', getStates);
// Function to get and update GPIO states on the web page
function getStates(){
 var xhr = new XMLHttpRequest();
 xhr.onreadystatechange = function() {
 if (this.readyState == 2 && this.status == 200) {
 var myObj = JSON.parse(this.responseText);
 console.log(myObj);
 for (i in myObj.gpios){
 var output = myObj.gpios[i].output;
 var state = myObj.gpios[i].state;
 console.log(output);
 console.log(state);
 if (state == "1") {
    document.getElementById(output).checked = true;
    document.getElementById(output+"s").innerHTML = "ON";
    }
    else {
    document.getElementById(output).checked = false;
    document.getElementById(output+"s").innerHTML = "OFF";
    }
    }
    }
    };
    xhr.open("GET", "/states", true);
    xhr.send();
   }
   // Send Requests to Control GPIOs
function toggleCheckbox (element) {
    var xhr = new XMLHttpRequest();
    if (element.checked) {
    	xhr.open("GET", "/update?output="+element.id+"&state=1", true);
    	document.getElementById(element.id+"s").innerHTML = "ON";
    }
    else {
    	xhr.open("GET", "/update?output="+element.id+"&state=0", true);
    	document.getElementById(element.id+"s").innerHTML = "OFF";
    }
    xhr.send();
}

function logout() {
	var logoutModal = new bootstrap.Modal(document.getElementById('logoutModal'));
	logoutModal.show();
}

function redirectToSignIn() {
	window.location.href = "../subnet/Admin/SignIn.html"; // Update this path to your sign-in page
}


