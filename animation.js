$(function(){
  /*-------------------------------- アクセス時の背景色の動き --------------------------------*/
  $('body').css('background-color', 'rgb(39,16,213)');
  /*-------------------------------- ボタンアニメーション --------------------------------*/
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
  $('.button-submit').on('mouseover',function(){
    $(this).animate({
      width: 300,
    });
  });
  $('.button-submit').on('mouseout',function(){
    $(this).animate({
      width: 240,
    });
  });
  /*-------------------------------- プロダクトページのメインビジュアルアニメーション --------------------------------*/
  $('#product-main').css('width', '100%');
  setTimeout(function(){
    $('#product-title').css('opacity', 1);
  },500);

  /*-------------------------------- ミッションページのメインビジュアルアニメーション --------------------------------*/
  $('#mission-main').css('width', '100%');
  setTimeout(function(){
    $('#mission-title').css('opacity', 1);
  },500);
});