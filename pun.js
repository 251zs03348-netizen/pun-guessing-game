'use strict';

//語呂合わせの答え一覧
const punAnswers = ["084", "089", "222", "250", "283", "325", "315", "296", "390", "556", "229", "596", "071", "884", "893", "714", "129", "919", "910", "929", "960", "025"];
const randomIndex = Math.floor(Math.random() * punAnswers.length); //答えを配列の中からランダムで決める関数
const Answer = punAnswers[randomIndex]; //ランダムで決まった答えを設定する関数
const playerAnswerInput = document.getElementById('playerAnswer');
const judgementButton = document.getElementById('judgement');
const resultDivision = document.getElementById('result-area');
let count = 0; //答えた回数
let previousAnswer = '' //ひとつ前の答え

//判定ボタンを押したときの処理
judgementButton.addEventListener(
  'click',
  () => {
    const playerAnswer = playerAnswerInput.value; //入力された答えをチェックする。
    if (playerAnswer.length !== 3) {
      //答えが3文字ではない場合は、下のメッセージを表示する。
      alert("3桁の番号を入力してください。")
      return;
    } else if (previousAnswer === playerAnswer) {
      //一つ前の答えと入力した解答が同じだった場合は、処理を終了する。
      return;
    }

    count++; //答えた回数が1回増える。
    previousAnswer = playerAnswer //入力された答えを記憶する。

    //判定結果エリア
    resultDivision.innerText = '';
    
    //headerDivisionの作成
    const headerDivision = document.createElement('div');
    headerDivision.setAttribute('class', 'card-header text-bg-success');
    headerDivision.innerText = `${count}回目の判定結果`;
    
    //bodyDivisionの作成
    const bodyDivision = document.createElement('div');
    bodyDivision.setAttribute('class', 'card-body')

    const paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'card-text');
    if (playerAnswer === Answer) { //入力した文字と答えが一致する場合
      paragraph.innerText = `当たりです！`
    } else if (punAnswers.includes(playerAnswer)) { //入力した文字が語呂合わせ一覧にある場合。
      paragraph.innerText = `それではありません。`
    } else { //入力した文字と答えが一致しない場合
      paragraph.innerText = `その語呂合わせは文章にありません...`
    }
    bodyDivision.appendChild(paragraph);

    // resultDivision に Bootstrap のスタイルを適用する。
    resultDivision.setAttribute('class', 'card');

     // headerDivision と bodyDivision を resultDivision に差し込む
    resultDivision.appendChild(headerDivision);
    resultDivision.appendChild(bodyDivision);
    
  }
);