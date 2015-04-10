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
    }

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
    ]

    var projectAll = [
        {
            title : "The title",
            location : "location",
            picture : "images/project_img.jpg",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit minus facilis itaque, similique dolorum? Ipsa quaerat neque aliquid corporis modi alias, totam pariatur aut ab autem ut rem ducimus voluptatibus!",
            projectType : "Hawa",
            ngoName : "ewwwwweeew sdfd",
            category : "smth like",
        },
        {
            title : "The title",
            location : "location",
            picture : "images/project_img.jpg",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit minus facilis itaque, similique dolorum? Ipsa quaerat neque aliquid corporis modi alias, totam pariatur aut ab autem ut rem ducimus voluptatibus!",
            projectType : "Hawa",
            ngoName : "ewwwwweeew sdfd",
            category : "smth like",
        },
        {
            title : "The title",
            location : "location",
            picture : "images/project_img.jpg",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit minus facilis itaque, similique dolorum? Ipsa quaerat neque aliquid corporis modi alias, totam pariatur aut ab autem ut rem ducimus voluptatibus!",
            projectType : "Hawa",
            ngoName : "ewwwwweeew sdfd",
            category : "smth like",
        },{
            title : "The title",
            location : "location",
            picture : "images/project_img.jpg",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit minus facilis itaque, similique dolorum? Ipsa quaerat neque aliquid corporis modi alias, totam pariatur aut ab autem ut rem ducimus voluptatibus!",
            projectType : "Hawa",
            ngoName : "ewwwwweeew sdfd",
            category : "smth like",
        }
    ]

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

    function populateProjects () {
        var source   = $("#projects-template").html();
        var template = Handlebars.compile(source);
        console.log(projectAll);
        var context = {
            projects : projectAll
        };
        var html    = template(context);
        console.log(html);
        $('#projects').html(html);
    }
    populateProjects();
    $('#filter-projects').on('change',"#filter-1",function () {
        // alert("hello");
    })

})(jQuery)