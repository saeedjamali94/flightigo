$(document).ready(function () {

    $('#flight_filter_btn').click(function() {
        $('#flight_filter_div').animate({
            left: "0px"
        },400);
    });



    $('#more_filter_close').click(function () {
        $('#flight_filter_div').animate({
            left: "-995px"
        },400);
    });

    $('#compare_load_btn').click(function() {
        $('#compare_flight_div').animate({
            right: "0px"
        },400);
        $('#compare_hotel_div').animate({
            right: "0px"
        },400);
    });

    $('#compare_div_close').click(function () {
        $('#compare_flight_div').animate({
            right: "-1100px"
        },400);
        $('#compare_hotel_div').animate({
            right: "-1100px"
        },400);
    });

    //price of flight filteration element----------------------------------------------------------------------
    var regularSlider = document.querySelector('#flight-price_filter')
    var price_unit = wNumb({prefix: 'ریال', decimals: 0})
    var slider = noUiSlider.create(regularSlider, {
        // two handles
        start: [100, 500],
        // they are connected
        connect: true,
        // their minimal difference is 5 - this makes sense, because we want the user to always find items
        margin: 5,
        // tooltip for handle 1 and handle 2
        tooltips: [price_unit, price_unit],
        pips: {
            mode: 'steps',
            density: 5,
        },
        // start and end point of the slider - we are going to calculate that later based on a set of items
        range: {min: 100, max: 500}
    });


    //time of flight filteration element ----------------------------------------------------------------------
    var regularSlider2 = document.querySelector('#flight_time_filter')
    var tooltipp = wNumb({prefix: '', decimals: 0})
    var slider2 = noUiSlider.create(regularSlider2, {
        start: [5, 24],
        connect: true,
        margin: .5,
        tooltips: [tooltipp, tooltipp],
        pips: {
            mode: 'steps',
            density: .5,
        },
        range: {min: 5, max: 24}
    });

    //Date of flight filteration element ----------------------------------------------------------------------
    var regularSlider3 = document.querySelector('#flight_date_filter')
    var tooltipp2 = wNumb({prefix: '', decimals: 0})
    var slider3 = noUiSlider.create(regularSlider3, {
        start: [10, 30],
        connect: true,
        margin: 1,
        tooltips: [tooltipp2, tooltipp2],
        pips: {
            mode: 'steps',
            density: 1,
        },
        range: {min: 10, max: 30}
    });


    //ajax request to get json data for flight search result and filter them -------------------------------------
    $.ajax({
        url: "sample_data.json",
        //force to handle it as text
        dataType: "text",
        success: function(result) {
            //data downloaded so we call parseJSON function and pass downloaded data
            var items = $.parseJSON(result);
            //now json variable contains data in json format

            //filteration based on flight price
            function filterItems(items, price) {
                return items.filter(item => {
                    return item.price >= price[0] && item.price <= price[1]
                })
            }

            //filteration based on flight departure time
            function filterItems2(items, departure_time) {
                return items.filter(item => {
                    return item.departure_time >= departure_time[0] && item.departure_time <= departure_time[1]
                })
            }

            //dynamically filter flight price by scrolling its slider
            slider.on('update', function (values) {
                let filteredItems = filterItems(items, values)
                renderItems(filteredItems)
            });
            //dynamically filter flight departure time by scrolling its slider
            slider2.on('update', function (values) {
                let filteredItems2 = filterItems2(items, values)
                renderItems(filteredItems2)
            });

            function renderItems(items) {
                var all_results = document.querySelector('.all_results');
                all_results.innerHTML = items.map(item => {
                    return `
            <div class="flight_result">
                <div class="compare_selection">
                    <input type="checkbox" class="checkbox2" name="compare" value="${item.ID}"><label class="checkbox2_label">مقایسه</label>
                </div>
    
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12 airline_prop">
                                <span class="plane_model">${item.airplane}</span>
                                <div class="main_airline_prop">
                                    <p>${item.airline}</p>
                                    <img src="themes/theme1/img/iranair.png" alt="logo" width="30px" />
                                    <p style="color: #558846">${item.flight_class}</p>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-xs-12 col-12 ticket_prop">
                                <div class="price">
                                    ${item.price} ریال
                                </div>
                                <div class="main_ticket_prop">
                                    <div class="origin_prop">
                                        <p>تهران</p>
                                        <p>${item.departure_time}</p>
                                    </div>
                                    <div class="ticket_icon mirror "><i class="fas fa-plane"></i></div>
                                    <div class="origin_prop">
                                        <p>مشهد</p>
                                        <p>${item.arrival_time}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 col-12 reserve_box">
                                <span class="reservation_mode">${item.kind_of_ticket}</span>
                                <div class="main_reserve_prop">
                                    <button class="reserve_btn" type="button">رزرو</button>
                                    <div class="flight_capacity">
                                        <p>${item.capacity} صندلی خالی</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="more_info dropdown">
                            <button class="more_info_btn" data-toggle="dropdown" type="button"> اطلاعات بیشتر <i class="fas fa-chevron-down"></i></button>
                            <ul class="more_info_div dropdown-menu">
                                <div>
                                    
                                </div>
                            </ul>
                        </div>
            </div>
                `

                });
                var airline_filtering_box = document.querySelector('.checkbox_filter_div');
                airline_filtering_box.innerHTML = items.map(item => {return `
                            <div class="checkbox_container">
                            <label class="check_container"><p class="airline_label">${item.airline}</p>
                                <input type="checkbox" class="airline_check" checked value="${item.airline}">
                                <span class="checkmark"></span>
                            </label>
                         </div>
                    `
                });
                //delete duplicate airline names in airline filter checkbox
                var checkedValue = [];
                var airline = document.getElementsByClassName('airline_check');
                for(var i=0; airline[i]; ++i){
                    if(airline[i].checked){
                        checkedValue.push(airline[i].value);
                    }
                }
                var airlines = checkedValue;
                var unique_airline = [];
                var counting = 0;
                var found = false;

                for ( var i = 0; i < airlines.length; i++) {
                    for (var y = 0; y < unique_airline.length; y++) {
                        if ( airlines[i] == unique_airline[y] ) {
                            found = true;
                        }
                    }
                    counting++;
                    if (counting == 1 && found == false) {
                        unique_airline.push(airlines[i]);
                    }
                    found = false;
                    counting = 0;
                }
                var unique_airline = {name:unique_airline};


                var all_checked_airline =document.getElementsByClassName("airline_label");
                for(var i = 0; i < all_checked_airline.length; i++){
                    all_checked_airline[i].innerText=unique_airline.name[i];
                    var all_checked_airline2 = document.getElementsByClassName("airline_label");
                    for(var j = 0; j < all_checked_airline2.length; j++){
                        if (all_checked_airline2[j].innerText == "undefined") {
                            document.getElementsByClassName('checkbox_container')[j].style.display="none";
                        }
                    }
                }
            }


            $('#compare_load_btn').click(function () {
                $('div.compare_box').append( '<table class="tbl" id="flight_compare_tbl">'
                    + '<thead>'
                    + '<tr>'
                    + '<th>قیمت</th>'
                    + '<th>ساعت پرواز</th>'
                    + '<th>ایرلاین</th>'
                    + '<th>مدل هواپیما</th>'
                    + '<th>ظرفیت خالی</th>'
                    + '<th>رزرو انتخاب</th>'
                    + '</tr>'
                    + '</thead>'
                    + '<tbody>'
                    + '</tbody>'
                    + '</table>'
                );
                var checked = $('input.checkbox2:checked');
                var checked_items = [];
                for (var i=0; i<checked.length; i++){
                    if (checked[i].value != "undefined"){
                        checked_items.push(checked[i].value);
                        //var index = items.map(function(d) { return d['ID']; });
                    }
                }
                for (var i=0; i<items.length; i++){
                    if (items[i].code != checked_items[i]){
                        var price = items[i].price;
                        var departure_time = items[i].departure_time;
                        var airline = items[i].airline;
                        var airplane = items[i].airplane;
                        var capacity = items[i].capacity;

                        $('#flight_compare_tbl').append('<tr><td>' + price
                            +'<td>' + departure_time
                            +'<td>' + airline
                            +'<td>' + airplane
                            +'<td>' + capacity
                            +'<td class="reserve"><button class="reserve_by_compare">رزرو</button>'
                            +'</td></tr>'
                        )
                    }
                }
                var tbl_num = document.getElementsByClassName("tbl");
                tbl_num[1].remove()
            });
            
            $('#compare_div_close').click(function () {
                $('#flight_compare_tbl').remove()
            })


        }
    });


    //flight search again box
    $('#flight_search_again').click(function () {
        var search_css = $('#flight-search-again').css('display');
        if(search_css == "none") {
            $('#flight-search-again').css('display','block')
        }else if (search_css == "block") {
            $( "#flight-search-again" ).fadeOut( 500, function() {
            });
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


    /*$('#flight_filter_div .checkbox_filter_div').click(function () {
        var x = $('#flight_filter_div .checkbox_filter_div .checkbox_container .check_container .airline_label');
        for(var i=0; x.length; i++){
            //var xx = $('#flight_filter_div .checkbox_filter_div .checkbox_container .check_container .airline_label')[i].innerText;
            //var xxx = $('.main_airline_prop p')[0].innerText;
            var xxx =document.getElementsByClassName("flight_result")[0].innerText;
            //alert(xxx)
            //alert(xx)
        }

    })*/



});
