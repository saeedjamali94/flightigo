$(document).ready(function () {
    //ajax request to get data for flight search -------------------------------------
    $.ajax({
        url: "http://localhost/flightigo/api/web/v1/cities?expand=airports,country,hotels",
        dataType: "text",
        method: 'GET',
        success: function(result) {
            var items = $.parseJSON(result);
            for (var i=0; i<items.items.length; i++){
                for(var j=0; j<items.items[i].airports.length; j++){
                    $('#flight_origin_ajax').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                    $('#flight_destin_ajax').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                    $('#flight_origin_ajax1').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                    $('#flight_destin_ajax1').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                    $('#flight_origin_ajax2').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                    $('#flight_destin_ajax2').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                    $('#flight_origin_ajax3').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                    $('#flight_destin_ajax3').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                    $('#flight_origin_ajax4').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                    $('#flight_destin_ajax4').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                    $('#flight_origin_ajax5').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                    $('#flight_destin_ajax5').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                    $('#flight_origin_ajax6').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                    $('#flight_destin_ajax6').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                    $('#flight_origin_ajax7').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                    $('#flight_destin_ajax7').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                    $('#flight_origin_ajax8').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                    $('#flight_destin_ajax8').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                    $('#flight_origin_ajax9').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                    $('#flight_destin_ajax9').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fab fa-avianex" style="color: #0d5798"></i> ' + items.items[i].airports[j].title + '</a>' + '\n' );
                }
            }
        }
    });

    //ajax request to get data for hotel search -------------------------------------
    $.ajax({
        url: "http://localhost/flightigo/api/web/v1/cities?expand=airports,country,hotels",
        dataType: "text",
        method: 'GET',
        success: function(result) {
            var items = $.parseJSON(result);
            for (var i=0; i<items.items.length; i++){
                for(var j=0; j<items.items[i].hotels.length; j++) {
                    $('#hotel_destin_ajax').append('<a class="list" href="#"> <i class="fas fa-map-marker-alt" style="color: #0d5798"></i> ' + items.items[i].title + ' - ' + items.items[i].country_title + ' <i class="fas fa-building" style="color: #0d5798"></i> ' + items.items[i].hotels[j].title + '</a>' + '\n');
                }
            }
        }
    });

    /*   change background dynamically   */
    /*var currentBackground = 0;
    var backgrounds = [];
    backgrounds[0] = '../img/pic1.jpg';
    backgrounds[1] = '../img/pic2.jpg';
    backgrounds[2] = '../img/pic3.jpg';

    function changeBackground() {
        currentBackground++;
        if(currentBackground > 2) currentBackground = 0;

        $('.coverPhotoBackground').fadeOut(2000,function() {
            $('.coverPhotoBackground').css({
                'background-image' : "url('" + backgrounds[currentBackground] + "')"
            });
            $('.coverPhotoBackground').fadeIn(2000);
        });
        setTimeout(changeBackground, 10000);
    }

    setTimeout(changeBackground, 10000);*/
    /*   change background dynamically   */



    $('.ajax_input_box a.list').click(function () {
        $('.ajax_input_box').css('display','none')
    });


    $('#flight_origin_input').click(function () {
        $('#flight_origin_ajax').css('display','block');
        //close this box when clicking outside of that
        var mouse_is_inside = false;
        $('#flight_origin_ajax').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_origin_ajax').css('display','none');
        });
    });
    //print selected flight origin city in input box
    $('#flight_origin_ajax a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_origin_input').val(input_val);
    });

    $('#flight_destin_input').click(function () {
        $('#flight_destin_ajax').css('display','block');
        //close this box when clicking outside of that
        var mouse_is_inside = false;
        $('#flight_destin_ajax').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_destin_ajax').css('display','none');
        });
    });
    //print selected flight destination city in input box
    $('#flight_destin_ajax a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_destin_input').val(input_val);
    });


    $('#hotel_destin_input').click(function () {
        $('#hotel_destin_ajax').css('display','block');
        //close this box when clicking outside of that
        var mouse_is_inside = false;
        $('#hotel_destin_ajax').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#hotel_destin_ajax').css('display','none');
        });
    });
    //print selected hotel destination city in input box
    $('#hotel_destin_ajax a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#hotel_destin_input').val(input_val);
    });


    $('#flight-nav').click(function () {
        $('#flight-nav').addClass("activated");
        $('#hotel-nav').removeClass("activated");
        $('#flightbox> form.searchform').addClass("active");
        $('#hotelbox> form.searchform').removeClass("active");
    });


    //flight origin input live search
    $('#flight_origin_ajax a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_origin_input').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_origin_ajax a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });


    //flight destination input live search
    $('#flight_destin_ajax a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_destin_input').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_destin_ajax a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });


    //hotel destination input live search
    $('#hotel_destin_ajax a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#hotel_destin_input').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#hotel_destin_ajax a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });




    $('#hotel-nav').click(function () {
        $('#hotel-nav').addClass("activated");
        $('#flight-nav').removeClass("activated");
        $('#hotelbox> form.searchform').addClass("active");
        $('#flightbox> form.searchform').removeClass("active")
    });


    $('#flight-nav2').click(function () {
        $('#flight-nav2').addClass("activated2");
        $('#hotel-nav2').removeClass("activated2");
        $('#flightbox> form.searchform').addClass("active");
        $('#hotelbox> form.searchform').removeClass("active");
    });

    $('#hotel-nav2').click(function () {
        $('#hotel-nav2').addClass("activated2");
        $('#flight-nav2').removeClass("activated2");
        $('#hotelbox> form.searchform').addClass("active");
        $('#flightbox> form.searchform').removeClass("active")
    });
	


	/*---------------owl carousel function --------------------------*/
    $('.co_workers_carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:7,
                nav:true,
                loop:false
            }
        }
    });

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:5,
				nav:true,
				loop:false
			}
		}
	});
	/*---------------owl carousel function --------------------------*/



	
	/*---------------persian calendar --------------------------*/
	var objCal1 = new AMIB.persianCalendar( 'pcal1',
		{ extraInputID: "extra", extraInputFormat: "YYYYMMDD" }
	);
	var objCal1 = new AMIB.persianCalendar( 'pcal2',
		{ extraInputID: "extra", extraInputFormat: "YYYYMMDD" }
	);
	var objCal1 = new AMIB.persianCalendar( 'pcal3',
		{ extraInputID: "extra", extraInputFormat: "YYYYMMDD" }
	);
	var objCal1 = new AMIB.persianCalendar( 'pcal4',
		{ extraInputID: "extra", extraInputFormat: "YYYYMMDD" }
	);
    var objCal1 = new AMIB.persianCalendar( 'pcal5',
        { extraInputID: "extra", extraInputFormat: "YYYYMMDD" }
    );
    var objCal1 = new AMIB.persianCalendar( 'pcal6',
        { extraInputID: "extra", extraInputFormat: "YYYYMMDD" }
    );
    var objCal1 = new AMIB.persianCalendar( 'pcal7',
        { extraInputID: "extra", extraInputFormat: "YYYYMMDD" }
    );
    var objCal1 = new AMIB.persianCalendar( 'pcal8',
        { extraInputID: "extra", extraInputFormat: "YYYYMMDD" }
    );
    var objCal1 = new AMIB.persianCalendar( 'pcal9',
        { extraInputID: "extra", extraInputFormat: "YYYYMMDD" }
    );
    var objCal1 = new AMIB.persianCalendar( 'pcal10',
        { extraInputID: "extra", extraInputFormat: "YYYYMMDD" }
    );
    var objCal1 = new AMIB.persianCalendar( 'pcal11',
        { extraInputID: "extra", extraInputFormat: "YYYYMMDD" }
    );
    var objCal1 = new AMIB.persianCalendar( 'pcal12',
        { extraInputID: "extra", extraInputFormat: "YYYYMMDD" }
    );
    var objCal1 = new AMIB.persianCalendar( 'pcal13',
        { extraInputID: "extra", extraInputFormat: "YYYYMMDD" }
    );
	/*---------------persian calendar --------------------------*/





    /*----- diaplay adult and chidld selectors based on room numbers ----*/
    $('#room_num_select').click(function () {
        $('#add_room_box_btn').css('display','block');
        $('#minus_room_box_btn').css('display','block');
        $('.btn_caption').css('display','block');
        var room_num = $( "#room_num_select option:selected" ).val();
        if (room_num == 1 ) {
            $('#room1').css('display','block');
            $('#room2').css('display','none');
            $('#room3').css('display','none');
            $('#room4').css('display','none');
            $('#room5').css('display','none');
        }else if (room_num == 2) {
            $('#room1').css('display','block');
            $('#room2').css('display','block');
            $('#room3').css('display','none');
            $('#room4').css('display','none');
            $('#room5').css('display','none');
        }else if (room_num == 3) {
            $('#room1').css('display','block');
            $('#room2').css('display','block');
            $('#room3').css('display','block');
            $('#room4').css('display','none');
            $('#room5').css('display','none');
        }else if (room_num == 4) {
            $('#room1').css('display','block');
            $('#room2').css('display','block');
            $('#room3').css('display','block');
            $('#room4').css('display','block');
            $('#room5').css('display','none');
        }else if (room_num == 5) {
            $('#room1').css('display','block');
            $('#room2').css('display','block');
            $('#room3').css('display','block');
            $('#room4').css('display','block');
            $('#room5').css('display','block');
        }

    });

    $('#add_room_box_btn').click(function () {
        var room_numm = $("#room_num_select option:selected").val();
        var num = parseInt(room_numm);
        var numplus = num+1;
        var room_num= "#room" + numplus;
        $(room_num).css('display','block');
        var room_changed_num =numplus;
        var room_numm = $('#room_num_select').val(room_changed_num);
        if ((room_changed_num == 6)) {
            $('#room_num_select').val(5);
            var modal = document.getElementById('max-room-modal');
            $('#max-room-modal').css('display','block');
            $('#max-room-modal-close').click(function () {
                modal.style.display = "none";
            })
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
    });


    $('#minus_room_box_btn').click(function () {
        var room_numm = $("#room_num_select option:selected").val();
        var num = parseInt(room_numm);
        var room_num= "#room" + num;
        $(room_num).css('display','none');
        var x = $("#room_num_select option:selected").val(num-1);
        if (x == 1) {
            var y= $("#room_num_select option:selected").val(1);
        }
    });
    /*----- diaplay adult and chidld selectors based on room numbers ----*/




    /*-- number of adult and child for each hotel room selection functions ------*/

    //room1
	$('#adult_add1').click(function () {
        var numtxt = $('#adult_status1').text();
		var num = parseInt(numtxt)
		var numplus = num+1;
		$('#adult_status1').html(numplus);
    });
	$('#adult_minus1').click(function () {
        var numtxt = $('#adult_status1').text();
		var num = parseInt(numtxt)
		var numminus = num-1;
		if (numminus < 0) {
			$('#people-num-modal').css('display','block');
			$('#people-num-modal-close').click(function () {
                modal.style.display = "none";
            })
            var modal = document.getElementById('people-num-modal');
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
		}else if( numminus >= 0 ) {
			$('#adult_status1').html(numminus);
		}
    });

    $('#child_add1').click(function () {
        var numtxt = $('#child_status1').text();
        var num = parseInt(numtxt)
        var numplus = num+1;
        $('#child_status1').html(numplus);
    });
    $('#child_minus1').click(function () {
        var numtxt = $('#child_status1').text();
        var num = parseInt(numtxt)
        var numminus = num-1;
        if (numminus < 0) {
            $('#people-num-modal').css('display','block');
            $('#people-num-modal-close').click(function () {
                modal.style.display = "none";
            })
            var modal = document.getElementById('people-num-modal');
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }else if( numminus >= 0 ) {
            $('#child_status1').html(numminus);
        }
    });

    //room2
    $('#adult_add2').click(function () {
        var numtxt = $('#adult_status2').text();
        var num = parseInt(numtxt)
        var numplus = num+1;
        $('#adult_status2').html(numplus);
    });
    $('#adult_minus2').click(function () {
        var numtxt = $('#adult_status2').text();
        var num = parseInt(numtxt)
        var numminus = num-1;
        if (numminus < 0) {
            $('#people-num-modal').css('display','block');
            $('#people-num-modal-close').click(function () {
                modal.style.display = "none";
            })
            var modal = document.getElementById('people-num-modal');
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }else if( numminus >= 0 ) {
            $('#adult_status2').html(numminus);
        }
    });

    $('#child_add2').click(function () {
        var numtxt = $('#child_status2').text();
        var num = parseInt(numtxt)
        var numplus = num+1;
        $('#child_status2').html(numplus);
    });
    $('#child_minus2').click(function () {
        var numtxt = $('#child_status2').text();
        var num = parseInt(numtxt)
        var numminus = num-1;
        if (numminus < 0) {
            $('#people-num-modal').css('display','block');
            $('#people-num-modal-close').click(function () {
                modal.style.display = "none";
            })
            var modal = document.getElementById('people-num-modal');
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }else if( numminus >= 0 ) {
            $('#child_status2').html(numminus);
        }
    });

    //room3
    $('#adult_add3').click(function () {
        var numtxt = $('#adult_status3').text();
        var num = parseInt(numtxt)
        var numplus = num+1;
        $('#adult_status3').html(numplus);
    });
    $('#adult_minus3').click(function () {
        var numtxt = $('#adult_status3').text();
        var num = parseInt(numtxt)
        var numminus = num-1;
        if (numminus < 0) {
            $('#people-num-modal').css('display','block');
            $('#people-num-modal-close').click(function () {
                modal.style.display = "none";
            })
            var modal = document.getElementById('people-num-modal');
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }else if( numminus >= 0 ) {
            $('#adult_status3').html(numminus);
        }
    });

    $('#child_add3').click(function () {
        var numtxt = $('#child_status3').text();
        var num = parseInt(numtxt)
        var numplus = num+1;
        $('#child_status3').html(numplus);
    });
    $('#child_minus3').click(function () {
        var numtxt = $('#child_status3').text();
        var num = parseInt(numtxt)
        var numminus = num-1;
        if (numminus < 0) {
            $('#people-num-modal').css('display','block');
            $('#people-num-modal-close').click(function () {
                modal.style.display = "none";
            })
            var modal = document.getElementById('people-num-modal');
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }else if( numminus >= 0 ) {
            $('#child_status3').html(numminus);
        }
    });

    //room4
    $('#adult_add4').click(function () {
        var numtxt = $('#adult_status4').text();
        var num = parseInt(numtxt)
        var numplus = num+1;
        $('#adult_status4').html(numplus);
    });
    $('#adult_minus4').click(function () {
        var numtxt = $('#adult_status4').text();
        var num = parseInt(numtxt)
        var numminus = num-1;
        if (numminus < 0) {
            $('#people-num-modal').css('display','block');
            $('#people-num-modal-close').click(function () {
                modal.style.display = "none";
            })
            var modal = document.getElementById('people-num-modal');
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }else if( numminus >= 0 ) {
            $('#adult_status4').html(numminus);
        }
    });

    $('#child_add4').click(function () {
        var numtxt = $('#child_status4').text();
        var num = parseInt(numtxt)
        var numplus = num+1;
        $('#child_status4').html(numplus);
    });
    $('#child_minus4').click(function () {
        var numtxt = $('#child_status4').text();
        var num = parseInt(numtxt)
        var numminus = num-1;
        if (numminus < 0) {
            $('#people-num-modal').css('display','block');
            $('#people-num-modal-close').click(function () {
                modal.style.display = "none";
            })
            var modal = document.getElementById('people-num-modal');
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }else if( numminus >= 0 ) {
            $('#child_status4').html(numminus);
        }
    });

    //room5
    $('#adult_add5').click(function () {
        var numtxt = $('#adult_status5').text();
        var num = parseInt(numtxt)
        var numplus = num+1;
        $('#adult_status5').html(numplus);
    });
    $('#adult_minus5').click(function () {
        var numtxt = $('#adult_status5').text();
        var num = parseInt(numtxt)
        var numminus = num-1;
        if (numminus < 0) {
            $('#people-num-modal').css('display','block');
            $('#people-num-modal-close').click(function () {
                modal.style.display = "none";
            })
            var modal = document.getElementById('people-num-modal');
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }else if( numminus >= 0 ) {
            $('#adult_status5').html(numminus);
        }
    });

    $('#child_add5').click(function () {
        var numtxt = $('#child_status5').text();
        var num = parseInt(numtxt)
        var numplus = num+1;
        $('#child_status5').html(numplus);
    });
    $('#child_minus5').click(function () {
        var numtxt = $('#child_status5').text();
        var num = parseInt(numtxt)
        var numminus = num-1;
        if (numminus < 0) {
            $('#people-num-modal').css('display','block');
            $('#people-num-modal-close').click(function () {
                modal.style.display = "none";
            })
            var modal = document.getElementById('people-num-modal');
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }else if( numminus >= 0 ) {
            $('#child_status5').html(numminus);
        }
    });
    /*-- number of adult and child for each hotel room selection functions ------*/




    /*-- mobile menu open and close functions ------*/
	$('.hamburger-box').click(function () {
		//$('#mobile-menu').css('display','block');
        $('#mobile-menu').slideDown();
    });
    $('#menu-close').click(function () {
        //$('#mobile-menu').css('display','none');
        $('#mobile-menu').slideUp();
    });
    /*-- mobile menu open and close functions ------*/



    /*-- two way or one way flight selection functions ------*/
    $('#two-way-radio').click(function () {
		$('#return-box').css('display','block');
        $('.col-separator').css('display','block');
    });

    $('#one-way-radio').click(function () {
        $('#return-box').css('display','none');
        $('.col-separator').css('display','none');
    });

    $('#multi-way-radio').click(function () {
        var modal = document.getElementById('multi-way-modal');
        $('#multi-way-modal').css('display','block');
        $('#multi-way-modal-close').click(function () {
            modal.style.display = "none";
        });
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });
    /*-- two way or one way flight selection functions ------*/


    //add or delete routes in multi-way modal
    $('#add_route_btn').click(function () {
        var route3disp = $('#route3').css('display');
        var route4disp = $('#route4').css('display');
        var route5disp = $('#route5').css('display');
        var route6disp = $('#route6').css('display');
        var route7disp = $('#route7').css('display');
        var route8disp = $('#route8').css('display');
        var route9disp = $('#route9').css('display');
        if(route3disp == "none") {
            $('#route3').css('display','block');
        }else if ((route3disp == "block") && (route4disp == "none")) {
            $('#route4').css('display','block');
        }else if ((route4disp == "block") && (route5disp == "none")) {
            $('#route5').css('display','block');
        }else if ((route5disp == "block") && (route6disp == "none")) {
            $('#route6').css('display','block');
        }else if ((route6disp == "block") && (route7disp == "none")) {
            $('#route7').css('display','block');
        }else if ((route7disp == "block") && (route8disp == "none")) {
            $('#route8').css('display','block');
        }else if ((route8disp == "block") && (route9disp == "none")) {
            $('#route9').css('display','block');
        }

    });

    $('#minus_route_btn').click(function () {
        var route3disp = $('#route3').css('display');
        var route4disp = $('#route4').css('display');
        var route5disp = $('#route5').css('display');
        var route6disp = $('#route6').css('display');
        var route7disp = $('#route7').css('display');
        var route8disp = $('#route8').css('display');
        var route9disp = $('#route9').css('display');
        if(route9disp == "block") {
            $('#route9').css('display','none');
        }else if ((route9disp == "none") && (route8disp == "block")) {
            $('#route8').css('display','none');
        }else if ((route8disp == "none") && (route7disp == "block")) {
            $('#route7').css('display','none');
        }else if ((route7disp == "none") && (route6disp == "block")) {
            $('#route6').css('display','none');
        }else if ((route6disp == "none") && (route5disp == "block")) {
            $('#route5').css('display','none');
        }else if ((route5disp == "none") && (route4disp == "block")) {
            $('#route4').css('display','none');
        }else if ((route4disp == "none") && (route3disp == "block")) {
            $('#route3').css('display','none');
        }
    });

    $('#minus_route_btn2').click(function () {
        var route3disp = $('#route3').css('display');
        var route4disp = $('#route4').css('display');
        var route5disp = $('#route5').css('display');
        var route6disp = $('#route6').css('display');
        var route7disp = $('#route7').css('display');
        var route8disp = $('#route8').css('display');
        var route9disp = $('#route9').css('display');
        if(route9disp == "block") {
            $('#route9').css('display','none');
        }else if ((route9disp == "none") && (route8disp == "block")) {
            $('#route8').css('display','none');
        }else if ((route8disp == "none") && (route7disp == "block")) {
            $('#route7').css('display','none');
        }else if ((route7disp == "none") && (route6disp == "block")) {
            $('#route6').css('display','none');
        }else if ((route6disp == "none") && (route5disp == "block")) {
            $('#route5').css('display','none');
        }else if ((route5disp == "none") && (route4disp == "block")) {
            $('#route4').css('display','none');
        }else if ((route4disp == "none") && (route3disp == "block")) {
            $('#route3').css('display','none');
        }
    });

    $('#add_route_btn2').click(function () {
        var route3disp = $('#route3').css('display');
        var route4disp = $('#route4').css('display');
        var route5disp = $('#route5').css('display');
        var route6disp = $('#route6').css('display');
        var route7disp = $('#route7').css('display');
        var route8disp = $('#route8').css('display');
        var route9disp = $('#route9').css('display');
        if(route3disp == "none") {
            $('#route3').css('display','block');
        }else if ((route3disp == "block") && (route4disp == "none")) {
            $('#route4').css('display','block');
        }else if ((route4disp == "block") && (route5disp == "none")) {
            $('#route5').css('display','block');
        }else if ((route5disp == "block") && (route6disp == "none")) {
            $('#route6').css('display','block');
        }else if ((route6disp == "block") && (route7disp == "none")) {
            $('#route7').css('display','block');
        }else if ((route7disp == "block") && (route8disp == "none")) {
            $('#route8').css('display','block');
        }else if ((route8disp == "block") && (route9disp == "none")) {
            $('#route9').css('display','block');
        }
    });

    $('#language').click(function () {
        var x= $('#language_select').css('display');
        if(x == "block"){
            $('#language_select').css('display','none');
        }else if (x == "none"){
            $('#language_select').css('display','block');
        }
    });


    var menu = $('.main_head');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            menu.addClass("fixed");

        } else {
            menu.removeClass("fixed");
        }
    });

    //multi way flight 1 ajax search
    $('#flight_origin_input1').click(function () {
        $('#flight_origin_ajax1').css('display','block');
        var mouse_is_inside = false;
        $('#flight_origin_ajax1').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_origin_ajax1').css('display','none');
        });
    });
    $('#flight_origin_ajax1 a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_origin_input1').val(input_val);
    });
    $('#flight_destin_input1').click(function () {
        $('#flight_destin_ajax1').css('display','block');
        //close this box when clicking outside of that
        var mouse_is_inside = false;
        $('#flight_destin_ajax1').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_destin_ajax1').css('display','none');
        });
    });
    $('#flight_destin_ajax1 a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_destin_input1').val(input_val);
    });
    $('#flight_origin_ajax1 a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_origin_input1').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_origin_ajax1 a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    $('#flight_destin_ajax1 a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_destin_input1').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_destin_ajax1 a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });


    //multi way flight 2 ajax search
    $('#flight_origin_input2').click(function () {
        $('#flight_origin_ajax2').css('display','block');
        var mouse_is_inside = false;
        $('#flight_origin_ajax2').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_origin_ajax2').css('display','none');
        });
    });
    $('#flight_origin_ajax2 a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_origin_input2').val(input_val);
    });
    $('#flight_destin_input2').click(function () {
        $('#flight_destin_ajax2').css('display','block');
        //close this box when clicking outside of that
        var mouse_is_inside = false;
        $('#flight_destin_ajax2').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_destin_ajax2').css('display','none');
        });
    });
    $('#flight_destin_ajax2 a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_destin_input2').val(input_val);
    });
    $('#flight_origin_ajax2 a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_origin_input2').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_origin_ajax2 a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    $('#flight_destin_ajax2 a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_destin_input2').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_destin_ajax2 a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });


    //multi way flight 3 ajax search
    $('#flight_origin_input3').click(function () {
        $('#flight_origin_ajax3').css('display','block');
        var mouse_is_inside = false;
        $('#flight_origin_ajax3').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_origin_ajax3').css('display','none');
        });
    });
    $('#flight_origin_ajax3 a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_origin_input3').val(input_val);
    });
    $('#flight_destin_input3').click(function () {
        $('#flight_destin_ajax3').css('display','block');
        //close this box when clicking outside of that
        var mouse_is_inside = false;
        $('#flight_destin_ajax3').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_destin_ajax3').css('display','none');
        });
    });
    $('#flight_destin_ajax3 a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_destin_input3').val(input_val);
    });
    $('#flight_origin_ajax3 a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_origin_input3').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_origin_ajax3 a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    $('#flight_destin_ajax3 a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_destin_input3').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_destin_ajax3 a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });


    //multi way flight 4 ajax search
    $('#flight_origin_input4').click(function () {
        $('#flight_origin_ajax4').css('display','block');
        var mouse_is_inside = false;
        $('#flight_origin_ajax4').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_origin_ajax4').css('display','none');
        });
    });
    $('#flight_origin_ajax4 a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_origin_input4').val(input_val);
    });
    $('#flight_destin_input4').click(function () {
        $('#flight_destin_ajax4').css('display','block');
        //close this box when clicking outside of that
        var mouse_is_inside = false;
        $('#flight_destin_ajax4').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_destin_ajax4').css('display','none');
        });
    });
    $('#flight_destin_ajax4 a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_destin_input4').val(input_val);
    });
    $('#flight_origin_ajax4 a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_origin_input4').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_origin_ajax4 a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    $('#flight_destin_ajax4 a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_destin_input4').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_destin_ajax4 a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });


    //multi way flight 5 ajax search
    $('#flight_origin_input5').click(function () {
        $('#flight_origin_ajax5').css('display','block');
        var mouse_is_inside = false;
        $('#flight_origin_ajax5').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_origin_ajax5').css('display','none');
        });
    });
    $('#flight_origin_ajax5 a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_origin_input5').val(input_val);
    });
    $('#flight_destin_input5').click(function () {
        $('#flight_destin_ajax5').css('display','block');
        //close this box when clicking outside of that
        var mouse_is_inside = false;
        $('#flight_destin_ajax5').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_destin_ajax5').css('display','none');
        });
    });
    $('#flight_destin_ajax5 a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_destin_input5').val(input_val);
    });
    $('#flight_origin_ajax5 a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_origin_input5').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_origin_ajax5 a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    $('#flight_destin_ajax5 a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_destin_input5').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_destin_ajax5 a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });


    //multi way flight 6 ajax search
    $('#flight_origin_input6').click(function () {
        $('#flight_origin_ajax6').css('display','block');
        var mouse_is_inside = false;
        $('#flight_origin_ajax6').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_origin_ajax6').css('display','none');
        });
    });
    $('#flight_origin_ajax6 a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_origin_input6').val(input_val);
    });
    $('#flight_destin_input6').click(function () {
        $('#flight_destin_ajax6').css('display','block');
        //close this box when clicking outside of that
        var mouse_is_inside = false;
        $('#flight_destin_ajax6').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_destin_ajax6').css('display','none');
        });
    });
    $('#flight_destin_ajax6 a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_destin_input6').val(input_val);
    });
    $('#flight_origin_ajax6 a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_origin_input6').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_origin_ajax6 a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    $('#flight_destin_ajax6 a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_destin_input6').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_destin_ajax6 a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });


    //multi way flight 7 ajax search
    $('#flight_origin_input7').click(function () {
        $('#flight_origin_ajax7').css('display','block');
        var mouse_is_inside = false;
        $('#flight_origin_ajax7').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_origin_ajax7').css('display','none');
        });
    });
    $('#flight_origin_ajax7 a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_origin_input7').val(input_val);
    });
    $('#flight_destin_input7').click(function () {
        $('#flight_destin_ajax7').css('display','block');
        //close this box when clicking outside of that
        var mouse_is_inside = false;
        $('#flight_destin_ajax7').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_destin_ajax7').css('display','none');
        });
    });
    $('#flight_destin_ajax7 a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_destin_input7').val(input_val);
    });
    $('#flight_origin_ajax7 a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_origin_input7').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_origin_ajax7 a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    $('#flight_destin_ajax7 a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_destin_input7').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_destin_ajax7 a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });


    //multi way flight 8 ajax search
    $('#flight_origin_input8').click(function () {
        $('#flight_origin_ajax8').css('display','block');
        var mouse_is_inside = false;
        $('#flight_origin_ajax8').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_origin_ajax8').css('display','none');
        });
    });
    $('#flight_origin_ajax8 a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_origin_input8').val(input_val);
    });
    $('#flight_destin_input8').click(function () {
        $('#flight_destin_ajax8').css('display','block');
        //close this box when clicking outside of that
        var mouse_is_inside = false;
        $('#flight_destin_ajax8').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_destin_ajax8').css('display','none');
        });
    });
    $('#flight_destin_ajax8 a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_destin_input8').val(input_val);
    });
    $('#flight_origin_ajax8 a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_origin_input8').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_origin_ajax8 a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    $('#flight_destin_ajax8 a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_destin_input8').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_destin_ajax8 a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });


    //multi way flight 9 ajax search
    $('#flight_origin_input9').click(function () {
        $('#flight_origin_ajax9').css('display','block');
        var mouse_is_inside = false;
        $('#flight_origin_ajax9').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_origin_ajax9').css('display','none');
        });
    });
    $('#flight_origin_ajax9 a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_origin_input9').val(input_val);
    });
    $('#flight_destin_input9').click(function () {
        $('#flight_destin_ajax9').css('display','block');
        //close this box when clicking outside of that
        var mouse_is_inside = false;
        $('#flight_destin_ajax9').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('#flight_destin_ajax9').css('display','none');
        });
    });
    $('#flight_destin_ajax9 a.list').click(function (e) {
        var input_val = $(e.target).text();
        $('#flight_destin_input1').val(input_val);
    });
    $('#flight_origin_ajax9 a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_origin_input9').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_origin_ajax9 a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    $('#flight_destin_ajax9 a.list').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('#flight_destin_input9').on('keyup', function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#flight_destin_ajax9 a.list').each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });



});
