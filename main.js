/* メインビジュアルのメッセージ */
const texts = [
  'World Peace',
  'Paz mundial',
  'Pax mundi',
  'Världsfred',
  'Wereldvrede',
  'La paz mundial',
  'Paix mondiale'
];
const switchText = document.getElementById('switch-text');
setTimeout(() => {
  setInterval(() => {
    let rnd = Math.floor(Math.random() * texts.length);
    switchText.textContent = texts[rnd];
  }, 1500);
},1500);

if($(window).height() <= 465){
  $('.menu').css('margin-bottom', 10);
  $('#logo-sp').css('margin-top', 10);
  $('#logo-sp').css('margin-bottom', 10);
}


