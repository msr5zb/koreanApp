$(document).ready(function(){

    //Start of JS Pre-Functions
        //Fade Content in
        $('#contentContainer').css('opacity','1'); 

        //Function for Smooth Scrolling
        function smoothScroll() {
           $('html, body').animate({
               scrollTop: $("#content").offset().top-50
            }, 1000);
        }

        //Clear Navs
        function clearNavs() {
            $('#aboutMeLi').parent().removeClass("active");
            $('#educationLi').parent().removeClass("active");
            $('#experienceLi').parent().removeClass("active");
            $('#projectsLi').parent().removeClass("active");
            $('#pastWorkLi').parent().removeClass("active");
            $('#pastCourseWorkLi').parent().removeClass("active");

            $('#aboutMe').css("background-image", "url(images/navbg1.jpg");
            $('#education').css("background-image", "url(images/navbg1.jpg");
            $('#experience').css("background-image", "url(images/navbg1.jpg");
            $('#projects').css("background-image", "url(images/navbg1.jpg");
            $('#pastWork').css("background-image", "url(images/navbg1.jpg");
            $('#pastCourseWork').css("background-image", "url(images/navbg1.jpg");
        }

       function load_projectsJS()
       {
          var head= document.getElementsByTagName('head')[0];
          var script= document.createElement('script');
          script.type= 'text/javascript';
          script.src= 'js/projects.js';
          head.appendChild(script);
       }    
       function load_pastWorkJS()
       {
          var head= document.getElementsByTagName('head')[0];
          var script= document.createElement('script');
          script.type= 'text/javascript';
          script.src= 'js/pastWork.js';
          head.appendChild(script);
       }   
       function load_pastCourseWorkJS()
       {
          var head= document.getElementsByTagName('head')[0];
          var script= document.createElement('script');
          script.type= 'text/javascript';
          script.src= 'js/pastCourseWork.js';
          head.appendChild(script);
       }   

        function load_educationJS()
       {
          var head= document.getElementsByTagName('head')[0];
          var script= document.createElement('script');
          script.type= 'text/javascript';
          script.src= 'js/education.js';
          head.appendChild(script);
       }

       function load_sliderSubJS()
       {
          var head= document.getElementsByTagName('head')[0];
          var script= document.createElement('script');
          script.type= 'text/javascript';
          script.src= 'js/jssor.slider.mini.js';
          head.appendChild(script);


          var head= document.getElementsByTagName('head')[0];
          var script= document.createElement('script');
          script.type= 'text/javascript';
          script.src= 'js/sliderSub.js';
          head.appendChild(script);

       }
    //End of JS Pre-Functions
    
    //Start Navigation/Content Handler
    $('#content').html("<h1>Default Home Page</h1>");
    
    $(".navHandler").click(function(){
        var contentSelection = this.id;
        console.log(contentSelection);
        
        clearNavs();
        
        
        //Fade Out
        $("#content").css("opacity", "0.0");
        
        switch(contentSelection){
            case 'aboutMe': case 'aboutMeLi':
                //Set Actives
                $('#aboutMeLi').parent().addClass('active');
                $('#aboutMe').css("background-image", "url(images/navbg2.jpg");
                
                setTimeout(function(){
                    $('#content').html("<h1>Me</h1>");
                }, 600);
                break;
                
            case 'education': case 'educationLi':
                //Set Actives
                $('#educationLi').parent().addClass('active');
                $('#education').css("background-image", "url(images/navbg2.jpg");
                
                setTimeout(function(){
                    //load_educationJS();
                    $('#content').html("<h1>Edu</h1>");
                }, 600);  
                break;

            case 'experience': case 'experienceLi':
                //Set Actives
                $('#experienceLi').parent().addClass('active');
                $('#experience').css("background-image", "url(images/navbg2.jpg");
                
                setTimeout(function(){
                    //load_educationJS();
                    $('#content').html("<h1>Work</h1>");
                }, 600);  
                break;
                
             case 'projects': case 'projectsLi':
                //Set Actives
                $('#projectsLi').parent().addClass('active');
                $('#projects').css("background-image", "url(images/navbg2.jpg");
                
                setTimeout(function(){
                    //load_educationJS();
                    $('#content').html("<h1>Projects</h1>");
                }, 600);  
                break;  
                
            case 'pastCourseWork': case 'pastCourseWorkLi':
                //Set Actives
                $('#pastCourseWorkLi').parent().addClass('active');
                $('#pastCourseWork').css("background-image", "url(images/navbg2.jpg");
                
                setTimeout(function(){
                    //load_educationJS();
                    $('#content').html("<h1>Course</h1>");
                }, 600);  
                break;
            default:      
                setTimeout(function(){
                    $('#content').html("<h1>Something Went Wrong ! :(</h1>");
                }, 600);  
                break;
                
                
        }
        
        
        //Scroll to Center Content and Adjust Content Visibility/View
        smoothScroll();
        setTimeout(function(){$("#content").css("opacity", "1.0");}, 600);
        $('#content').css("height", "auto");
       
    });   
  
    
});

