
/* ----- 変数の初期化 ----- */
let untyped = ''; // 未タイプの文字を入れる変数(1)
let typed = ''; // タイプ済みの文字を入れる変数(2)
let score = 0; // スコアを取得するための変数(3)

/* ----- 必要なHTML要素の取得 ----- */
const untypedfield = document.getElementById('untyped'); // 未タイプの文字を取得する定数
const typedfield = document.getElementById('typed'); // タイプ済みの文字を取得する定数
const wrap = document.getElementById('wrap'); // 誤タイプを知らせる背景を設定するための要素を取得
const start = document.getElementById('start'); // 開始をするためのボタン要素の取得
const count = document.getElementById('count'); // タイマーを開始するための要素を取得

/* ----- 複数のテキストを格納する配列 ----- */
const textList = [
  'WE ARE THE BEST SISTERS',
  'Sophia is a witchy pretty girl',
  'Isabella is a baby pretty girl',
  'Hello Takachaya',
  'Isabella is Lisabella',
  'Lisabella or Isabella?',
  'Yasmim is the cousin baby',
  'I love Pets!',
  'Bella Lucca',
  'Arthur is a baby mini boy',
  'Diogo is handsome',
  'Baby Baby Baby',
  'Pien Pien Pien Pien',
  'Let is study English',
  'Lisabella plays Basketball',
  'Sophi Sophi Sophi',
  'Yasmim loves Bella and Lucca',
  'Bella is a meatball',
  'Diogo Mariella Yasmim Isabella Arthur',
  'Black Pink',
  'BTS',
  'Jenni Kim',
  'Lalisa Manoban',
  'Jisoo',
  'Rose',
  'Jenni is the BEST',
  'Lisa is the BEST',
  'Jenni Lisa Jisoo Rose'
];

/* ----- ランダムなテキストを表示 ----- */
const createText = () => {
  /* - 正タイプした文字列をクリア - */
  typed = '';
  typedfield.textContent = typed;

  /* - 配列のインデックス数からランダムな数値を生成する - */
  let random = Math.floor(Math.random()*textList.length);

  /* - 配列からランダムにテキストを取得して画面に表示する - */
  untyped = textList[random];
  untypedfield.textContent = untyped;
};

/* ----- キーの入力の判定 ----- */
const keyPress = e => {
  /* - 誤タイプの場合 - */
  if(e.key !== untyped.substring(0,1)){
    wrap.classList.add('mistyped'); // 誤タイプであると知らせる背景を追加
    /* - 100s後に背景色を元に戻す - */
    setTimeout(()=>{
      wrap.classList.remove('mistyped');
    },100);

    return;
  }

  /* - 正タイプの場合 - */
  score++; //(3)+1
  /* - (1)に(2)の一文字目を入れる - */
  typed += untyped.substring(0,1);
  typedfield.textContent = typed;
  /* - (2)の一文字目を排除(二文字目以降の文字列だけにする) - */
  untyped = untyped.substring(1);
  untypedfield.textContent = untyped;

  /* - テキストがなくなったら新しいテキストを表示 - */
  if(untyped === '')
    createText();
};

/* ----- タイピングスキルランクを判定 ----- */
const rankCheck = score => {
  let text = ''; // テキストを格納するための変数

  /* - スコアに応じて異なるメッセージを変数textに格納する - */
  if(score < 100){
    text = `あなたのランクはCランクゼウス。\nBランクまであと${100 - score}文字です。`;
  } else if(score < 200){
    text = `あなたのランクはBランクゼウス。\nAランクまであと${200 - score}文字です。`;
  } else if(score < 300){
    text = `あなたのランクはAランクゼウス。\nSランクまであと${300 - score}文字です。`;
  } else if(score >= 300){
    text = `あなたのランクはSランクゼウス。\おめでとうございマウス！`;
  }
  /* - スコアに応じて異なるメッセージを変数textに格納する - */
  return `${score}文字打てました！\n${text}\n【OK】リトライ / 【キャンセル】終了`;
};

/* ----- ゲームを終了 ----- */
const gameOver = id => {
  clearInterval(id);
  const result = confirm(rankCheck(score));

  /* - OKボタンをクリックしたらリロードする - */
  if(result == true)
    window.location.reload();
};

/* ----- カウントダウンタイマー ----- */
const timer = () => {
  /* - タイマー部分のHTML要素(p要素)を取得する - */
  let time = count.textContent;

  const id = setInterval(()=>{
    /* - カウントダウンする - */
    time--;
    count.textContent = time;
    /* - カウントが0になったらタイマーを停止する - */
    if(time <= 0){
      gameOver(id);
    }
  },1000);
};

/* ----- ゲームスタート時の処理 ----- */
start.addEventListener('click',()=>{
  /* - カウントダウンタイマーを開始する - */
  timer();
  /* - ランダムなテキストを表示する - */
  createText();
  /* - スタートボタンを非表示にする - */
  start.style.display = 'none';
  /* - キーボードのイベント処理 - */
  document.addEventListener('keypress',keyPress);
});

untypedfield.textContent = 'スタートボタンで開始';