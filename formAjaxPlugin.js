(function ($) {
            $.fn.update = function (options) {
                var formObj = this.find("form");
                var formUrl = formObj.attr('action');
                var str = formObj.serialize();
                
//                 console.log(this);
                var settings = $.extend({
                    // These are the defaults.
                    destination:this.selector,
                    url: formUrl,
//                    dataType : "json",
                    type: "POST",
                    cache: false,
                    data: str,
                    success: function (response) {




                        if ($.type(response) == 'object')
                        {

                            //It is JSON
                                 console.log(response)
                            console.log("It is  a json type");
                        } else {

                           
                            $(settings.destination).html(response);
                            // is not a JSON type
                            // console.log(response)
                            console.log("It is not a json type");
                        }

                    },
                    // Code to run if the request fails; the raw request and
//                    // status codes are passed to the function
                    error: function (xhr, status, errorThrown) {
                        alert("Sorry, there was a problem!");
                        console.log("Error: " + errorThrown);
                        console.log("Status: " + status);
                        console.dir(xhr);
                    },
                    complete: function (xhr, status) {
                        alert("The request is complete!");
                    }
                }, options);
                $.ajax(settings)



//                alert(formUrl);

//                console.log(str);
//                console.log(settings);



//                return this;
            }
        }(jQuery));