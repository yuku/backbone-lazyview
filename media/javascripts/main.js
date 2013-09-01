$(function () {
  $('.padding').css({
    'line-height': ($(window).outerHeight() - $('#output').offset().top) + 'px'
  });
  $('pre').each(function () {
    eval($(this).text());
  });
});
