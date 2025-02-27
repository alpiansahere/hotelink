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
    let totalQuestions = 36;
    let feedbackHtml = '';
    const form = e.target;
    const questions = [
        
{
    question: " シングルベッドを使用(しよう)する(しよう)1人用(ひとりよう)の部屋（へや）を何と言いますか？",
    questionKey: "soal1",
    correctAnswer: "シングルルーム",
    options: {
        "A": "ダブルルーム",
        "B": "シングルルーム",
        "C": "ツインルーム"
    }
},




{
    question: " レストランで 食べ物（たべもの）が一つ（ひとつ）ずつを提供する(ていきょうする)、それは何と言（い）いますか？",
    questionKey: "soal2",
    correctAnswer: "アラカルト",
    options: {
        "A": "ブッフェ",
        "B": "上座から(かみざから)",
        "C": "アラカルト"
    }
},




{
    question: " 倒(たお)れている人を発見(はっけん)したときの対応(たいおう)として、私(わたし)たちがどうすれば良いですか？",
    questionKey: "soal3",
    correctAnswer: "脈(みゃく)を確認(かくにん)する後(あと)119を連絡(れんらく)する",
    options: {
        "A": "写真を取って(しゃしんをとって)、SNSに掲載する(けいさいする)",
        "B": "上半身(じょうはんしん)をおこして壁(かべ)にゆっくり寄(よ)りかからせる",
        "C": "脈(みゃく)を確認(かくにん)する後(あと)119を連絡(れんらく)する"
    }
},




{
    question: " 日本でのタバコとアルコルのルール、許可(きょか)が１９歳(さい)もいいですか",
    questionKey: "soal4",
    correctAnswer: "ひとは20歳（さい）のとき、タバコやアルコルを買（か）ってもいい",
    options: {
        "A": "通常(つうじょう)は何歳(なんさい)でもいいです",
        "B": "19以上(いじょう)もタバコとアルコルが買（か）ってはいけない",
        "C": "ひとは20歳（さい）のとき、タバコやアルコルを買（か）ってもいい"
    }
},




{
    question: " レイトチェクいインの説明(せつめい)は、正しいものを選(えら)びなさい",
    questionKey: "soal5",
    correctAnswer: "とうちゃく時間（じかん）が遅(お)くれている",
    options: {
        "A": "とうちゃく時間（じかん）が遅(お)くれている",
        "B": "追加料金(ついかりょうきん)があります",
        "C": "お客様がホテルに来（こ）なくてもよい"
    }
},




{
    question: " フロントクラークがいそがしい場合(ばあい)お客様に電話（でんわ）が3コールまで鳴（な）ったら、何といいますか？",
    questionKey: "soal6",
    correctAnswer: "たいへんおまたせいたしました",
    options: {
        "A": "申（もう）し訳（わけ）ございません	",
        "B": "おまたせいたしました",
        "C": "たいへんおまたせいたしました"
    }
},




{
    question: " お客様からの電話（でんわ）にでるときは何といいますか？",
    questionKey: "soal7",
    correctAnswer: "何（なに）かごよろしいでしょうか",
    options: {
        "A": "いつもご利用(りよう)ありがとうございます",
        "B": "何（なに）かごよろしいでしょうか",
        "C": "モシモシ"
    }
},




{
    question: " 部屋が空(あ)いている状態(じょうたい)では何と言いますか、ただしものを選(えら)びなさい",
    questionKey: "soal8",
    correctAnswer: "空室(くうしつ)",
    options: {
        "A": "空室(くうしつ)",
        "B": "満室(まんしつ)",
        "C": "ユーシー"
    }
},




{
    question: " チェックイン際(さい)にお客様（きゃくさま）の予約(よやく)有無(うむ)と予約内容(よやくないよう)を確認（かくにん）する必要（ひつよう）があります。間違って(まちがって)ものを選びなさい",
    questionKey: "soal9",
    correctAnswer: "アレルギー有無(うむ)をかくにんする",
    options: {
        "A": "ご予約(よやく)のプラン",
        "B": "お客様(おきゃくさま)の氏名(しめい)",
        "C": "アレルギー有無(うむ)をかくにんする"
    }
},




{
    question: " 刃物(はもの)を渡す(わたす)場合(ばあい)はナイフ、フォクなど、どうすればいいか。正しいものを選びなさい",
    questionKey: "soal10",
    correctAnswer: "自分(じぶん)に向ける(むける)",
    options: {
        "A": "お客様(おきゃくさま)に向ける(向ける)",
        "B": "自分(じぶん)に向ける(むける)",
        "C": "お客様に投げる(なげる)"
    }
},




{
    question: " 宿泊料金(しゅくはくりょうきん)のなかにすべてのサービス費用(ひよう)が含(ふく)まれているプランとは正しいものを選びなさい",
    questionKey: "soal11",
    correctAnswer: "オールインクルシーブ",
    options: {
        "A": "オールインクルシーブ",
        "B": "ダイレクトブッキング",
        "C": "ダイナミックプライシング"
    }
},




{
    question: " レストランでフェンディンディナを提供(ていきょう)する場合(ばあい)、一つずつ取(と)り出(だ)さなければなりません。正しいものを選びなさい",
    questionKey: "soal12",
    correctAnswer: "前菜(ぜんさい)、メインコース、デザート",
    options: {
        "A": "デザート、メインコース、果物（くだもの）",
        "B": "前菜(ぜんさい)、メインコース、デザート",
        "C": "オードブル、メインコース、ワイン"
    }
},




{
    question: " お客様に会(あ)うとき立(た)ち止(ど)まって会釈(えしゃく)する。正しいものを選びなさい",
    questionKey: "soal13",
    correctAnswer: "１５度",
    options: {
        "A": "３０度",
        "B": "１５度",
        "C": "４５度"
    }
},




{
    question: " カトラリーのキーワードです。正しいものを選びなさい",
    questionKey: "soal14",
    correctAnswer: "フォーク、ナイフ、スプーン",
    options: {
        "A": "ナイフ、カスター、お皿（さら）",
        "B": "スプーン、お皿（さら）、ナプキン",
        "C": "フォーク、ナイフ、スプーン"
    }
},



{
    question: " 利用客(りようきゃく)が商品(しょうひん)やサービスに対(たい)する評価(ひょうか)をウェブサイトなどに書(か)き込(こ)み。正しいものを選びなさい",
    questionKey: "soal15",
    correctAnswer: "口コミ(くちこみ)",
    options: {
        "A": "クレーム",
        "B": "口コミ(くちこみ)",
        "C": "フィドバック"
    }
},



{
    question: " お客様が予約（よやく）のキャンセルを求（もと）めた場合についての払（はら）う料金（はらうりょうきん）は何ですか？",
    questionKey: "soal6",
    correctAnswer: "キャンセル料（りょう）",
    options: {
        "A": "宿泊税（しゅくはくぜい）",
        "B": "サービス料（りょう）",
        "C": "キャンセル料（りょう）"
    }
},



{
    question: " チェックインでは用語(ようご)の意味(いみ)正しいものを選びなさい",
    questionKey: "soal17",
    correctAnswer: "到着(とうちゃく)して最初(さいしょ)におこなう手続き(てつづき)",
    options: {
        "A": "予約(よやく)の到着時間(とうちゃくじかん)",
        "B": "到着(とうちゃく)して最初(さいしょ)におこなう手続き(てつづき)",
        "C": "ホテルや旅館（りょかん）を退館(たいかん)する"
    }
},




{
    question: " レストランのコースの最初(さいしょ)などに提供(ていきょう)する歓迎(かんげい)の意味(いみ)を示(しめ)す飲み物（のみもの）です。正しいものを選びなさい",
    questionKey: "soal18",
    correctAnswer: "ウェルカムドリンク",
    options: {
        "A": "前菜(ぜんさい)",
        "B": "ウェルカムドリンク",
        "C": "コンプりメンタりー"
    }
},




{
    question: " 自社(じしゃ)がウェブサイトに写真(しゃしん)を取(と)って、その写真(しゃしん)が自社(じしゃ)の宣伝用(せんでんよう)の素材(そうざい)として使用(しよう)する。正しいものを選びなさい",
    questionKey: "soal19",
    correctAnswer: "許可(きょか)があった場合でも、しっかり使用許諾(しようきょだく)を掲載(けいさい)する",
    options: {
        "A": "許可(きょか)なくても、その写真がけいさいさせる",
        "B": "作品をつくった人が知（し）っていて、怒(おこ)らない場合(ばあい)はだいじょうぶ",
        "C": "許可(きょか)があった場合でも、しっかり使用許諾(しようきょだく)を掲載(けいさい)する"
    }
},




{
    question: " 食べ物(たべもの)を提供（ていきょう)するとき、通常(つうじょう)がどこからか？正しいものを選びなさい",
    questionKey: "soal20",
    correctAnswer: "扉口(とびらぐち)に人が一番遠い場所（いちばんとおいばしょ）に食べ物（たべもの）をていきょうする",
    options: {
        "A": "食べ物(たべもの)を提供（ていきょう)するとき、通常(つうじょう)がどこからか？正しいものを選びなさい",
        "B": "扉口(とびらぐち)に人が一番遠い場所（いちばんとおいばしょ）に食べ物（たべもの）をていきょうする",
        "C": "ご高齢者(こうれいしゃ)にていきょうする"
    }
},




{
    question: " 急終車(きゅうきゅうしゃ)の電話番号(でんわばんご)正しいものを選びなさい",
    questionKey: "soal21",
    correctAnswer: "119",
    options: {
        "A": "119",
        "B": "911",
        "C": "110"
    }
},




{
    question: " アメニティ類(るい)はなんですか？間違(まちが)っているものを選びなさい",
    questionKey: "soal22",
    correctAnswer: "ゴム、カギ",
    options: {
        "A": "歯（は）ブラシ、せっけん",
        "B": "ゴム、カギ",
        "C": "タオル、かみそり"
    }
},




{
    question: " 障(しょう）がい者（しゃ)や高齢者(こうれいしゃ)が宿泊施設(しゅくはくしせつ)に来(き)た場合(ばあい)。どうすればいいか？正しいものを選びなさい",
    questionKey: "soal23",
    correctAnswer: "ドアの開閉(かいへい)や歩行解除(ほこうかいじょ)など",
    options: {
        "A": "避(さ)けて帰(かえ）りを求(もと)める",
        "B": "サポートを与(あた)える、手数料(てすりょう)を求(もと)める",
        "C": "ドアの開閉(かいへい)や歩行解除(ほこうかいじょ)など"
    }
},




{
    question: " デューテイーマネジャの意味(いみ)は何ですか、正しいものを選びなさい",
    questionKey: "soal24",
    correctAnswer: "夜間(やかん)の責任者(せきにんしゃ)",
    options: {
        "A": "夜間(やかん)の責任者(せきにんしゃ)",
        "B": "日勤(にっきん)の責任者(せきにんしゃ)",
        "C": "遅番(おそばん)の責任者(せきにんしゃ)"
    }
},




{
    question: " ホテルに苦情(くじょう）を発生(はっせい)したとき、どうすればいいか？正しいものを選びなさい",
    questionKey: "soal25",
    correctAnswer: "同志(どうし)に相談(そうだん)する",
    options: {
        "A": "警察(けいさつ)を連絡(れんらく)する",
        "B": "家族（かぞく）に報告(ほうこく)する",
        "C": "同志(どうし)に相談(そうだん)する"
    }
},




{
    question: " ホテルの予約（よやく）の状態(じょうたい)が混雑(こんざつ)する、GW（golden week)やクリスマスなどの時について。正しいものを選びなさい",
    questionKey: "soal26",
    correctAnswer: "ピークシーズン",
    options: {
        "A": "オンシーズン",
        "B": "ピークシーズン",
        "C": "レバラン"
    }
},




{
    question: " ワインのスペシャリスト人(ひと）は何といいますか？",
    questionKey: "soal27",
    correctAnswer: "ソムリエ",
    options: {
        "A": "バーテンダー",
        "B": "ソムリエ",
        "C": "アテンダント"
    }
},




{
    question: " クインベッドのサイズのこと。正しいものを選びなさい",
    questionKey: "soal28",
    correctAnswer: "160CMX195CM",
    options: {
        "A": "160cmx195cm",
        "B": "165cmx195cm",
        "C": "160cmx200cm"
    }
},




{
    question: " 価格(かかく)がパンフレットに合(あ)わせて調整(ちょうせい)されるについて。正しいものを選びなさい",
    questionKey: "soal29",
    correctAnswer: "ラックレート",
    options: {
        "A": "ラックレート",
        "B": "ダイナミックプライス",
        "C": "割(わ）り引（び)き"
    }
},




{
    question: " レストランでお客様(おきゃくさま)が注文(ちゅうもん)を終(お)えてから、私たちがどうすればいいか。正しいものを選びなさい",
    questionKey: "soal30",
    correctAnswer: "もう一度(ど)再確認(さいかくにん)する",
    options: {
        "A": "すぐにキチンに行(い)く",
        "B": "もう一度(ど)再確認(さいかくにん)する",
        "C": "ベスト食べ物(たべもの)を提供（ていきょう）する"
    }
},




{
    question: " 自分の清掃(せいそう)を含(ふく)まれていること。正しいものを選びなさい",
    questionKey: "soal31",
    correctAnswer: "毎日(まいにち)ひげをそる",
    options: {
        "A": "毎日(まいにち)ひげをそる",
        "B": "てを洗(あら)わない",
        "C": "髪（かみ）を結(むす)ばない"
    }
},




{
    question: " 温泉(おんせん)の営業(えいぎょう)がいつですか？",
    questionKey: "soal32",
    correctAnswer: "午後（ごご）05:00",
    options: {
        "A": "午後（ごご）05:35",
        "B": "午後（ごご）05:00",
        "C": "午前（ごぜん）06:45"
    }
},




{
    question: " 旅館（りょかん）で屋外(おくがい)の風呂(ぶろ)があります、でも女性(じょせい)のお客様が露天風呂(ろてんぶろ)で浴びたい(あびたい)です。どこですか？",
    questionKey: "soal33",
    correctAnswer: "D の風呂（ふろ）",
    options: {
        "A": "D の風呂（ふろ）",
        "B": "Aの風呂（ふろ）",
        "C": "Dのトイレ"
    }
},




{
    question: " お客様(おきゃくさま)が2っ泊(にっぱく)をたいざいする。お客様がお支払う(おしはらう)料金(りょうきん)はいくらですか？",
    questionKey: "soal34",
    correctAnswer: "半額料金（はんがくりょうきん）",
    options: {
        "A": "2万円（まんえん）",
        "B": "半額料金（はんがくりょうきん）",
        "C": "無料（むりょう）"
    }
},




{
    question: " パンダ旅館（りょかん）ではスペシャリスメニューがあります。それは何ですか？",
    questionKey: "soal35",
    correctAnswer: "スギラメン",
    options: {
        "A": "ブッフェセットがあります",
        "B": "天ぷらとたこ焼き（てんぷらとたこやき）",
        "C": "スギラメン"
    }
},




{
    question: " 喫煙場（きつえんじょ）がありますか？",
    questionKey: "soal36",
    correctAnswer: "なし",
    options: {
        "A": "あり",
        "B": "なし",
        "C": "なし"
    }
},
        
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
        "../meme/meme belajar kebut semalam.jpg",




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
