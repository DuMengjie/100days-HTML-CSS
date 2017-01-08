(function($) {
  'use strict';
  $(document).ready(function() {
    $("#countdown").countdown("2016/01/01", function(event) {
      $(this).html(
        event.strftime('<li><span>%D</span><span>Days</span></li><li><span>%H</span><span>Hours</span></li><li><span>%M</span><span>Minutes</span></li>')
      );
    });
  });
})(jQuery);
