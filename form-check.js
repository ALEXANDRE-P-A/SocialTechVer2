/*-------------------------------- AjaxでSTATIC FORMSにデータを送信 --------------------------------*/
$(function(){
  $('#submit').on('click',function(event){
    event.preventDefault(); //formタグによる送信を拒否
    let result = inputCheck(); //入力チェックをした結果、エラーがあるかないかを判定
    let error = result.error; //エラー判定とメッセージを取得(1)
    let message = result.message; //エラー判定とメッセージを取得(2)
    if(error == false){ //エラーがなければフォームを送信する
    /*------------------------------- Ajaxでフォーム送信する -------------------------------*/
      $.ajax({
        url: 'https://api.staticforms.xyz/submit',
        type: 'POST',
        dataType: 'json',
        data: $('#form').serialize(),
        success: function(result){
          alert('お問い合わせを送信しました。');
        },
        error: function(xhr, resp, text){
          alert('お問い合わせを送信できませんでした。');
        }
      })
    } else {
      alert(message); //エラーメッセージを表示する
    }
  });
  /*-------------------------------- フォーカスが外れたときに（blur）にフォームの入力チェックをする --------------------------------*/
  $('#name').blur(function(){
    inputCheck();
  });
  $('#furigana').blur(function(){
    inputCheck();
  });
  $('#email').blur(function(){
    inputCheck();
  });
  $('#tel').blur(function(){
    inputCheck();
  });
  $('#message').blur(function(){
    inputCheck();
  });
  $('#agree').click(function(){
    inputCheck();
  });
  /*-------------------------------- お問い合わせフォームに入力チェック --------------------------------*/
  function inputCheck(){
    /* console.log('inputCheck関数の呼び出し'); */
    let result; //エラーのチェック結果
    let message = ''; //エラーメッセージのテキスト
    let error = false; //エラ'ーがなければfalse、あればtrue
    /*------------- お名前チェック -------------*/
    if($('#name').val() == ''){ 
      $('#name').css('background-color', '#f79999');
      error = true;
      message += 'お名前を入力してください。\n';
    } else { //エラー無し
      $('#name').css('background-color', '#fafafa');
      error = false;
    }
    /*------------- フリガナのチェック -------------*/
    if($('#furigana').val() == ''){
      $('#furigana').css('background-color', '#f79999');
      error = true;
      message += 'フリガナを入力してください。\n';
    } else { //エラー無し
      $('#furigana').css('background-color', '#fafafa');
      error = false;
    }
    /*------------- メールアドレスのチェック -------------*/
    if($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1 ){
      $('#email').css('background-color', '#f79999');
      error = true;
      message += 'メールアドレスが未入力、または「@」もしくは「.」が含まれていません。\n';
    } else { //エラー無し
      $('#email').css('background-color', '#fafafa');
      error = false;
    }
    /*------------- 電話番号のチェック（未入力はok、未入力でない場合は-が必要） -------------*/
    if($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1){
      $('#tel').css('background-color', '#f79999');
      error = true;
      message += '電話番号にハイフン「-」が含まれていません。\n';
    } else { //エラー無し
      $('#tel').css('background-color', '#fafafa');
      error = false
    }
    /*------------- 問い合わせ内容のチェック -------------*/
    if($('#message').val() == ''){
      $('#message').css('background-color', '#f79999');
      error = true;
      message += 'お問い合わせ内容を入力してください。\n';
    } else { //エラー無し
      $('#message').css('background-color', '#fafafa');
      error = false;
    }
    /*------------- 個人情報のチェックボックスのチェック -------------*/
    if($('#agree').prop('checked') == false){
      error = true;
      message += '個人情報の取り扱いについて同意いただける場合は、チェックボックスにチェックを入れてください。\n';
    }
    /*------------- エラーの有無で送信ボタンの切り替え -------------*/
    if(error == true){
      $('#submit').attr('src', 'images/button-submit.png');
    } else {
      $('#submit').attr('src', 'images/button-submit-blue.png')
    }
    /*------------- オブジェクトでエラー判定とメッセージを返す -------------*/
    result = {
      error : error,
      message : message,
    };
    /*------------- 戻り値としてエラーがあるかどうかを返す -------------*/
    return result;
  }
});