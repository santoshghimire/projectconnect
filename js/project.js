(function ($) {
    // alert("smth");s
    var $body = $('.body');
   

    


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

    $(".submit").on('click',function () {
        var type = $("#filter-1").val();
        var hours = $("#filter-2").val();
        var timeFrame = $("#filter-3").val();
        var location = $("#filter-4").val();
        var org = $("#filter-5").val();
        var workType = $("#filter-6").val();
        
        var url = host+keys.opportunities;
        url += "?type="+type+"&hours="+hours+"&timeFrame="+timeFrame;
        url+="&location="+location+"&org="+org+"&workType="+workType;
        console.log("url "+url);

        $.getJSON( url, function( data ) {
            populateProjects (data);
        });
    })

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

})(jQuery)