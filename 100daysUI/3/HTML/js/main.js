(function($) {
  var target = $('input#number'),
      remove = $('span.remove'),
      add = $('span.add');

  $(document).ready(function() {
    remove.on('click', function() {
      target.val("");
    });
    $('.dialer').on('click', function() {
      target.val(target.val() + $(this).attr("id"));
    });
    $('.call-btn').on('click', function() {
      if(target.val().length > 0) {
        $('.dial-pad').toggleClass('is-calling');
        $('.call-number').html(target.val());
      }
    });
  });

})(jQuery)
