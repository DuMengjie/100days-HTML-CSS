// The goal of this was not to write some fancy Modal system. There are plenty out there. So have some sloppy jQuery.
$(document).ready(function() {

    // Auto fade in
    $('[data-modal]').addClass('modal--open').fadeIn();
    
    // close on click of button
    $('[data-modal-close]').on('click', function() {
        $('[data-modal]').removeClass('modal--open').fadeOut();
    })
    
    // open on click of button
    $('[data-modal-open]').on('click', function(){
        $('.' + $(this).data('modal-open')).addClass('modal--open').fadeIn();
    })
    
    // fade open button in after the modal opens
    $('[data-modal-open]').fadeIn(1000);
  
});