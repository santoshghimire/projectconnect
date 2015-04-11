(function ($) {
    // alert("smth");s
    var $body = $('.body');

    var arrayProjectsByType = [],arrayProjectsByTime=[];
    var types = 0, time = 0; //just check variables
   

    /************/

    /*function init () {
        
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

    (function populateTypes () {
            var source   = $("#projectType-template").html();
            var template = Handlebars.compile(source);
            console.log(projectAll);
            var context = {
                options : projectType
            };
            var html    = template(context);
            console.log(html);
            $('#filter-1').html(html);
        })();

    (function populateTimes () {
            var source   = $("#projectTime-template").html();
            var template = Handlebars.compile(source);
            console.log(projectAll);
            var context = {
                options : projectTime
            };
            var html    = template(context);
            console.log(html);
            $('#filter-2').html(html);
        })();

    /*get the projects according to type*/
    function getProjectsByType () {
        if (type===0) {
            arrayProjectsByType = projectAll;
        } else {
            var projectType = type;
            var arrayProjects = [];
            for (var i = 0; i < projectAll.length; i++) {
                if(projectAll[i].projectType === projectType) {
                    arrayProjects.push(projectAll[i]);
                }
            };
            arrayProjectsByType = arrayProjects;
        // populateProjects(arrayProjects);
        }
        getProjectsByTime();
    }

    /*get the projects according to time*/
    function getProjectsByTime () {
        var arrayProjects = null;
        var arrayProjectsFromType = [];
        if (type !==0) {
            arrayProjectsFromType = arrayProjectsByType;
        } else {
            arrayProjectsFromType = projectAll;
        }
        if (time===0 && type ===0) {
            arrayProjectsByTime = projectAll;
            arrayProjects = arrayProjectsByType;
        } else if (type !== 0 && time ===0) {
            arrayProjects = arrayProjectsByType;
        } else {
            var timeVar = time;
            arrayProjects = [];
            for (var i = 0; i < arrayProjectsFromType.length; i++) {
                if(arrayProjectsFromType[i].timeSpanVar === timeVar) {
                    arrayProjects.push(arrayProjectsFromType[i]);
                }
            };
            arrayProjectsByType = arrayProjects;
        // populateProjects(arrayProjects);
        }
        /*console.log(arrayProjects);
        console.log("hskfdsfsd");*/
        populateProjects(arrayProjects);
    }




    $('#filter-projects').on('change',"#filter-1",function () {
        // alert("hello");
        var val = $(this).val();
        // var val = $('#filter-projects option:selected').val()
        if (val === "1") {
            type = 0;
            getProjectsByType();
        } else {
            type = val;
            getProjectsByType();    
        }
        
    })

    $('#filter-projects').on('change',"#filter-2",function () {
        // alert("hello");
        var val = $(this).val();
        // var val = $('#filter-projects option:selected').val()
        if (val === "1") {
            time = 0;
            getProjectsByType();
        } else {
            time = val;
            getProjectsByType();    
        }
        
    })

})(jQuery)