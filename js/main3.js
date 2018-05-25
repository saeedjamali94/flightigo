$(document).ready(function () {

    $('#hotel_filter_btn').click(function() {
        $('#hotel_filter_div').animate({
            left: "0px"
        },400);
    });

    $('#more_filter_close').click(function () {
        $('#hotel_filter_div').animate({
            left: "-995px"
        },400);
    });

    $('#compare_load_btn').click(function() {
        $('#compare_hotel_div').animate({
            right: "0px"
        },400);
    });

    $('#compare_div_close').click(function () {
        $('#compare_hotel_div').animate({
            right: "-1100px"
        },400);
    });


    //flight search again box
    $('#hotel_search_again').click(function () {
        var hotel_search_css = $('#hotel-search-again').css('display');
        if(hotel_search_css == "none") {
            $('#hotel-search-again').css('display','block')
        }else if (hotel_search_css == "block") {
            $( "#hotel-search-again" ).fadeOut( 500, function() {
            });
        }

    });

    //price of hotel filteration element----------------------------------------------------------------------
    var regularSliderr = document.querySelector('#hotel-price_filter');
    var price_unitt = wNumb({prefix: 'ریال', decimals: 0});
    var sliderr = noUiSlider.create(regularSliderr, {
        start: [0, 500000],
        connect: true,
        margin: 5,
        tooltips: [price_unitt, price_unitt],
        pips: {
            mode: 'steps',
            density: 5,
        },
        range: {min: 0, max: 500000}
    });

        $.ajax({
            url: "http://localhost/flightigo/api/web/v1/hotels?expand=country0,city0,hotelRooms,hotelFeatureValues,hotelGalleries,packages,hotelFeatures",
            dataType: "text",
            success: function(result) {
                var items = $.parseJSON(result);

                //filteration based on hotel price
                function filterItems(items, city) {
                    return items.items.filter(item => {
                        return item.city >= city[0] && item.city <= city[1]
                    })
                }

                //dynamically filter hotel price by scrolling its slider
                sliderr.on('update', function (values) {
                    let filteredItems = filterItems(items, values);
                    renderItems(filteredItems)
                });

                function renderItems(items) {
                    var all_results = document.querySelector('.all_results');
                    all_results.innerHTML = items.map(item => {
                        return `
                            <div class="flight_result">
                            <div class="compare_selection">
                                <input type="checkbox" class="checkbox2" name="compare"><label class="checkbox2_label">مقایسه</label>
                            </div>
                
                            <div class="row">
                                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12 hotel_avatar">
                                    <img src="themes/theme1/img/hotel.jpg" alt="hotel" height="100%" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-xs-12 col-12 ticket_prop hotel_prop">
                                    <div class="main_ticket_prop">
                                        <p class="hotel_name">نام هتل: ${item.title}</p>
                                        <p class="hotel_address">آدرس هتل: ${item.address}</p>
                                        <button class="btn view_map_btn">مشاهده روی نقشه</button>
                                        <p class="hotel_class">${item.class}</p>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 col-12 reserve_box">
                                    <div class="main_reserve_prop hotel_reserve_box">
                                        <p>شهر</p>
                                        <p class="hotel_price">${item.city}</p>
                                        <a href="http://localhost/flightigo/frontend/web/index.php?r=site%2Froom-select"><button class="reserve_btn" type="button">انتخاب اتاق</button></a>
                                     </div>
                                     </div>
                                 </div>
                             </div>
                    `
                    });
                }
            }
        });



    $('.view_map_btn').click(function () {
        $('#google-map-modal').css('display','block');
    });
    $('#google-map-modal-close').click(function () {
        $('#google-map-modal').css('display','none');
    })

    var menu = $('#main_header');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            menu.addClass("fixed2");

        } else {
            menu.removeClass("fixed2");
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

