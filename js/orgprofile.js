(function ($) {
    // alert("smth");s
    var $body = $('.body');
   

    


    /************/

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function init () {
        contents = orgInfo[getParameterByName("orgName")];
        console.log(contents);
        populateProfile(contents);
    }

    init();

    
    function populateProfile (profile) {
        var source   = $("#orgInfo-template").html();
        var template = Handlebars.compile(source);
        // console.log(arrayProjects);
        // var context = 
        // console.log("hello");
        // console.log(profile);
        var html    = template(profile);

        console.log(html);
        $('.orgInfo').html(html);
    }

    Handlebars.registerHelper("inc", function(value, options)
    {
        return parseInt(value) + 1;
    });

})(jQuery)