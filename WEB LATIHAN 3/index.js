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
    let totalQuestions = 35;
    let feedbackHtml = '';
    const form = e.target;
    const questions = [
        
        {
            question: " ホテルの料飲部門（いんりょうぶもん）に関(かん)する売上(うりあげ)の内容(ないよう)として、正しいものを選びなさい。",
            questionKey: "soal1",
            correctAnswer: "レストラン売上(うりあげ)",
            options: {
                "A": "室利用売上(しつりよううりあげ)",
                "B": "レストラン売上(うりあげ)",
                "C": "レストランと客室(きゃくしつ)売上あげ"
            }
        },

            
        {
            question: " 預り金(あずかりきん)の意味として、正しいものを選びなさい。",
            questionKey: "soal2",
            correctAnswer: "デポジット",
            options: {
                "A": " デポジット",
                "B": "販売料金(はんばいりょうきん)",
                "C": "パンフレット料金(りょうきん)"
            }
        },

        {
            question: " タリフの意味として、正しいものを選びなさい。",
            questionKey: "soal3",
            correctAnswer: "料金表(りょうきんひょう)",
            options: {
                "A": "部屋割り料金(へやわりりょうきん)",
                "B": "宿泊名簿(しゅくはくめいぼ)",
                "C": "料金表(りょうきんひょう)"
            }
        },

        {
            question: " お客様がアレルギーを持ち(もち)のかたが来（き）た場合は、どうすればよいですか？",
            questionKey: "soal4",
            correctAnswer: "スタフがキチンに情報(じょうほう)を共有(きょうゆう)する",
            options: {
                "A": "スタフがキチンに情報(じょうほう)を共有(きょうゆう)する",
                "B": "キチンスタフに隠す(かくす)",
                "C": "上司（じょうし）を連絡(れんらく)する"
            }
        },

        {
            question: " 従業員(じゅうぎょういん)のみだしなみのポイントは何ですか。",
            questionKey: "soal5",
            correctAnswer: "清潔感(せいけつかん)",
            options: {
                "A": "清潔感(せいけつかん)",
                "B": "普通（ふつう）はロレクス腕時計(うでどけい)を着用(ちゃくよう)もよい",
                "C": "いつも目立(めだ)つ服装(ふくそう)をする"
            }
        },

        {
            question: " 見送（みおく）りときは、私（わたし）たちがお客様に言葉使（ことばづか）いとして、正しいものを選びなさい？",
            questionKey: "soal6",
            correctAnswer: "ありがとうございました",
            options: {
                "A": "さようなら",
                "B": "ありがとうございました",
                "C": "じゃね"
            }
        },

        {
            question: " ホテルで予約（よやく）に関（かん）する必要事項(ひつようじこう）を確認（かくにん）するとき、何を確認すべきでしょうか",
            questionKey: "soal7",
            correctAnswer: "身分証明書（みぶんしょうめいしょ）を提示（ていじ）する",
            options: {
                "A": "部屋数(へやすう)",
                "B": "ペット有無(うむ)",
                "C": "身分証明書（みぶんしょうめいしょ）を提示（ていじ）する"
            }
        },

        {
            question: " 客室(きゃくしつ)へご案内(あんない)するとちゅうではお客様に説明(せつめい)こと。間違って(まちがって)いるものを選びなさい？",
            questionKey: "soal8",
            correctAnswer: "宿泊施設（しゅくはくしせつ）の所有社名(しょゆうしゃめい)",
            options: {
                "A": "非常口(ひじょうぐち）",
                "B": "宿泊施設（しゅくはくしせつ）の所有社名(しょゆうしゃめい)",
                "C": "宿泊施設（しゅくはくしせつ）"
            }
        },

        {
            question: " お客様を出迎え(でむかえ)とき、言葉使（ことばづか）いとしてどちらか？正しいものを選びなさい",
            questionKey: "soal9",
            correctAnswer: "いらっしゃいませ",
            options: {
                "A": "オス！",
                "B": "いらっしゃいませ",
                "C": "なにかごよろしいでしょうか"
            }
        },

        {
            question: " 予定(よてい)の時間（じかん）より早く(はやく)チェックインすること。正しいものを選びなさい",
            questionKey: "soal10",
            correctAnswer: "アーリーチェックイン",
            options: {
                "A": "アーリーチェックアウト",
                "B": "アーリーチェックイン",
                "C": "レイトチェックイン"
            }
        },

        {
            question: " お客様とのコミュニケーションを強化し施設のブランドを育成することができることについて何を活用しますか？",
            questionKey: "soal11",
            correctAnswer: "SNS",
            options: {
                "A": "SNS",
                "B": "FIT",
                "C": "VIP"
            }
        },
        {
            question: " インバウンドの意味として、正しいものを選びなさい",
            questionKey: "soal12",
            correctAnswer: "日本に来（く）る外国人(がいこくじん)旅行者(りょこうしゃ)のこと",
            options: {
                "A": "日本人（にほんじん）が海外(かいがい)に旅行(りょこう)へ行（い）くことを指す(さす)",
                "B": "外国人(がいこくじん)の日本に働(はたら)いています",
                "C": "日本に来（く）る外国人(がいこくじん)旅行者(りょこうしゃ)のこと"
            }
        },
        {
            question: " 旅行者(りょこうしゃ)が少ない(すくない)じきのこと。正しいものを選びなさい。",
            questionKey: "soal13",
            correctAnswer: "オフシズン",
            options: {
                "A": "オンシズン",
                "B": "シズンオフ",
                "C": "オフシズン"
            }
        },
        {
            question: "  おなじ宿泊施設(しゅくはくしせつ)で２泊以上（にぱくいじょう）の連続(れんぞく)した宿泊(しゅくはく)を指(さ)す正しいものを選びなさい。",
            questionKey: "soal14",
            correctAnswer: "連泊(れんぱく)",
            options: {
                "A": "連泊(れんぱく)",
                "B": "リピーター",
                "C": "B&B"
            }
        },
        {
            question: " 宿泊料金(しゅくはくりょうきん)のなかにすべてのサービス費用(ひよう)が含(ふく)まれているプランであること。それは何ですか？",
            questionKey: "soal15",
            correctAnswer: "オールインクルーシブ",
            options: {
                "A": "ダイナミックプライシング",
                "B": "オールインクルーシブ",
                "C": "ダイレクトブロッキング"
            }
        },
        
        {
            question: " 中居(なかい)の意味として。間違ってものを選びなさい。",
            questionKey: "soal16",
            correctAnswer: "旅館(りょかん)の最高責任者(さいこうせきにんしゃ)",
            options: {
                "A": "旅館(りょかん)の最高責任者(さいこうせきにんしゃ)",
                "B": "旅館（りょかん）で食事(しょくじ)の準備(じゅんび)するスタフ",
                "C": "旅館（りょかん）でへやを案内(あんない)するスタフ"
            }
        },
        {
            question: " テーブルなどで並（なら）べられた料理(りょうり)のなかから自分（じぶん）の食べる分だけを自由(じゆう)に取(と)って来（く）る食べ物のこと。正しいものを選びなさい。",
            questionKey: "soal17",
            correctAnswer: "ブッフェ",
            options: {
                "A": "ブッフェ",
                "B": "アラカルト",
                "C": "コンプりメンタリー"
            }
        },
        {
            question: " お客様が帰(かえ)りの際にお見送(みおく)りするとき。お辞儀(おじぎ)は何度(なんど)ですか？",
            questionKey: "soal18",
            correctAnswer: "45度",
            options: {
                "A": "45度",
                "B": "30度",
                "C": "15度"
            }
        },
        {
            question: " ホテルに予約(よやく)するために電話(でんわ)するとき、何を注意(ちゅうい)すべきですか",
            questionKey: "soal19",
            correctAnswer: "宿泊日(しゅくはくひ)、宿泊日数(しゅくはくにっすう)、部屋数(へやかずう)、予約人数(よやくにんずう)",
            options: {
                "A": "お名前（なまえ）、到着時間(とうちゃくじかん)、部屋数(へやかずう)、精算方法(せいさんほうほう)",
                "B": "氏名(しめい)、電話番号(でんわばんご)、予約人数(よやくにんずう)、予約者（よやくしゃ）の性別(せいべつ)",
                "C": "宿泊日(しゅくはくひ)、宿泊日数(しゅくはくにっすう)、部屋数(へやかずう)、予約人数(よやくにんずう)"
            }
        },
        {
            question: " フリープランはどれが含(ふく)まれているか？",
            questionKey: "soal20",
            correctAnswer: "宿泊施設(しゅくはくしせつ)、空港(くうこう)",
            options: {
                "A": "宿泊施設(しゅくはくしせつ)、レンタカ、空港(くうこう)",
                "B": "宿泊施設(しゅくはくしせつ)、温泉(おんせん)、朝食(ちょうしょく)",
                "C": "宿泊施設(しゅくはくしせつ)、空港(くうこう)"
            }
        },
        {
            question: " ホテルのチェックアウトとチェックインの間(あいだ)の意味は、何ですか？",
            questionKey: "soal21",
            correctAnswer: "アイドルタイム",
            options: {
                "A": "どんでん",
                "B": "アイドルタイム",
                "C": "レイトチェックイン"
            }
        },
        {
            question: " チェックインを済(す)まされたお客様が、小（ちい）さなバッグをフロントデスクに忘(わす)れたまま、客室(きゃくしつ)に入(はい)られた。このときの対応(たいおう)として、正しいものを選びなさい",
            questionKey: "soal22",
            correctAnswer: "でんわで連絡(れんらく)した後(あと)、客室(きゃくしつ)へ届（とど）けに向（む）かう",
            options: {
                "A": "お客様に連絡(れんらく)せずに、直接客室(ちょくせつきゃくしつ)へ届(とど)けに向(む)かう",
                "B": "でんわで連絡(れんらく)した後(あと)、客室(きゃくしつ)へ届（とど）けに向（む）かう",
                "C": "お客様に取(と)りに来(く)るように、客室(きゃくしつ)へ連絡(れんらく)する"
            }
        },
        
        {
            question: " フロントでお客様にルームキーとルーミングカードを手渡(てわた)すときは、何が確認(かくにん)しなけれなならない。正しいものを選びなさい",
            questionKey: "soal23",
            correctAnswer: "氏名(しめい)、部屋番号(へやばんごう)",
            options: {
                "A": "氏名(しめい)、予約人数(よやくにんずう)",
                "B": "お名前、電話番号(でんわばんご)",
                "C": "氏名(しめい)、部屋番号(へやばんごう)"
            }
        },
        {
            question: " ゴミが落ちているとき、私たちがどうすればいいか？",
            questionKey: "soal24",
            correctAnswer: "手で拾(ひろ)って、捨(す)てる",
            options: {
                "A": "手で拾(ひろ)って、捨(す)てる",
                "B": "手が汚(よご)れるので拾(ひろ)わないで、そのままにして置く",
                "C": "同志（どうし）を呼（よ）ぶ、そして同志(どうし)にゴミを拾(ひろ)わせる"
            }
        },
        {
            question: " 災害発生時(さいがいはっせいじ)のとき、私たちがどうすればいいか？",
            questionKey: "soal25",
            correctAnswer: "利用客(りようきゃく)を落(お)ち着(つ)かせる、避難誘導(ひなんゆうどう)する",
            options: {
                "A": "エレベーターを使う(つかう)",
                "B": "お客様に階段(かいだん)を使（つか）わせる",
                "C": "利用客(りようきゃく)を落(お)ち着(つ)かせる、避難誘導(ひなんゆうどう)する"
            }
        },
        {
            question: " 急終車(きゅうきゅうしゃ)の電話番号(でんわばんご)はどちらか？",
            questionKey: "soal26",
            correctAnswer: "119",
            options: {
                "A": "119",
                "B": "110",
                "C": "118"
            }
        },
        {
            question: " 利用客(りようきゃく)が商品(しょうひん)やサービスに対(たい)する評価(ひょうか)をウェブサイトなどに書(か)き込(こ)み。正しいものを選びなさい",
            questionKey: "soal27",
            correctAnswer: "口コミ",
            options: {
                "A": "フェードバック",
                "B": "クレーム",
                "C": "口コミ"
            }
        },
        {
            question: " 深夜（しんや）のとき、お客様に対応(たいおう)するため、フロント業務(ぎょうむ)は何人（なんにん）ですか？正しいものを選びなさい",
            questionKey: "soal28",
            correctAnswer: "２名以上(めいいじょう)",
            options: {
                "A": "２名以上(めいいじょう)",
                "B": "普通(ふつう)はひとりもだいじょうぶ",
                "C": "二人（ふたり）スタフはいっしょうで働(はたら)けない"
            }
        },
        {
            question: " お客様がクレジットカードでお支払（しはら）うとき、何か注意(ちゅうい)でしょうか？間違ってものを選びなさい",
            questionKey: "soal29",
            correctAnswer: "お客様の生年月日(せいねんがっぴ)",
            options: {
                "A": "お客様の生年月日(せいねんがっぴ)",
                "B": "宛名(あてな)",
                "C": "総額(そうがく)"
            }
        },
        {
            question: " ホテルが行(おこな）うサービスのうち、料飲部門(りょういんぶもん)の仕事(しごと)に含（ふく）まれるものとして、正しいものを選びなさい。",
            questionKey: "soal30",
            correctAnswer: "ルームサービス",
            options: {
                "A": " ルームサービス",
                "B": "近隣施設（きんりんしせつ）の案内(きんりんしせつあんない)",
                "C": "いふくのクリーニングのサービス"
            }
        },
        {
            question: " 内(うち)に、喫煙（きつえん）ができる部屋（へや）はどのぐらいありますか？",
            questionKey: "soal31",
            correctAnswer: "30室（しつ）あります",
            options: {
                "A": "30室（しつ）あります",
                "B": "シングル20室",
                "C": "ツイン10室"
            }
        },
        {
            question: " 近隣(きんりん)の観光(かんこう)スポットの営業時間(えいぎょうじかん)はいつですか？",
            questionKey: "soal32",
            correctAnswer: "午前（ごぜん）10:00～午後（ごご）9:00まで",
            options: {
                "A": "午前（ごぜん）10:00",
                "B": "午前（ごぜん）10:00～午後（ごご）9:00まで",
                "C": "午後（ごご）9:00まで"
            }
        },
        {
            question: " カジュアルダイニングのメニューはなんですか？",
            questionKey: "soal33",
            correctAnswer: "ステーキ",
            options: {
                "A": "蕎麦（そば）",
                "B": "ステーキ",
                "C": "焼き餃子（やきぎょうざ）"
            }
        },
        
        {
            question: " カジュアルダイニングの営業時間（えいぎょうじかん）はいつまでですか？",
            questionKey: "soal34",
            correctAnswer: "午後（ごご）10:30まで",
            options: {
                "A": "午後（ごご）12:00まで",
                "B": "午前（ごぜん）9:30まで",
                "C": "午後（ごご）10:30まで"
            }
        },

        {
            question: " JR日本駅（にほんえき）から車（くるま）で、どのぐらいかかりますか？",
            questionKey: "soal35",
            correctAnswer: "３分かかります",
            options: {
                "A": "３分かかります",
                "B": "１５分かかります",
                "C": "１０分かかります"
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
