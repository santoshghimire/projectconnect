(function ($) {
    // alert("smth");s
    var $body = $('.body');
    var host = "http://192.168.1.124:8000";
    var keys = {
        users: "/users/",
        opportunities: "/opportunities/",
        organizations: "/organizations/",
        volunteers: "/volunteers/",
        application: "/application/"
    };

    var arrayProjectsByType = [],arrayProjectsByTime=[];
    var types = 0, time = 0; //just check variables



    /************/

   /* function init () {
        
    }

    init();*/

    function goToByScroll(id){
          // Remove "link" from the ID
        id = id.replace("link", "");
          // Scroll
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top},
            'slow');
    }

    $('#filter-projects').on('click',function () {
       goToByScroll('filter-projects');
    });

    function populateProjects (arrayProjects) {
        var source   = $("#projects-template").html();
        var template = Handlebars.compile(source);
        // console.log(arrayProjects);
        var context = {
            projects : arrayProjects
        };
        console.log("hello");
        console.log(context);
        var html    = template(context);

        console.log(html);
        $('#projects').html(html);
    }
    populateProjects(projectAll);
})(jQuery)