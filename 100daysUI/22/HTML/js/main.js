(function($) {
  'use strict';
  var target = $('.tabs li');
  $(document).ready(function() {
    target.on('click', function() {
      target.removeClass('active');
      $(this).addClass('active');
    });
  });
})(jQuery);
