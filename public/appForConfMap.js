$(document).ready(function(){
	$("#box_for_picture_map").append("<img id=\"current_map\" src = \"/images/realMap.jpeg\">")
	

//это вертим div
	var rotated = false;

    var div = document.getElementById('my_div');
    var deg = rotated ? 0 : -45;

    div.style.webkitTransform = 'rotate('+deg+'deg)'; 
    div.style.mozTransform    = 'rotate('+deg+'deg)'; 
    div.style.msTransform     = 'rotate('+deg+'deg)'; 
    div.style.oTransform      = 'rotate('+deg+'deg)'; 
    div.style.transform       = 'rotate('+deg+'deg)'; 

    rotated = !rotated;
})