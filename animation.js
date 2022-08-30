$(function(){
  $('body').css('background-color', 'rgb(39,16,213)');
  $('.button-more').on('mouseover',function(){
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
      // width: 300,
    },100);
  });
  $('.button-more').on('mouseout',function(){
    $(this).animate({
      opacity: 1.0,
      marginLeft: 0,
      // width: 249,
    },100);
  });
});