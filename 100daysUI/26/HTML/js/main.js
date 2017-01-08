(function($) {
  'use strict';
  $(document).ready(function() {
    $("#countdown").countdown("2016/01/01", function(event) {
      $(this).html(
        event.strftime('<li><span>%D</span><p>days</p></li><li><span>%H</span><p>Hours</p></li><li><span>%M</span><p>Minutes</p></li><li><span>%S</span><p>Seconds</p></li>')
      );
    });
  });
})(jQuery);
