(function($) {
  'use strict';
  $(document).ready(function() {
    $.each($('.js-countup'), function () {
      var count = $(this).data('count'),
          options = {separator: ''},
          numAnim = new CountUp(this, 0, count, '', '', options);
      numAnim.start();
    });
  });
})(jQuery);
