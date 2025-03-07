// Menyembunyikan form nama dan menampilkan quiz
document.getElementById("nameForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const userName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    document.getElementById("nameContainer").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("userName").innerText = `Nama : ${userName}`;
    document.getElementById("userEmail").innerText = `Email: ${email}`;

    // Menampilkan alert saat quiz dimulai
    alert("Waktu 60 menit mengerjakan");

    // Mengatur timer 30 menit (1800000 ms)
    setTimeout(function () {
        alert("Waktu Anda habis! Mengirim jawaban secara otomatis.");
        document.getElementById("quizForm").dispatchEvent(new Event('submit'));
    }, 3600000); // 1 jam  waktuujian
});

// Fungsi untuk melanjutkan ke pertanyaan berikutnya
function nextQuestion(questionNumber) {
    const selectedOption = document.querySelector(`input[name="soal${questionNumber}"]:checked`);
    if (!selectedOption) {
        alert("Silahkan pilih jawaban dulu tuan jangan buru buru!");
        return;
    }
    const currentQuestion = document.getElementById('question' + questionNumber);
    const nextQuestion = document.getElementById('question' + (questionNumber + 1));
    currentQuestion.style.display = 'none';
    nextQuestion.style.display = 'block';

    // Menampilkan meme otomatis ketika mengerjakan soal 5
    if (questionNumber % 9 === 0) {
        showMeme();
    }
}

// Event listener untuk mengirim jawaban
document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Jawaban berhasil dikirim!");
    let correctCount = 0;
    let totalQuestions = 46;
    let feedbackHtml = '';
    const form = e.target;
    const questions = [
        {
            question: "お客様が快適(かいてき)に滞在(たいざい)するために、宿泊施設(しゅくはくしせつ)が何をすべきでしょうか？間違っているものを選びなさい。",
            questionKey: "soal1",
            correctAnswer: "お客様が自分に宿泊施設(しゅくはくしせつ)など、探(さが)させるもよい。",
            options: {
                "A": "割り引きの値段(ねだん)を共有(きょうゆう)",
                "B": "お客様が望(のぞ)(んでいる場所(ばしょ)を聞いて場合、宿泊施設(しゅくはくしせつ)など、説明(せつめい)し、案内(あんない)する。",
                "C": "お客様が自分に宿泊施設(しゅくはくしせつ)など、探(さが)させるもよい。"
            }
        },




        {
            question: ". チェックインとチェックアウトの最初(さいしょ)を手続き(てつづき)している担当者(たんとうしゃ)。正しいものを選びなさい。",
            questionKey: "soal2",
            correctAnswer: "レセプション",
            options: {
                "A": "アテンダント",
                "B": "ロストファウンドクラーク",
                "C": "レセプション"
            }
        },




        {
            question: "クレームまたは苦情(くじょう)発生(はっせい)した場合は、どうすればいいか？間違ってものを選びなさい",
            questionKey: "soal3",
            correctAnswer: "お客様と相談(そうだん)する",
            options: {
                "A": "上司(じょうし)を連絡(れんらく)する",
                "B": "御詫(おわ)びして、上司(じょうし)と相談(そうだん)する",
                "C": "お客様と相談(そうだん)する"
            }
        },


        {
            question: " お客様が宿泊施設(しゅくはくしせつ)に来た場合は、予約(よやく)がない、私たちどうすればいいか？間違ってものを選びなさい。",
            questionKey: "soal4",
            correctAnswer: "お部屋が空(あ)いていない場合は、ホテルが拒否(きょひ)できる",
            options: {
                "A": "お部屋が空(あ)いている場合は、お客様が予約(よやく)をできる",
                "B": "空いていない状態(じょうたい)とき、他(ほか)のホテルをお勧(すす)めるもよい",
                "C": "お部屋が空(あ)いていない場合は、ホテルが拒否(きょひ)できる"
            }
        },
        {
            question: " ホテルにSNSメリットのことはないものどちらか？正しいものを選びなさい",
            questionKey: "soal5",
            correctAnswer: "ホテルで宿泊施設(しゅくはくしせつ)、設備(せつび)などを宣伝(せんでん)するため",
            options: {
                "A": "ホテルで宿泊施設(しゅくはくしせつ)、設備(せつび)などを宣伝(せんでん)するため",
                "B": "お客様が滞在(たいざい)に興味(きょうみ)があるように",
                "C": "良いイメージために、ホテルの1日の利益(りえき)を見せる"
            }
        },



        {
            question: " お客様からメール、でんわ、ウェッブサイトなどを通(つう)じて予約(よやく)をうける場合は、個人情報(こじんじょうほう)の含まれているとして、注意(ちゅい)すべきことは何ですか？間違ってものを選びなさい",
            questionKey: "soal6",
            correctAnswer: "ご予約のプラン",
            options: {
                "A": "お客様の氏名(しめい)",
                "B": "ご予約のプラン",
                "C": "食事(しょくじ)のアレルギー"
            }
        },



        {
            question: " お客様が部屋を変化(へんか)したい場合は、どうすればいいか？間違ってものを選びなさい",
            questionKey: "soal7",
            correctAnswer: "部屋が空いている状態(じょうたい)は大丈夫",
            options: {
                "A": "部屋が空いている状態(じょうたい)は大丈夫",
                "B": "お客様がロギース理由(りゆ)場合は、お客様の望んでいる部屋が変化(へんか)できない",
                "C": "ホテルのミス場合は、お部屋が変化(へんか)できる"
            }
        },



        {
            question: " 館内(かんない)困(こま)っているお客様を見るとき、おもてなしの意義(いぎ)として、どうすればいいか？正しいものを選びなさい",
            questionKey: "soal8",
            correctAnswer: "顔(かお)がずっと無表情(むひょうじょう)ながら、お客様の話すを聞く",
            options: {
                "A": "お客様に求(もと)められると望(のぞ)んでいることはすぐに案内(あんない)する",
                "B": "忙(いそが)しいので、見てみぬふりする",
                "C": "顔(かお)がずっと無表情(むひょうじょう)ながら、お客様の話すを聞く"
            }
        },


        {
            question: " お客様に良いイメージを与(あた)えられるように、何をすべきでしょうか？正しいものを選びなさい",
            questionKey: "soal9",
            correctAnswer: "丁寧(ていねい)な言葉使い(ことばづかい)",
            options: {
                "A": "清潔感(せいけつかん)と華（はな）やかなみだしなみ",
                "B": "不幸(ふこう)な表情(ひょうじょう)を見せる",
                "C": "丁寧(ていねい)な言葉使い(ことばづかい)"
            }
        },



        {
            question: " 予約(よやく)内容(ないよう)の確認(かくにん)しなくてはいけないはどちらか？間違っているものを選びなさい",
            questionKey: "soal10",
            correctAnswer: "アレルギー有無(うむ)",
            options: {
                "A": "アレルギー有無(うむ)",
                "B": "ご予約(よやく)のプラン",
                "C": "ご予約(よやく)人数(にんずう)"
            }
        },

        {
            question: " 外国人(がいこくじん)のお客様が日本の宿泊(しゅくはく)に泊(と)まるとき、お客様が何をすべきでしょうか？正しいものを選びなさい",
            questionKey: "soal11",
            correctAnswer: "パスポートを提示(ていじ)する",
            options: {
                "A": "パスポートを提示(ていじ)する",
                "B": "原産国(げんさんこく)を言及(げんきゅう)する",
                "C": "母語(ぼご)を話(はな)す"
            }
        },




        {
            question: " お客様が滞在)中(たいざいちゅう)にフロントに電話(でんわ)があった際に、ルームサービスまたは注文（ちゅうもん）を求（もと）めた場合は何をすべきでしょうか？間違ってものを選びなさい",
            questionKey: "soal12",
            correctAnswer: "お客様の注文を他(た)のスタフに伝(つた)えずに一人で提供(ていきょう)する",
            options: {
                "A": "お客様の注文を他(た)のスタフに伝(つた)えずに一人で提供(ていきょう)する",
                "B": "お客様の注文をすぐに他のスタフを伝(つた)える",
                "C": "ご注文内容(ちゅうもんないよう)に間違(まちがいないか、ご注文内容(ちゅうもんないよう)を繰(く)り返(かえ)す"
            }
        },




        {
            question: " お客様かのリクエストアメニティ、ルームサービスなどを届(とど)ける場合は、客室(きゃくしつ)を入る前に、何をすべきでしょうか？間違ってものを選びなさい",
            questionKey: "soal13",
            correctAnswer: "ご注文(ちゅうもん)はドアの前で置(お)く",
            options: {
                "A": "ドアをノックするか呼(よ)び鈴(りん)を鳴(な)らす",
                "B": "部屋番号(へやばんご)を確認する",
                "C": "ご注文(ちゅうもん)はドアの前で置(お)く"
            }
        },

        {
            question: " 館内利用(かんないりよう)の意味(いみ)は何ですか？正しいものを選びなさい",
            questionKey: "soal14",
            correctAnswer: "プランには含(ふく)まれていない飲料(いんりょう)、ルームサービス、マシャージなどのこと",
            options: {
                "A": "プランには含(ふく)まれていない飲料(いんりょう)、ルームサービス、マシャージなどのこと",
                "B": "お客様がランチビュッフェプランを予約(よやく)のこと",
                "C": "ホテルで宿泊施設(しゅくはくしせつ)、食事(しょくじ)などのこと"
            }
        },


        {
            question: " 一泊二食（いっぱくにしょく）の意味(いみ)はどうですか？正しいものを選びなさい",
            questionKey: "soal15",
            correctAnswer: "朝食(ちょうしょく)と夕食(ゆうしょく)が含まれている宿泊(しゅくはく)プラン",
            options: {
                "A": "朝食(ちょうしょく)と夕食(ゆうしょく)が含まれている宿泊(しゅくはく)プラン",
                "B": "朝食(ちょうしょく)と宿泊(しゅくはく)プラン",
                "C": "すべてのサービス費用(ひよう)が含まれている"
            }
        },




        {
            question: " 預(あずか)り金(きん)他（ほか）の用語(ようご)は何ですか？正しいものを選びなさい",
            questionKey: "soal16",
            correctAnswer: "デポジット",
            options: {
                "A": "VOID",
                "B": "デポジット",
                "C": "チップ"
            }
        },




        {
            question: " 自分(じしゃ)の活動内容(かつどうないよう)や宿泊施設(しゅくはくしせつ)などの商品(しょうひん)の情報発信(じょうほうはっしん)を行(おこな)う仕事(しごと)のことは何と言いますか？正しいものを選びなさい",
            questionKey: "soal17",
            correctAnswer: "広報業務(こうほうぎょうむ)",
            options: {
                "A": "会計業務(かいけいぎょうむ)",
                "B": "企画業務(きかくぎょうむ)",
                "C": "広報業務(こうほうぎょうむ)"
            }
        },




        {
            question: " ウェブサイトのデザインを使(つか)いやすいために、どうすればいいか？正しいものを選びなさい",
            questionKey: "soal18",
            correctAnswer: "分かりやすいナビゲーションやレイアウトを備(そな)えたウェブサイトを作成(さくせい)する",
            options: {
                "A": "分かりやすいナビゲーションやレイアウトを備(そな)えたウェブサイトを作成(さくせい)する",
                "B": "ウェブサイトが完全(かんぜん)でカラフルを作成(さくせい)する",
                "C": "他のウェブサイトのデザインを真似(まね)する"
            }
        },




        {
            question: " 自社(じしゃ)のウェブサイトで何を表示(ひょうじ)すべきがないですか？",
            questionKey: "soal19",
            correctAnswer: "全員(ぜんいん)スタフの名前(なまえ)情報(じょうほう)、個人情報(こじんじょうほう)など",
            options: {
                "A": "全員(ぜんいん)スタフの名前(なまえ)情報(じょうほう)、個人情報(こじんじょうほう)など",
                "B": "宿泊料金(しゅくはくりょうきん)、館内施設(かんないしせつ)、イベント情報(じょうほう)",
                "C": "地元(じもと)の観光名所(かんこうめいしょ)、周辺施設(しゅうへんしせつ)"
            }
        },




        {
            question: " お客様がホテルや旅館(りょかん)にいらっしゃったとき、レストランに来店(らいてん)されたとき、あいさつはどうですか？正しいものを選びなさい",
            questionKey: "soal20",
            correctAnswer: "いらっしゃいませ",
            options: {
                "A": "ありがとうございました",
                "B": "失礼します",
                "C": "いらっしゃいませ"
            }
        },


        {
            question: " お客様をお待(ま)たせしてしまう場合に使うあいさつはどうですか？正しいものを選びなさい",
            questionKey: "soal21",
            correctAnswer: "お待たせいたしました",
            options: {
                "A": "お待たせいたしました",
                "B": "少々(しょうしょう)お待ちくださいませ",
                "C": "申し訳ございません"
            }
        },




        {
            question: " お客様のご部屋(へや)から離(はな)れるとき、あいさつはどうですか？正しいものを選びなさい",
            questionKey: "soal22",
            correctAnswer: "失礼しました",
            options: {
                "A": "失礼しました",
                "B": "そろそろ失礼します",
                "C": "はい、かしこまりました"
            }
        },




        {
            question: " 旅館(りょかん)に食べ物を提供(ていきょう)かたは誰(だれ)からですか？正しいものを選びなさい",
            questionKey: "soal23",
            correctAnswer: "上座(かみざ)から",
            options: {
                "A": "下座(しもざ)から",
                "B": "上座(かみざ)から",
                "C": "出入口(でいりぐち)"
            }
        },



        {
            question: " フェンディンディナーの順番(じゅんばん)がどちらか？正しいものを選びなさい",
            questionKey: "soal24",
            correctAnswer: "前菜(ぜんさい)、メインコース、デザート",
            options: {
                "A": "前菜(ぜんさい)、メインコース、デザート",
                "B": "飲み物、メインコース、デザート",
                "C": "メインコース、デザート、コーヒー"
            }
        },




        {
            question: " 会計(かいけい)またはキャッシャーと呼(よ)ばれる業務(ぎょうむ)は適切(てきせつ)な意味はどちらか？正しいものを選びなさい",
            questionKey: "soal25",
            correctAnswer: "お客様に館内利用(かんないりよう)、宿泊料金(しゅくはくりょうきん)など、料金(りょうきん)を請求(せいきゅう)し、お客様に請求明細書(せいきゅうめいさいしょ)を見せる。",
            options: {
                "A": "チェックインとチェックアウトの手続きを行う、館内(かんない)を案内(あんない)する",
                "B": "お客様に館内利用(かんないりよう)、宿泊料金(しゅくはくりょうきん)など、料金(りょうきん)を請求(せいきゅう)し、お客様に請求明細書(せいきゅうめいさいしょ)を見せる。",
                "C": "お客様に食事(しょくじ)、ルームサービスなど、を備(そな)える"
            }
        },




        {
            question: " お客様を迎(でむか)えするとき、適切(てきせつ)なお辞儀(おじぎ)はどうですか？正しいものを選びなさい",
            questionKey: "soal26",
            correctAnswer: "敬礼(けいれい)30度",
            options: {
                "A": "会釈(えしゃく)15度",
                "B": "敬礼(けいれい)30度",
                "C": "最敬礼(さいけいれい)45度"
            }
        },




        {
            question: " 宿泊施設内(しゅくはくしせつない)でお客様をご案内(あんない)する際には、適切なやり方はどちらか？間違ってものを選びなさい",
            questionKey: "soal27",
            correctAnswer: "早(はや)く歩きながら、宿泊施設(しゅくはくしせつ)を説明(せつめい)する",
            options: {
                "A": "2～3歩(ぽ)左側(ひだりがわに、お客様の歩調(ほちょう)に合(あ)わせながら歩(ある)きます",
                "B": "お客様に宿泊施設内(しゅうへんしせつない)を説明(せつめい)ながら、歩(あるきます",
                "C": "早(はや)く歩きながら、宿泊施設(しゅくはくしせつ)を説明(せつめい)する"
            }
        },




        {
            question: " ルームキーまたはルームカードをお客様にお渡(わた)すとき、何をすべきでしょうか？正しいものを選びなさい",
            questionKey: "soal28",
            correctAnswer: "お客様から見て正面(しょうめん)の方向に向けて両手(りょうて)で渡(わた)す",
            options: {
                "A": "自分に正面(しょうめん)の方向(ほうこう)に向けて両手(りょうて)で渡(わた)す",
                "B": "キャッシャトレイに置く(おく)",
                "C": "お客様から見て正面(しょうめん)の方向に向けて両手(りょうて)で渡(わた)す"
            }
        },



        {
            question: " . スタフがエレベーターを使用(しよう)する際に、お客様も同(おな)じエレベーターを使用する状態(じょうたい)、私たちがどうすればいいか？正しいものを選びなさい",
            questionKey: "soal29",
            correctAnswer: "お客様を優先(ゆうせん)します",
            options: {
                "A": "お客様を優先(ゆうせん)します",
                "B": "私たちがお客様よりエレベーターを使用(しよう)先(さき)なら大丈夫",
                "C": "エレベーターを使用(しよう)とき、お客様の顔を見(み)ずもよい"
            }
        },




        {
            question: " ホテルに電話対応(でんわたいおう)のポイントはどちらか？間違ってものを選びなさい",
            questionKey: "soal30",
            correctAnswer: "スタフが先(さき)より電話(でんわ)を切る",
            options: {
                "A": "スタフが先(さき)より電話(でんわ)を切る",
                "B": "電話を取(と)る前(まえ)にメモと筆記用具(ひっきようぐ)を用意(ようい)しておく",
                "C": "電話に出たら、まず名乗(なの)る"
            }
        },




        {
            question: " レストランでテーブルマナーについて、間違いものを選びなさい",
            questionKey: "soal31",
            correctAnswer: "テーブルで食べるときは帽子（ぼうし）をかぶって食べます",
            options: {
                "A": "口（くち）の中（なか）に包（つつ）んでいる食べ物があるときにしゃべりません",
                "B": "テーブルで食べるときは帽子（ぼうし）をかぶって食べます",
                "C": "食べる前に'いただきます'と言う"
            }
        },




        {
            question: " 予約（よやく）せずに立（た）ちよった顧客（こきゃく）について正しいものを選びなさい",
            questionKey: "soal32",
            correctAnswer: "ウオークイン",
            options: {
                "A": "ウオークイン",
                "B": "FIT",
                "C": "VIP"
            }
        },




        {
            question: " 広報業務（こうほうぎょうむ）の仕事（しごと）について正しいものを選びなさい",
            questionKey: "soal33",
            correctAnswer: "情報発信",
            options: {
                "A": "フロントで仕事をする",
                "B": "他（ほか）の人にお客様の情報（じょうほう）を教（おし）える",
                "C": "情報発信"
            }
        },




        {
            question: " 和食（わしょく）ではは旬（しゅん）っていう言葉（ことば）について正しいものを選びなさい",
            questionKey: "soal34",
            correctAnswer: "新鮮（しんせん）で味（あじ）がいい食材（しょくざい）を使います",
            options: {
                "A": "新鮮（しんせん）で味（あじ）がいい食材（しょくざい）を使います",
                "B": "春夏秋冬（しゅんかしゅとう）の食材（しょくざい）ではない",
                "C": "一汁三菜（いちじゅうさんさい）の基本（きほん）です"
            }
        },




        {
            question: " ビールをお客様にリクエストされたときについて正しいものを選びなさい",
            questionKey: "soal35",
            correctAnswer: "泡（あわ）を適切（てきせつ）に作（つく）って注（そそ）ぐ",
            options: {
                "A": "泡（あわ）を適切（てきせつ）に作（つく）って注（そそ）ぐ",
                "B": "ビールをコップいっぱいまで注（そそ）ぐ",
                "C": "ビールを炭酸水（たんさんすい）とまぜる"
            }
        },


        {
            question: " チェックアウトの時間は何時ですか",
            questionKey: "soal36",
            correctAnswer: "11:00",
            options: {
                "A": "14:00",
                "B": "11:00",
                "C": "12:00"
            }
        },



        {
            question: " 日本料理の営業時間はいつまでですか？",
            questionKey: "soal37",
            correctAnswer: "15:00",
            options: {
                "A": "17:00",
                "B": "10時半",
                "C": "15:00"
            }
        },



        {
            question: " 日本料理のメニューはどちらか？",
            questionKey: "soal38",
            correctAnswer: "蕎麦",
            options: {
                "A": "たこ焼き",
                "B": "焼き餃子",
                "C": "蕎麦"
            }
        },



        {
            question: " 何台分の駐車場スペースがありますか？",
            questionKey: "soal39",
            correctAnswer: "100台",
            options: {
                "A": "30台",
                "B": "100台",
                "C": "130台"
            }
        },



        {
            question: " JR駅から徒歩で何分ぐらいかかりますか？",
            questionKey: "soal40",
            correctAnswer: "15分",
            options: {
                "A": "3分",
                "B": "10分",
                "C": "15分"
            }
        },


        {
            question: " チェックイン時間に関しては正しいものを一つ選びなさい。",
            questionKey: "soal41",
            correctAnswer: "15時から",
            options: {
                "A": "14時から",
                "B": "15時から",
                "C": "12時から"
            }
        },



        {
            question: " お客様が露天風呂に入浴したい場合、スタッフとしての役割はどこへ案内しますか？",
            questionKey: "soal42",
            correctAnswer: "10F",
            options: {
                "A": "10F",
                "B": "3F",
                "C": "4F"
            }
        },



        {
            question: " お客様が朝食を食べたいときはどこへ案内すうればいいですか？",
            questionKey: "soal43",
            correctAnswer: "1F",
            options: {
                "A": "2F",
                "B": "3F",
                "C": "1F"
            }
        },



        {
            question: " 客室に予約が埋まったお部屋が80室,OCCは何パーセントですか？",
            questionKey: "soal44",
            correctAnswer: "80%",
            options: {
                "A": "40%",
                "B": "60%",
                "C": "80%"
            }
        },



        {
            question: " これは何の絵（え）ですか？",
            questionKey: "soal45",
            correctAnswer: "消火器（しょうかき）",
            options: {
                "A": "火災報知器（かさいほうちき）",
                "B": "消火器（しょうかき）",
                "C": "消化器（しょうかき）"
            }
        },



        {
            question: " Lihat gambar di bawah ini dan pilihlah yang sesuai",
            questionKey: "soal46",
            correctAnswer: "ツインルーム",
            options: {
                "A": "シングルベッド",
                "B": "ふたつのシングルベッドのお部屋",
                "C": "ツインルーム"
            }
        }
    ];

    questions.forEach((q, index) => {
        const userAnswerKey = form[q.questionKey].value;
        const userAnswerText = q.options[userAnswerKey];

        if (userAnswerText === q.correctAnswer) {
            correctCount++;
            feedbackHtml += `
                <div class="result-question correct-answer">
                    <p>${index + 1}. ${q.question}</p>
                    <p class="correct-text">Jawaban Anda: <br> ${userAnswerText} ✅</p>
                </div>
            `;
        } else {
            feedbackHtml += `
                <div class="result-question incorrect-answer">
                    <p>${index + 1}. ${q.question}</p>
                    <p class="wrong-text">Jawaban Anda:　<br> ${userAnswerText} ❌</p>
                    <p class="true-answer">Jawaban yang benar: <br> ${q.correctAnswer}</p>
                </div>
            `;
        }
    });

    const wrongCount = totalQuestions - correctCount;
    const averageScore = (correctCount / totalQuestions) * 100;

    document.getElementById("correctAnswers").innerText = `Jumlah Benar: ${correctCount}`;
    document.getElementById("wrongAnswers").innerText = `Jumlah Salah: ${wrongCount}`;
    document.getElementById("averageScore").innerText = `Nilai Rata-Rata: ${averageScore.toFixed(2)}%`;
    document.getElementById("feedback").innerHTML = feedbackHtml;
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "block";
});

// Mencegah Screenshot dan Copy Paste
document.addEventListener("keydown", function (e) {
    if (e.key === "PrintScreen") {
        alert("Screenshot tidak diperbolehkan!");
        e.preventDefault();
    }
    if (e.ctrlKey && (e.key === "c" || e.key === "x" || e.key === "u")) {
        alert("Copy dan View Source tidak diperbolehkan!");
        e.preventDefault();
    }
});

document.addEventListener("contextmenu", function (e) {
    alert("Klik kanan tidak diperbolehkan!");
    e.preventDefault();
});

let countdown; // Variabel untuk menyimpan interval

function startQuiz(event) { // Mencegah form submit otomatis

    let music = document.getElementById("bgMusic");
    let musicToggle = document.getElementById("musicToggle").checked;

    if (musicToggle) {
        music.play();
    } else {
        music.pause();
        music.currentTime = 0;
    }

    startCountdown(3600); // waktuujian
}

function startCountdown(durationInSeconds) {
    clearInterval(countdown); // Reset timer jika ditekan lagi

    let timerDisplay = document.getElementById("timer");
    let remainingTime = durationInSeconds;

    countdown = setInterval(function () {
        let minutes = Math.floor(remainingTime / 60);
        let seconds = remainingTime % 60;

        timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        if (remainingTime <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "Waktu Habis!";
        } else {
            remainingTime--;
        }
    }, 1000);
}


// Fungsi untuk menampilkan meme otomatis
// Fungsi untuk menampilkan meme secara acak
function showMeme() {
    const memes = [
        "../meme/images (1).jfif",
        "../meme/images (2).jfif",
        "../meme/images (3).jfif",
        "../meme/images.jfif",
        "../meme/maxresdefault.jpg",
        "../meme/meme belajar kebut semalam.jpg"
        
    ]; // Ganti dengan path gambar sesuai lokasi

    const randomMeme = memes[Math.floor(Math.random() * memes.length)];

    const memeContainer = document.createElement("div");
    memeContainer.id = "memeContainer";
    memeContainer.style.position = "fixed";
    memeContainer.style.top = "50%";
    memeContainer.style.left = "50%";
    memeContainer.style.transform = "translate(-50%, -50%)";
    memeContainer.style.zIndex = "1000";
    memeContainer.style.backgroundColor = "rgba(0,0,0,0.8)";
    memeContainer.style.padding = "10px";
    memeContainer.style.textAlign = "center";

    const memeImage = document.createElement("img");
    memeImage.src = randomMeme;
    memeImage.style.maxWidth = "500px";
    memeImage.style.display = "block";
    memeImage.style.margin = "10px auto";

    const closeButton = document.createElement("button");
    closeButton.innerText = "X";
    closeButton.style.position = "absolute";
    closeButton.style.top = "5px";
    closeButton.style.right = "5px";
    closeButton.style.background = "red";
    closeButton.style.color = "white";
    closeButton.style.border = "none";
    closeButton.style.padding = "5px 10px";
    closeButton.style.cursor = "pointer";

    closeButton.addEventListener("click", function () {
        document.body.removeChild(memeContainer);
    });

    memeContainer.appendChild(closeButton);
    memeContainer.appendChild(memeImage);
    document.body.appendChild(memeContainer);

    // Meme hilang otomatis setelah 5 detik
    setTimeout(() => {
        if (document.body.contains(memeContainer)) {
            document.body.removeChild(memeContainer);
        }
    }, 10000);
}
