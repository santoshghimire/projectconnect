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
    var organizations = [
        {
            name: "Shakti Samuha",
            mission: "To help establish a progressive society, devoid of trafficking and other kinds of violence against women.",
            description: "Shakti Samuha is known as the first organization of trafficking survivors in the world. Their mission is to ensure women of trafficking survivors and children at risk of trafficking will be organized, aware, empowered and contribute in the campaign against human trafficking. It was started in 1996, when the Indian government rescued around 500 Nepali, Indian and Bengalis women in the red light areas. 15 of the women women united together to convert their tears into the power and to fight against human trafficking in Nepal. They formed Shakti Samuha, and created a mission to organize and empower trafficking survivors. Programming includes: Women Rehabilitation Center, Sindhupalchok Program for Prevention, Protection Rehabilitation and Re-integrations at risk-Emergency Shelter Home in Pokhara Post Trafficking Livelihoods in Nepal",
            category: "Prevention of Human Trafficking",
            location: "Kathmandu",
            contact_number: "01-4478117",
            year_established: null,
            email: "shaktisamuha.nepal@gmail.com",
            website: "http://shaktisamuha.org.np",
            logo: null,
            picture_1: null,
            picture_2: null,
        }
    ];

    var projectType = [
        "teaching",
        "marketing",
        "fund raising",
    ];

    var projectAll = [
        {
            title : "The title1",
            location : "location",
            picture : "images/project_img.jpg",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit minus facilis itaque, similique dolorum? Ipsa quaerat neque aliquid corporis modi alias, totam pariatur aut ab autem ut rem ducimus voluptatibus!",
            projectType : "teaching",
            ngoName : "ewwwwweeew sdfd",
            category : "smth like",
        },
        {
            title : "The title2",
            location : "location",
            picture : "images/project_img.jpg",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit minus facilis itaque, similique dolorum? Ipsa quaerat neque aliquid corporis modi alias, totam pariatur aut ab autem ut rem ducimus voluptatibus!",
            projectType : "marketing",
            ngoName : "ewwwwweeew sdfd",
            category : "smth like",
        },
        {
            title : "The title3",
            location : "location",
            picture : "images/project_img.jpg",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit minus facilis itaque, similique dolorum? Ipsa quaerat neque aliquid corporis modi alias, totam pariatur aut ab autem ut rem ducimus voluptatibus!",
            projectType : "teaching",
            ngoName : "ewwwwweeew sdfd",
            category : "smth like",
        },{
            title : "The title4",
            location : "location",
            picture : "images/project_img.jpg",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit minus facilis itaque, similique dolorum? Ipsa quaerat neque aliquid corporis modi alias, totam pariatur aut ab autem ut rem ducimus voluptatibus!",
            projectType : "fund raising",
            ngoName : "ewwwwweeew sdfd",
            category : "smth like",
        }
    ]


    /************/

    function init () {
        
    }

    init();

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
        if (time===0 && type ===0) {
            arrayProjectsByTime = projectAll;
            arrayProjects = arrayProjectsByType;
        } else if (type !== 0 && time ===0) {
            arrayProjects = arrayProjectsByType;
        } else {
            var projectTime = time;
            arrayProjects = [];
            for (var i = 0; i < projectAll.length; i++) {
                if(projectAll[i].projectType === projectTime) {
                    arrayProjects.push(projectAll[i]);
                }
            };
            arrayProjectsByType = arrayProjects;
        // populateProjects(arrayProjects);
        }
        console.log(arrayProjects);
        console.log("hskfdsfsd");
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

})(jQuery)