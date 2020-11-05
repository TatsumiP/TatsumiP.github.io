// クイズの中身を配列の中にオブジェクトを入れて、更に配列を入れることで表現。
const quiz = [
    {
        question: 'スピッツの三番目のオリジナルアルバムはどれ？',    
        answers: [ 
             '惑星のかけら',
             '名前をつけてやる',
             '空の飛び方',
             'インディゴ地平線'
        ],
        correct: '名前をつけてやる'
    },{
        question: '2020年11月時点でのスピッツの最新のアルバムはどれ？',    
        answers: [ 
             '見っけ',
             '醒めない',
             'とげまる',
             '小さな生き物'
        ],
        correct: '見っけ'
    },{
        question: '次のうちスピッツの曲でドラマの主題歌になっていないものはどれ？',    
        answers: [ 
             '夢じゃない',
             '優しいあの子',
             '愛のことば',
             'ルキンフォー'
        ],
        correct: 'ルキンフォー'
    }
];

// 変数・定数宣言(quiz)
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// 変数・定数宣言(button)
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// 定数の文字列をHTMLに反映させる関数を宣言
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;     // 配列の引数としての変数宣言
    while(buttonIndex < buttonLength){
        // buttonタグに選択肢表示
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
        buttonIndex++ ;
    }
}

// 定数の文字列をHTMLに反映させる関数を実行
setupQuiz();


// クイズの正誤判定を関数で定義
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){  
        window.alert('正解！');
        score++;
    }else{
        window.alert('不正解！');    
    }

    quizIndex++ ;

    if(quizIndex < quizLength){
        // 問題数があればこちらを実行
        setupQuiz();
    } else {
        // 問題数がなければこちらを実行
        window.alert('終了!あなたの正解数は'+ score + '/' + quizLength +　'です！');
    }

};

// クイズの正誤判定を順次実行する。
let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener("click", (e) => {  
        clickHandler(e);
    });
    handlerIndex++ ;
}
