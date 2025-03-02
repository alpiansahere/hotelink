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
    question: " ホテルで設備(せつび)類(るい)のこと、適切なものを選びなさい",
    questionKey: "soal1",
    correctAnswer: "アメニティ",
    options: {
        "A": "アメニティ",
        "B": "ノベルティ",
        "C": "ウェルカムドリンク"
    }
},




{
    question: " 旅館(りょかん)で食材(しょくざい)を提供(ていきょう)すると部屋準備(へやじゅんび)のスタフ、正しいものを選びなさい",
    questionKey: "soal2",
    correctAnswer: "中居(なかい)",
    options: {
        "A": "アテンダント",
        "B": "中居(なかい)",
        "C": "女将(おかみ)"
    }
},




{
    question: " 火災(かさい)や急病人(きゅうびょうにん)がいった場合はどうすればよいか？正しいものを選びなさい",
    questionKey: "soal3",
    correctAnswer: "119を連絡(れんらく)する",
    options: {
        "A": "警察(けいさつ)を連絡(れんらく)する",
        "B": "119を連絡(れんらく)する",
        "C": "119を連絡してから、静(しず)かない場所(ばしょ)を置(お)く"
    }
},




{
    question: " 火災を避(さ)けるため、どうすればよいか？間違ってを選びなさい",
    questionKey: "soal4",
    correctAnswer: "リネン類(るい)が火の近くにおく",
    options: {
        "A": "リネン類(るい)が火の近くにおく",
        "B": "燃(も)えやすいものは必ず火の遠(とお)いに置(お)く",
        "C": "タバコすいがらを見つけた場合は、消(き)えているかどうか必ずチェックする"
    }
},




{
    question: " やけどの手当て(てあて)のことどちらか？正しいものを選びなさい",
    questionKey: "soal5",
    correctAnswer: "水(みず）で15～30分冷(ひ)やす",
    options: {
        "A": "衣服(いふく)を脱(ぬ)ぐ",
        "B": "すぐにカーゼで強(つよ)く押(お)す",
        "C": "水(みず）で15～30分冷(ひ)やす"
    }
},




{
    question: " コンプライアンスを違反(いはん)すると、個人(こじん)の場合は、勤務先(きんむさき)から懲戒処分(ちょうかいしょぶんTINDAKANDISIPLIN)として、どちらか？間違ってものを選びなさい",
    questionKey: "soal6",
    correctAnswer: "ついか給料(きゅうりょう)がもらう",
    options: {
        "A": "減給(げんきゅう)POTONG　GAJI",
        "B": "解雇(かいこ)PEMECATAN",
        "C": "ついか給料(きゅうりょう)がもらう"
    }
},




{
    question: " 高所作業(こうしょさぎょう)を行(おこ)う場合は、電球(でんきゅう)の取り替(か)えなど、適切（てきせつ）なものはどちらか？正しいものを選びなさい",
    questionKey: "soal7",
    correctAnswer: "できたら脚立(きゃたつ)を用意(ようい)する",
    options: {
        "A": "同志(どうし)の背筋(せすじ)を踏(ふ)む",
        "B": "お客様に頼(たの)むもよい",
        "C": "できたら脚立(きゃたつ)を用意(ようい)する"
    }
},




{
    question: " 整頓(せいとん)の意義(いぎ)として、どちらか？正しいものを選びなさい",
    questionKey: "soal8",
    correctAnswer: "必要(ひつよう)なものは使（つか）いやすいように置(お)き場(ば)を決(き)める",
    options: {
        "A": "日常的(にちじょうてき)に清掃(せいそう)する",
        "B": "必要(ひつよう)なものは使（つか）いやすいように置(お)き場(ば)を決(き)める",
        "C": "不要(ふよう)なものを処分(しょぶん)する"
    }
},




{
    question: " 予約時(よやくじ)の事項(じこう)確認(かくにん)をしなくてもいいのはどちらか？正しいものを選びなさい",
    questionKey: "soal9",
    correctAnswer: "予約者(よやくしゃ)の両親（りょうしん）の名前（なまえ）",
    options: {
        "A": "宿泊(しゅくはく)人数(にんずう)",
        "B": "予約者(よやくしゃ)の両親（りょうしん）の名前（なまえ）",
        "C": "部屋数(へやすう)"
    }
},




{
    question: " ノロウイルスの原因(げんいん)はどちらか？正しいものを選びなさい",
    questionKey: "soal10",
    correctAnswer: "貝（かい）",
    options: {
        "A": "卵(たまご）",
        "B": "乳製品(にゅうせいひん)",
        "C": "貝（かい）"
    }
},




{
    question: " 見送(みおく)り時（とき）のあいさつとして、どちらか？間違ってものを選びなさい",
    questionKey: "soal11",
    correctAnswer: "いつもご利用(りよう)ありがとね",
    options: {
        "A": "いつもご利用(りよう)ありがとね",
        "B": "ありがとうございました",
        "C": "お気をつけてお帰(おかえ)りくださいませ"
    }
},




{
    question: " お客様がクレジットカードでお支払(しはら)う場合は確認しなければならないことはどちらか？正しいものを選びなさい",
    questionKey: "soal12",
    correctAnswer: "宛名(あてな)ALAMAT YANG TERHUBUNG、金額(きんがく)",
    options: {
        "A": "ニックネーム、暗証番号(あんしょうばんご)",
        "B": "宛名(あてな)alamat yang terhubung、金額(きんがく)",
        "C": "手数料(てすうりょう)、金額"
    }
},




{
    question: " 刃物(はもの)を渡(わた)すとき、やり方（かた）はどちらか？正しいものを選びなさい",
    questionKey: "soal13",
    correctAnswer: "自分（じぶん）に向（む）ける",
    options: {
        "A": "お客様に向(む)ける",
        "B": "片手(かたて)で渡(わた)す",
        "C": "自分（じぶん）に向（む）ける"
    }
},




{
    question: " 方向(ほうこう)を示(しめ)すかたはどちらか？正しいものを選びなさい",
    questionKey: "soal14",
    correctAnswer: "手（て）のひらを相手(あいて)に向(む)けて示す",
    options: {
        "A": "親指(おやゆび)で示(しめ)す",
        "B": "拳(こぶし)で示す",
        "C": "手（て）のひらを相手(あいて)に向(む)けて示す"
    }
},




{
    question: " 空室(くうしつ)の意味はどちらか？正しいものを選びなさい",
    questionKey: "soal15",
    correctAnswer: "お部屋が空(あ)いている状態(じょうたい)",
    options: {
        "A": "お部屋が空(あ)いている状態(じょうたい)",
        "B": "お部屋が空(あ)いていない状態(じょうたい)",
        "C": "客室(きゃくしつ)有無(うむ)"
    }
},




{
    question: " 予約内容(よやくないよう)を確認（かくにん）する場合（ばあい）は含（ふく）まれていないことはどちらか？正しいものを選びなさい",
    questionKey: "soal16",
    correctAnswer: "アレルギーの有無(うむ)",
    options: {
        "A": "ご予約(よやく)のプラン",
        "B": "ご予約(よやく)人数(にんずう)",
        "C": "アレルギーの有無(うむ)"
    }
},




{
    question: " チェックアウトの時間(じかん)のこと、通常は何時(なんじ)ですか？間違ってものを選びなさい",
    questionKey: "soal17",
    correctAnswer: "何時でも大丈夫",
    options: {
        "A": "10時",
        "B": "11時",
        "C": "何時でも大丈夫"
    }
},




{
    question: " お客様はチェックアウトが指定(してい)の時間が遅(おそ)くなる状態(じょうたい)のこと。なんと言いますか？正しいものを選びなさい",
    questionKey: "soal18",
    correctAnswer: "レイトチェックアウト",
    options: {
        "A": "レイトチェックアウト",
        "B": "レイトチェクイン",
        "C": "アーリチェクイン"
    }
},




{
    question: " 一泊二食（いっぱくにしょく）で含（ふく）まれているプランはどちらか？正しいものを選びなさい",
    questionKey: "soal19",
    correctAnswer: "宿泊施設(しゅくはくしせつ)、朝食(ちょうしょく)、夕食(ゆうしょく)",
    options: {
        "A": "レンタカー、宿泊施設(しゅくはくしせつ)",
        "B": "朝食(ちょうしょく)、宿泊施設(しゅくはくしせつ)、空港(くうこう)",
        "C": "宿泊施設(しゅくはくしせつ)、朝食(ちょうしょく)、夕食(ゆうしょく)"
    }
},




{
    question: " サービスの利用(りよう)を保証(ほしょう)するために、支払(しはら)われる金額(きんがく)を指(さ)すのこと、それは何と呼ばれますか？正しいものを選びなさい",
    questionKey: "soal20",
    correctAnswer: "預(あずか)り金(きん)",
    options: {
        "A": "預(あずか)り金(きん)",
        "B": "グロース",
        "C": "VOID"
    }
},




{
    question: " 救急車(きゅうきゅうしゃ)の電話番号(でんわばんご)は何ですか？",
    questionKey: "soal21",
    correctAnswer: "119",
    options: {
        "A": "119",
        "B": "911",
        "C": "110"
    }
},




{
    question: " 宿泊料金(しゅくはくりょうきん)の中（なか）にすべてのサービス費用(ひよう)が含(ふく)まれているプランのこと。何（なん）と呼（よ）ばれますか？",
    questionKey: "soal22",
    correctAnswer: "オールインクルーシブ",
    options: {
        "A": "ダイレクトブッキング",
        "B": "B&B",
        "C": "オールインクルーシブ"
    }
},




{
    question: " お客様（きゃくさま）が見送(みおく)りの際（さい）にお見送（みおく）りとき、お客様（きゃくさま）にお詫(わ)びするときなど、お辞儀(おじぎ)の用語(ようご)はどちらか？正しいものを選びなさい",
    questionKey: "soal23",
    correctAnswer: "最敬礼(さいけいれい)",
    options: {
        "A": "会釈(えしゃく)",
        "B": "最敬礼(さいけいれい)",
        "C": "敬礼(けいれい)"
    }
},




{
    question: " ワインを提供(ていきょう)するときは何をすべきでしょうか？間違ってものを選びなさい",
    questionKey: "soal24",
    correctAnswer: "ワインを注(そそ)ぎながらお客様の顔(かお)をずっと見(み)る",
    options: {
        "A": "右手（みぎて）で注(そそ)ぐ",
        "B": "立（た）った姿勢(しせい)で注(そそ)ぐ",
        "C": "ワインを注(そそ)ぎながらお客様の顔(かお)をずっと見(み)る"
    }
},




{
    question: " カスターのキーワードは何ですか？",
    questionKey: "soal25",
    correctAnswer: "調味料(ちょうみりょう)の容器(ようき)",
    options: {
        "A": "コーヒーの容器(ようき)",
        "B": "調味料(ちょうみりょう)の容器(ようき)",
        "C": "シュガーの容器(ようき)"
    }
},




{
    question: " ワインを詳(くわ)しい人は何と呼ばれますかか？",
    questionKey: "soal26",
    correctAnswer: "ソムリエ",
    options: {
        "A": "バーテンダー",
        "B": "ソムリエ",
        "C": "バリスター"
    }
},




{
    question: " お客様から車（くるま）の鍵(かぎ)を預(あず)かり、スタフが駐車(ちゅうしゃ)と出庫(しゅっこ)の代行(だいこう)を行（おこな）うサービスのこと。それは何（なん）と呼（よ）ばれますか？",
    questionKey: "soal27",
    correctAnswer: "ショーファーサービス",
    options: {
        "A": "ショーファーサービス",
        "B": "ワゴンサービス",
        "C": "ランドリーサービス"
    }
},




{
    question: " 宿泊(しゅくはく)しておきながら代金(だいきん)を支払(しはら)わずに逃(に)げて人のこと。正しいものを選びなさい？",
    questionKey: "soal28",
    correctAnswer: "スキッパー",
    options: {
        "A": "泥棒(どろぼう)",
        "B": "スキッパー",
        "C": "スキミング"
    }
},




{
    question: " お客様からホテルに苦情(くじょう)を発生(はっせい)した場合（ばあい）は、私たちがどうすればよいか？正しいものを選びなさい",
    questionKey: "soal29",
    correctAnswer: "上司(じょうし)に報告(ほうこく)する",
    options: {
        "A": "友達（ともだち）に報告(ほうこく)する",
        "B": "彼（かれ）に連絡(れんらく)する",
        "C": "上司(じょうし)に報告(ほうこく)する"
    }
},




{
    question: " レストランで障害者(しょうがいしゃ)や高齢者(こうれいしゃ)きた場合は、私たちがどうすればよいか？正しいものを選びなさい",
    questionKey: "soal30",
    correctAnswer: "ドアの開閉(かいへい)や歩行解除(ほこうかいじょ)などを手伝(てつだ)う",
    options: {
        "A": "手数料(てすうりょう)を求(もと)める",
        "B": "避(さ)けて帰（かえ）る",
        "C": "ドアの開閉(かいへい)や歩行解除(ほこうかいじょ)などを手伝(てつだ)う"
    }
},




{
    question: " 中華料理の営業時間はいつまでですか？",
    questionKey: "soal31",
    correctAnswer: "22:00までです",
    options: {
        "A": "11:00までです",
        "B": "22:30までです",
        "C": "22:00までです"
    }
},




{
    question: " スポーツジムはどこにありますか？",
    questionKey: "soal32",
    correctAnswer: "館内（かんない）",
    options: {
        "A": "外側（そとがわ）",
        "B": "ショッピングモール",
        "C": "館内（かんない）"
    }
},




{
    question: " 中華料理（ちゅうかりょうり）のメーニュは何がありますか？間違ってものを選びなさい",
    questionKey: "soal33",
    correctAnswer: "ビーフシチュ",
    options: {
        "A": "ユーリンチ",
        "B": "ビーフシチュ",
        "C": "焼き餃子（やきぎょうざ）"
    }
},




{
    question: " 近隣（きんりん）の観光（かんこう）スポットの営業時間（えいぎょうじかん）はいつですか？",
    questionKey: "soal34",
    correctAnswer: "21:00まで",
    options: {
        "A": "21:00まで",
        "B": "10:00～22:00まで",
        "C": "10:00"
    }
},




{
    question: " 免税店（めんぜいてん）は徒歩（とほ）で何分（なんふん）ぐらいかかりますか？",
    questionKey: "soal35",
    correctAnswer: "10分かかります",
    options: {
        "A": "10分かかります",
        "B": "3分かかります",
        "C": "15分かかります"
    }
},

{
    question: "絵を見て、ダブルルームはをどちらですか？",
    questionKey: "soal36",
    correctAnswer: "Gambar D",
    options: {
        "A": "Gambar A",
        "B": "Gambar B",
        "C": "Gambar C",
        "D": "Gambar D"
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
