(function($) {
  'use strict';
  var target = $('.media');
  $(document).ready(function() {
    target.on('click', function() {
      target.removeClass('selected');
      $(this).addClass('selected');
    });
  });
})(jQuery);
