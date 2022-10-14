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

window.addEventListener('resize',()=>{
  if(window.outerHeight <= 600){
    $('.menu').css('margin-bottom', 10);
    $('#logo-sp').css('margin-top', 10);
    $('#logo-sp').css('margin-bottom', 10);
    console.log('success');
  } else {
    $('.menu').css('margin-bottom', 30);
    $('#logo-sp').css('margin-top', 10);
    $('#logo-sp').css('margin-bottom', 30);
    console.log('success');
  }
});


