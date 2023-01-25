$(document).ready(function(){
	// загрузка маршрутов
   $("#button_for_itineraries").click(function() {
   		$('#box_for_itineraries').empty();
   		$('#box_for_itineraries').append('<div>маршрут1</div>');
   });
   //добавление маршрута
   $("#button_for_create_itineraries").click(function() {
   		$('#box_for_create_itineraries').empty();
   		var str =
			"<form>"+
  			"<fieldset>"+
    			"<legend>информация о маршруте</legend>"+
    			"<p><label for=\"from\">откуда</label><input type=\"text\" id=\"from\"></p>"+
    			"<p><label for=\"to\">куда</label><input type=\"text\" id=\"to\"></p>"+
    			"<p><label for=\"power\">сложность</label><input type=\"text\" id=\"power\"></p>"+
    			"<p><label for=\"points\">сколько очков</label><input type=\"text\" id=\"points\"></p>"+
    			"<p><label for=\"for_map\">для какой карты</label><input type=\"text\" id=\"for_map\"></p>"+
			"</fieldset>"+
			"<p><input type=\"submit\" value=\"сохранить\"></p>"+
			"</form>";
   		$('#box_for_create_itineraries').append(str);
   });
   
   // загрузка карты
   $("#button_for_load_map").click(function() {
   		$('#box_for_load_map').empty();
   		var str = '<div><form action=\"/map/upload\" method=\"POST\" enctype=\"multipart/form-data\"><input type=\"file\" name=\"image\" /><button type=\"submit\">Upload</button></form></div>'
   		$('#box_for_load_map').append(str);
   });


   //button_for_config_map
   // настройка карты
   $("#button_for_config_map").click(function() {
   	//c сервака получаем названия карт http://localhost:3333/map/all
	fetch('http://localhost:3333/map/all') // просто вернет список названия карт
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			$('#box_for_config_map').empty();
			for (var i = 0; i < data.length; i++) {
				var str = "<a href=\"/map/configure/" + data[i] + "\">"+ data[i] + "</a></br>";
				$('#box_for_config_map').append(str);
			}
		});		
   });/*
   // создание игры
   $("#button_for_create_game").click(function() {
   		$('#box_for_itineraries').empty();
   		$('#box_for_itineraries').append('<div>маршрут1</div>');
   });*/
});



 
  
