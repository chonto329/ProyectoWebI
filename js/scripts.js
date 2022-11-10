jQuery('document').ready(function($){

    let menuBtn = $('.icon-menu'),
     menu =  $('.navigation ul');
    menuBtn.click(function(){

    if(menu.hasClass('show')){

        menu.removeClass('show');
        
    }else{

        menu.addClass('show'); 
    }
    });
});