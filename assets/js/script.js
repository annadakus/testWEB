$(document).ready(function(){

    	$.ajax({
			  url: "http://swapi.co/api/people/?format=json&page=1",
			  dataType: 'json',
			  success: callback
		});


    function callback(data) {
        data.results.forEach(function(hero){ 
            var element = document.createElement("DIV")
            $(element) 
                .addClass("persona-container") 
                .html( 
                        '<p class="title-name">Name: <span class="name">' + hero.name + '</span></p>' +
                        '<p class="title-height ">Height: <span class="height">' + hero.height + '</span></p>' +
                        '<p class="title-gender">Gender: <span class="gender">' + hero.gender + '</span></p>' +
                        '<label><p class="title-quiz">Do you like this hero: <input type="checkbox" name="'+hero.name+'" value="1"></p></label>'
                    );
			        $('input[type="checkbox"]').each(function() {
				        if (localStorage.getItem($(this).attr('name')) == 'true') {
					            $(this).attr('checked', true);
					    }
					    });
				    $('input[type="checkbox"]').on('click', function() {
				        var isChecked = ($(this).is(':checked')) ? true : false;
				        localStorage.setItem($(this).attr('name'), isChecked);
			    });
            $('.personages').append(element) 
        })
    }
})

