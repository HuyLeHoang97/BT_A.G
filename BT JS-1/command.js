function creatediv() {
    var div = document.createElement('div');
	div.setAttribute("id", "div2")
    div.innerHTML = document.getElementById('innerhtml').value;
   
    document.body.appendChild(div);
}