// 変数 書き換えができる
let unko = 'Hello World!';　　// 変数の宣言
// unko = 'Hello World2!!';　　  // 変数の上書き
console.log(unko);　　　　　　  // 動くかどうか試しに表示できる

// 定数　書き換えができない.文字列を変えたくない時に定数を使う。
const bigUnko = 'He...Hello World!';
console.log(bigUnko);

// 配列
let inoki = ['いーち', 'にーい', 'さーん', 'ダーー！！'];
// console.log(inoki);
// console.log(inoki[0]);　　// 配列の中から値を取り出す

// ループ文
// let index = 0;
// while(index < 5){
//     // 繰り返したい命令
//     console.log(index);
//     index++;　　// ++は1を足す
// }

// ループ文+配列 inoki.lengthはinokiの配列の数
// let index2 = 0;
// while(index2 < inoki.length){
//     // 繰り返したい命令
//     console.log(inoki[index2]);
//     index2++;　　// ++は1を足す
// }

// if(条件) / else
// if(inoki.length > 5){
//     console.log('ボンバイエ！');
// } else {
//   console.log('ボンバ……');
// }

// 関数 (関数の書き方はたくさんあるが現在はアロー関数が一番使いやすい)
// const test = () => {   
//   if(inoki.length > 5){
//       console.log('ボンバイエ！');
//   } else {
//       console.log('ボンバ……');
//   }
// };

// test();     // これを書いて初めて実行される。

// 引数
const test = (arg) => {    
  if(inoki.length > arg){ 
      console.log('ボンバイエ！');
  } else {
      console.log('ボンバ……');
  }
};

// test(5);    // 引数の値によって、ログの結果が変わることがわかっただろう。
// test(3);

// オブジェクト
const unko2 = {
  color: 'pink',
  size:'large',
  purfume:'mint',   // プロパティ：キー
  goToilet: () => {
    console.log('Hello world');
  }
};

//console.log(unko2);　　　
//console.log(unko2.color);　// オブジェクトのどのプロパティのキーを参照するか選べる
// console.log(unko2.goToilet()); //　関数も入れることができる。


// 特殊なオズジェクト1、window
//console.log(window);  //WEBブラウザ全体のオブジェクト
// console.log(window.innerHeight);　//ブラウザの高さ
// window.alert('Hello world');　　　// ウィンドウでアラートを出すことができる。



// 特殊なオブジェクト２、document　　表示されているページに何か仕掛けたいときによく使う
console.log(document);    // 現在WEBブラウザ上で表示しているページ全体のオブジェクト
console.log(document.getElementsByTagName('button')[0] );

// 特殊なオブジェクト３、event　　ユーザーがアクションしたタイミングで何かしたいときに使う
// addEventListenerは引数を2つ指定できる。1つ目の引数:eventのタイプ、
document.getElementsByTagName('button')[0].addEventListener('click', ()=>{
    window.alert('hello World')
});