(function($) {

  $(document).ready(function() {
    $('button.submit').on('click', function() {
      $('.card').toggleClass('completed');
    });
  });

})(jQuery)
