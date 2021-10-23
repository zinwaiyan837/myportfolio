$(document).ready(function(){

      
    let currentHeight=$(window).height();
    // console.log(currentHeight);

    $(window).scroll(function(){
      
        let currentPosition = $(this).scrollTop();
        // console.log(currentPosition);
        if(currentPosition>=currentHeight-120){
            $(".site-nav").addClass("site-nav-scroll");
          

        }else{
            $(".site-nav").removeClass("site-nav-scroll");
            setActive("home");
          
        
      }
    })

  // change button icon
  $(".navbar-toggler").click(function(){
    let result= $(".navbar-collapse").hasClass("show");
    console.log(result);
    if(result){
      $(".menu-icon").removeClass("fa-times").addClass("fa-bars");
    }else{
      $(".menu-icon").removeClass("fa-bars").addClass("fa-times");
    }

  });

  //set active class
  function setActive(current){
    $(".nav-link").removeClass("current-nav");
      $(`.nav-link[href="#${current}"]`).addClass("current-nav");

   }

   function navScroll(){
     let currentSection = $("section[id]");

    currentSection.waypoint(function(direction) {
        if(direction == "down"){
          let currentSectionId = $(this.element).attr("id");
          // console.log(currentSectionId);
          setActive(currentSectionId);
        }
        
     },{
       offset:'100px'
     });
     currentSection.waypoint(function(direction) {
      if(direction == "up"){
        let currentSectionId = $(this.element).attr("id");
        console.log(currentSectionId);
        setActive(currentSectionId);
      }
      
   },{
    offset:'-150px'
  });
   
     
   
  }
  navScroll();

});








  //progress bar counter up
  $(function(){
      $(".counter").counterUp({
          dealy:10, time:1500,
      });
  });

  //project slide
  new WOW().init();
  $('.project-slide').slick({
      dots: true,
      infinite: true,
      arrows:false,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay:true,
      autoplaySpeed:3000,
      
      responsive: [
      {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
      },
      {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
      },
      {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
      }
          ]
      });
      
      $(window).on("load",function(){
        $(".loader-container").fadeOut(500,function(){
          $(this).remove();
        });
      });
