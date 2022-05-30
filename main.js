let answer = document.getElementById ('text');
let button = document.getElementById('push');
let title = document.getElementById('title');
let meigendesu = document.getElementById('meigen');
let answers = [];
let meigens = ["辛い事があっても笑っていれば、瞬間その辛さを忘れることができる。　〜志村けん", "努力し続けられる人間が天才。　〜志村けん",
"どんな時でも勇気を持って進めば必ず道は開ける。　〜野比のび太", "のんびり行こうよ。　〜野比のび太", "一つひとつに感謝。　〜みやぞん",
"人の個性に、良い悪いはない。　〜みやぞん", "ぐちをこぼしたっていいがな\n弱音を吐いたっていいがな\n人間だものたまには涙をみせたっていいがな\n生きているんだもの。　〜相田みつを",
"一生燃焼　一生感動　一生不悟　〜相田みつを", "頑張っていたら、みんなにありがとうと思える日がくる。　〜ローランド", "好きなことしてる人たちって魅力的だよね。　〜ローランド",
"なにかしようと思ったら、そのことだけに夢中にならなくちゃだめだ。　〜ドラえもん", "人にできて、きみだけにできないなんてことあるもんか。　〜ドラえもん", "最初から全て真剣勝負や。人間やると決めたら一度どうしてもやらなアカン時が必ずある。　〜明石家さんま", 
"やさしさを持った人は、それ以上の悲しみを持っている。　〜明石家さんま",　"不安からは何も生まれない。続ければ必ず良くなる。　〜明石家さんま", "99人がバカにしても、ひとりが応援してくれたら、それでいいじゃねぇーか！ \n夢があったらそれに向かっていけよ！ つらいこと、嫌なことがあったら俺をみろ！ そんなことバカバカしく思えるから。　〜江頭2:50",
              "自分で考え、自分で決めろ。後悔のないようにな　〜加持リョウジ　", "奇跡ってのは、起こしてこそ初めて、価値が出るものよ　〜赤木リツコ"];
let meigen = Math.floor(Math.random () * meigens.length);

function sindan()  {
    if (answer.value === "") {
        alert("名前を入力してください。")
    } else if (answer.value !== "") {
        answers.push(answer.value);
        kesu();
    }
}
function kesu () {
    answer.style.display = "none";
    button.style.display = "none";
    title.innerText = answers[0] + "さんへ贈る名言は・・・";
    meigendesu.innerText = meigens[meigen];
}
