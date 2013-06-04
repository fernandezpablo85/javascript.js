(function ($) {
 
  $.fn.js = function(source) {
    // warn: evil.
    eval(source);
  };
 
}(jQuery));
