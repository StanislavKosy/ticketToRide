$(document).ready(function(){
	$("#box_for_picture_map").append("<img id=\"current_map\" src = \"/images/realMap.jpeg\">")
	
    //получили список дорог и отрисовали их
    fetch('http://localhost:3333/map/roads')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        $('#box_for_config_map').empty();
        console.log(data.length);
        for (var i = 0; i < data.length; i++) {
            var road = document.createElement('div');
            road.style.position = 'absolute';
            road.style.top = data[i].x + 'px';
            road.style.left = data[i].y + 'px';
            road.style.border = '2px solid Red';
            road.style.height = '50px';
            road.style.width = '50px';
            road.style.Class = 'road_config';
            $('#box_for_picture_map').append(road);
        }
    });     

    //при наведении мышкой покажутся координаты на карте
    $('.container_for_map').mousemove(function(event){
        var pos = $(this).offset();
        var elem_left = pos.left.toFixed(0);
        var elem_top = pos.top.toFixed(0);
        var x = event.pageX - elem_left;
        var y = event.pageY - elem_top;
        $('#div_for_print_coordinats').html( 'Координаты курсора: (' + x + '; ' + y + ')' );
    });

//-------------------------------------------------------------------------------------------------------
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

    /*$("#button_save_road").click(function() {
        let road =  "{" + 
        '"X": ' + $("#X").val() + ',' +
        '"Y": ' + $("#Y").val() + ',' +
        '"corner": ' + $("#corner").val() + ',' +
        '"track": "' + $("#track").val() + '",' +
        '"color": "' + $("#color").val() + '",' +
        '"addCard": "' + $("#addCard").val() + '",' +
        '"addTrain": "' + $("#addTrain").val() + '"' +
        "}";
        alert(road);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/map/road", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            a: 1
        }));
    })*/
})
/*
$(document).ready(function(){
    $("#button_save_road").click(function() {
        fetch('/map/road', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                {
                    X : $("#X").val(),
                    Y: $("#Y").val()
                }
            })
        });
    })
})*/
