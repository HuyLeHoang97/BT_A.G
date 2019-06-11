function creatediv() {
    var div = document.createElement('div');
	div.setAttribute("id", "div2")
    div.innerHTML = document.getElementById('innerhtml').value;  
    document.body.appendChild(div);
	
	var button = document.createElement("BUTTON");
	var button_txt = document.createTextNode("X");
	button.setAttribute("id","btn_delete")
	button.appendChild(button_txt);
	document.body.appendChild(button);
	

	button.onclick = function(){
		document.getElementById("div2").remove();
		this.remove();
	}
}
document.getElementById("div1").onmousedown = function() {mouseDown()};
document.getElementById("div1").onmouseup = function() {mouseUp()};

function mouseDown() {
  document.getElementById("div1").style.background = "red";
}
function mouseUp() {
  document.getElementById("div1").style.background = "green";
}

