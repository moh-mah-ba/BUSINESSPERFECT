$(document).ready(function () {
    
    // Nav Bar
    //Nav Bar Active class
    
   $('header nav .nav-icon ul li').click(function () {
      
       $(this).addClass('active').siblings().removeClass('active');
       
   });
    
    // Nav Bar showing When Scroll
    
    $(window).on('scroll', function () {
        
        if ($(this).scrollTop()){
            
            $('header nav').css({
                
                'background': '#333',
                'borderBottom': '1px solid #fff'
            });
            
        }else{
           
            $('header nav').css({
                
                'background': 'none',
                'borderBottom': ''
            });
        }
    });
    
    // Nav Bar 850px Screen
    
    $('header nav .bars i').on('click', function () {
       
        $('header nav .nav-icon ul').toggleClass('showing');
        
        $(this).toggleClass('fa-bars');
            
        $(this).toggleClass('fa-times');
        
    });
    
    // Background Image 
    
    $("header").height($(window).height());
    
    ///////////////////////  Window Resize
    
    $(window).resize(function () {
        
        // Background Image 
        
        $("header").height($(window).height());
        
        // Header Content
    
    $('header .header-content').css({
        
       'paddingTop': ($('header').height() - $('header .header-content').height()) / 2, 
        
    }); 
        
    });
    
    // Header Content
    
    $('header .header-content').css({
        
       'paddingTop': ($('header').height() - $('header .header-content').height()) / 2, 
        
    }); 
    
    // Go Down CHevron Arrow
    
    $('header .go-next i').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('.own-success').offset().top - 50
        }, 1000);
   

    });
    
    // Fratures Slider
    
   $('.feature-slider').slick({
        
       slidesToShow: 3,
       nextArrow: '.feature-work .ch-lef',
       prevArrow: '.feature-work .ch-rig',
       
    });
    
    // Team Slider
     $('.full-img').slick({ 
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.img-team',
        autoplay:true,
    });
    
    $('.img-team').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.full-img',
        focusOnSelect: true,
        nextArrow: '.team-button .ch-lef-team',
        prevArrow: '.team-button .ch-rig-team'
    });

    $('.opinine').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows:false
    });
    
    // Social Media Bar
    
    $('.Social-media div i').css({
        
        'paddingTop': ($(".Social-media div").height() - $('.Social-media div i').height()) / 2
        
    });
});