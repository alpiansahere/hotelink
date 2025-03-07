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
            question: " チェックアウトについて正しいものを一つ選びなさい",
            questionKey: "soal1",
            correctAnswer: "お客様がホテルや旅館（りょかん）から退出（たいしゅつ）する時に行（おこ）なう手続（てつづ）き",
            options: {
                "A": "お客様がホテルや旅館（りょかん）から退出（たいしゅつ）する時に行（おこ）なう手続（てつづ）き",
                "B": "お客様が館外（かんがい）の外（そと）にお出（で）かけするとき",
                "C": "買（か）いたいものがあって、外（そと）に出（で）るとき"
            }
        },
        
        
        
        
        {
            question: " お客様が予約（よやく）のキャンセルを求（もと）めた場合についての払（はら）う料金（はらうりょうきん）は何ですか？",
            questionKey: "soal2",
            correctAnswer: "キャンセル料（りょう）",
            options: {
                "A": "宿泊税（しゅくはくぜい）",
                "B": "サービス料（りょう）",
                "C": "キャンセル料（りょう）"
            }
        },
        
        
        
        
        {
            question: " 素泊（すど）まりプランについて正しいものを一つ選びなさい",
            questionKey: "soal3",
            correctAnswer: "食事（しょくじ）をせずに宿泊（しゅくはく）プランのこと",
            options: {
                "A": "宿泊（しゅくはく）とちょうしょくが含（ふく）まれているプランのこと",
                "B": "食事（しょくじ）をせずに宿泊（しゅくはく）プランのこと",
                "C": "朝食（ちょうしょく）と夕食（ゆうしょく）と宿泊（しゅくはく）が含（ふく）まれているプランのこと"
            }
        },
        
        
        
        
        {
            question: " 宿泊（しゅくはく）するゲストにどんな呼（よ）び方をしますか？",
            questionKey: "soal4",
            correctAnswer: "お客様（きゃくさま）",
            options: {
                "A": "お客さん",
                "B": "あなた",
                "C": "お客様（きゃくさま）"
            }
        },
        
        
        
        
        {
            question: " 館内（かんない）の従業員（じゅうぎょおういん）の身（み）だしなみについて正しいものを一つ選びなさい。",
            questionKey: "soal5",
            correctAnswer: "少（すこ）しよげれていたらすぐに拭（ふ）いて、きれいな状態（じょうたい）を保（たも）つ",
            options: {
                "A": "靴（くつ）は脱（ぬ）ぎやすいようにかかとの部分（ぶぶん）を踏（ふ）んで、靴（くつ）を履（は）く",
                "B": "少（すこ）しよげれていたらすぐに拭（ふ）いて、きれいな状態（じょうたい）を保（たも）つ",
                "C": "靴底（くつぞこ）は減（へ）りすぎてもよい"
            }
        },
        
        
        
        
        {
            question: " レセプションの仕事（しごと）について正しいものを一つ選びなさい。",
            questionKey: "soal6",
            correctAnswer: "お客様のお出迎え（でむかえ）からお見送（みおく）りまで様々（さまざま）な手続き（てつづき）を担当（たんとう）するスタッフのこと",
            options: {
                "A": "お客様の荷物（にもつ）を客室（きゃくしつ）まで運（はこ）ぶ役名（やくめい）を持（も）つ",
                "B": "お客様のお出迎え（でむかえ）からお見送（みおく）りまで様々（さまざま）な手続き（てつづき）を担当（たんとう）するスタッフのこと",
                "C": "ワインを作（つく）る仕事（しごと）をすること"
            }
        },
        
        
        
        
        {
            question: " ホテルや旅館（りょかん）で朝食（ちょうしょく）の基準料理（きじゅんりょうり）は何ですか？",
            questionKey: "soal7",
            correctAnswer: "オムレツ",
            options: {
                "A": "オムレツ",
                "B": "チョコレートケーキ",
                "C": "ピッザー"
            }
        },
        
        
        
        
        {
            question: " お客様の荷物（にもつ）を運（はこ）ぶ際、間違っているものを選んでください",
            questionKey: "soal8",
            correctAnswer: "お客様の荷物（にもつ）を部屋（へや）の前（まえ）のろうかにおきます",
            options: {
                "A": "丁寧（ていねい）にお客様の荷物（にもつ）をはこびます",
                "B": "お客様の荷物（にもつ）を部屋（へや）の前（まえ）のろうかにおきます",
                "C": "お客様の部屋内（へやない）まで荷物（にもつ）を運（はこ）びます"
            }
        },
        
        
        
        
        {
            question: " 地震（じしん）が起（お）こった際はどうすれば対応（たいおう）しますか？",
            questionKey: "soal9",
            correctAnswer: "階段（かいだん）で避難（ひなん）させる",
            options: {
                "A": "エレベーターで迅速的(じんそくてき）にお客様を避難（ひなん）させる",
                "B": "階段（かいだん）で避難（ひなん）させる",
                "C": "建物（たてもの）が高（たか）い場合（ばあい）は避難（ひなん）ロープでホテルを降りさせない"
            }
        },
        
        
        
        
        {
            question: " チェックインとチェックアウトの最初(さいしょ)を手続き(てつづき)している担当者(たんとうしゃ)。正しいものを選びなさい。",
            questionKey: "soal10",
            correctAnswer: "レセプション",
            options: {
                "A": "アテンダント",
                "B": "フロントクラーク",
                "C": "レセプション"
            }
        },
        
        
        
        {
            question: " お客様が手伝（てつだ）いを求（もと）めた時、自分がお客様（きゃくさま）の希望（きぼう）にこたえられない場合について正しいものを一つ選びなさい。",
            questionKey: "soal11",
            correctAnswer: "自分でできないときは上司（じょうし）に連絡（れんらく）する",
            options: {
                "A": "自分でできないときは上司（じょうし）に連絡（れんらく）する",
                "B": "お客様の希望（きぼう）に答（こた）える",
                "C": "後輩（こうはい）にやらせる"
            }
        },
        
        
        
        
        {
            question: " 自分（じぶん）の仕事（しごと）が忙（いそが）しいとき、お客様が手伝（てつだ）いを求（もと）めた場合（ばあい）、正しいものを一つ選びなさい。",
            questionKey: "soal12",
            correctAnswer: "お客様を優先（ゆうせん）する",
            options: {
                "A": "自分（じぶん）の仕事（しごと）を先（さき）に終（お）わらせてお客様を手伝（てつだ）う",
                "B": "お客様が怒（おこ）っていなければ、無視（むし）してもよい",
                "C": "お客様を優先（ゆうせん）する"
            }
        },
        
        
        
        {
            question: " 利用客(りようきゃく)が商品(しょうひん)やサービスに対(たい)する評価(ひょうか)をウェブサイトなどに書(か)き込(こ)み。正しいものを選びなさい。",
            questionKey: "soal13",
            correctAnswer: "口コミ",
            options: {
                "A": "フェードバック",
                "B": "クレーム",
                "C": "口コミ"
            }
        },
        
        
        
        
        {
            question: " レストランでテーブルマナーについて、間違いものを選びなさい",
            questionKey: "soal14",
            correctAnswer: "テーブルで食べるときは帽子（ぼうし）をかぶって食べます",
            options: {
                "A": "口（くち）の中（なか）に包（つつ）んでいる食べ物（たべもの）があるときにしゃべりません",
                "B": "テーブルで食べるときは帽子（ぼうし）をかぶって食べます",
                "C": "食（た）べる前（まえ）に'いただきます'と言う"
            }
        },
        
        
        
        
        {
            question: " 予約（よやく）せずに立（た）ちよった顧客（こきゃく）について正しいものを選びなさい",
            questionKey: "soal15",
            correctAnswer: "ウオークイン",
            options: {
                "A": "ウオークイン",
                "B": "FIT",
                "C": "VIP"
            }
        },
        
        {
            question: " 広報業務（こうほうぎょうむ）の仕事（しごと）について正しいものを選びなさい",
            questionKey: "soal16",
            correctAnswer: "情報発信",
            options: {
                "A": "フロントで仕事をする",
                "B": "他（ほか）の人にお客様の情報（じょうほう）を教（おし）える",
                "C": "情報発信"
            }
        },
        
        
        {
            question: " 和食（わしょく）では旬（しゅん）っていう言葉（ことば）について正しいものを選びなさい",
            questionKey: "soal17",
            correctAnswer: "新鮮（しんせん）で味（あじ）がいい食材（しょくざい）を使います",
            options: {
                "A": "新鮮（しんせん）で味（あじ）がいい食材（しょくざい）を使います",
                "B": "春夏秋冬（しゅんかしゅとう）の食材（しょくざい）ではない",
                "C": "一汁三菜（いちじゅうさんさい）の基本（きほん）です"
            }
        },
        
        
        
        
        {
            question: " ビールをお客様にリクエストされたときについて正しいものを選びなさい",
            questionKey: "soal18",
            correctAnswer: "泡（あわ）を適切（てきせつ）に作（つく）って注（そそ）ぐ",
            options: {
                "A": "泡（あわ）を適切（てきせつ）に作（つく）って注（そそ）ぐ",
                "B": "ビールをコップいっぱいまで注（そそ）ぐ",
                "C": "ビールを炭酸水（たんさんすい）とまぜる"
            }
        },
        
        
        
        
        {
            question: " 宿泊施設内（しゅくはくしせつない）でお客様をご案内（あんない）する際（さい）には正しいものを選びなさい",
            questionKey: "soal19",
            correctAnswer: "2~3歩（ぽ）、左前方（ひだりぜんぽう）を、お客様の歩調合（ほちょうあ）わせながら歩（ある）きます",
            options: {
                "A": "お客様の後（うし）ろに歩（ある）きます",
                "B": "お客様の前（まえ）に歩（ある）いて、後（うし）ろのお客様を見（み）ないで歩（ある）きつづきます",
                "C": "2~3歩（ぽ）、左前方（ひだりぜんぽう）を、お客様の歩調合（ほちょうあ）わせながら歩（ある）きます"
            }
        },
        
        
        
        
        {
            question: " 宿泊（しゅくはく）の中（なか）に朝食（ちょうしょく）のみ含（ふく）まれている宿泊（しゅくはく）プランについて正しいものを選びなさい",
            questionKey: "soal20",
            correctAnswer: "B&B",
            options: {
                "A": "B&B",
                "B": "連泊（れんぱく）",
                "C": "一泊二食（いっぱくにしょく）"
            }
        },
        
        
        
        {
            question: " .ワインに関（かん）する専門知識（せんもんちしき）を持（も）ち、ワインが専門職（せんもんしょく）として、正しいものを選びなさい",
            questionKey: "soal21",
            correctAnswer: "ソムリエ",
            options: {
                "A": "ワイトレす",
                "B": "チェフ",
                "C": "ソムリエ"
            }
        },
        
        
        
        
        {
            question: " 日本（にほん）ではチップを受（う）けとる習慣（しゅうかん）について正しいものを選びなさい",
            questionKey: "soal22",
            correctAnswer: "日本人（にほんじん）や外国人（がいこくじん）にチップを求（もと）めない",
            options: {
                "A": "日本人（にほんじん）や外国人（がいこくじん）にチップを求（もと）めない",
                "B": "チップを受（うけ）けなければサービスしません",
                "C": "チップをいつものときも求（もと）めることにする"
            }
        },
        
        
        
        
        {
            question: " 車（くるま）いすのお客様（きゃくさま）とコミュニケーションを取（と）る際（さい）は正しいものを選びなさい",
            questionKey: "soal23",
            correctAnswer: "お客様（きゃくさま）と目（め）の高（たか）さを合（あ）わせて対応（たいおう）すること",
            options: {
                "A": "目（め）は会（あ）わせずに話（はな）すこと",
                "B": "姿勢（しせい）はいつもと同（おな）じ立っていること",
                "C": "お客様（きゃくさま）と目（め）の高（たか）さを合（あ）わせて対応（たいおう）すること"
            }
        },
        
        
        
        
        {
            question: " 館内施設（かんないしせつ）の衛生管理（えいせいかんり）について正しいものを選びなさい",
            questionKey: "soal24",
            correctAnswer: "仕事（しごと）する前後（ぜんご）に手洗（てあら）いを心（こころ）がけます",
            options: {
                "A": "テーブルが汚（よご）れていたらそのまま拭（ふ）き取（と）らない",
                "B": "仕事（しごと）する前後（ぜんご）に手洗（てあら）いを心（こころ）がけます",
                "C": "お皿洗（さらあら）うときは乾（かわ）かさないで自然（しぜん）に乾（かわ）かさせる"
            }
        },
        
        
        
        
        {
            question: " レストランのテーブルが汚（よご）れていたらどんな行動（こうどう）を取（と）るか正しいものを選びなさい",
            questionKey: "soal25",
            correctAnswer: "すぐにカトラリーを下（さ）げてテーブルを拭（ふ）き取（と）ったら消毒（しょうどく）することです",
            options: {
                "A": "すぐにカトラリーを下（さ）げてテーブルを拭（ふ）き取（と）ったら消毒（しょうどく）することです",
                "B": "ほかの従業員（じゅうぎょういん）にやらせる",
                "C": "担当者（たんとうしゃ）を呼（よ）ぶ"
            }
        },
        
        
        
        
        {
            question: " 自社（じしゃ）のウェブサイトでは何を投稿（とうこう）しますか、間違っているものを選びなさい",
            questionKey: "soal26",
            correctAnswer: "住所（じゅうしょ）や社長（しゃちょう）の名前（なまえ）",
            options: {
                "A": "住所（じゅうしょ）や社長（しゃちょう）の名前（なまえ）",
                "B": "館内施設（かんないしせつ）の写真（しゃしん）",
                "C": "予約情報（よやくじょうほう）"
            }
        },
        
        
        
        {
            question: " お客様（きゃくさま）の目（め）にかからないとき、そして仕事（しごと）のとき、従業員（じゅうぎょういん）として、正しいものを選びなさい",
            questionKey: "soal27",
            correctAnswer: "仕事（しごと）の内容以外（ないよういがい）の会話（かいわ）は控（ひか）えます",
            options: {
                "A": "仕事（しごと）の内容以外（ないよういがい）の会話（かいわ）は控（ひか）えます",
                "B": "裏方（うらかた）はお客様（きゃくさま）のことを雑談（ざつだん）はしてもよい",
                "C": "レストランのキャッサーはお客様（きゃくさま）の前（まえ）で雑談（ざつだん）しなければならない"
            }
        },
        
        
        
        
        {
            question: " お客様から、施設側（しせつがわ）がいい評価（ひょうか）を求（もと）めたいとき従業員（じゅうぎょういん）としてどんな行動（こうどう）を取（と）りますか",
            questionKey: "soal28",
            correctAnswer: "お客様（きゃくさま）にいいおもてなしとサービスをする",
            options: {
                "A": "お客様（きゃくさま）にいいおもてなしとサービスをする",
                "B": "お客様（きゃくさま）からチップを受（う）けなければサービスしません",
                "C": "障害（しょうがい）を持（も）っているお客様には特別（とくべつ）な扱（あつか）いをします"
            }
        },
        
        
        
        
        {
            question: " 宿泊（しゅくはく）する時（とき）に客室（きゃくしつ）にあるシャンプーやタオルなどについて正しいものを選びなさい",
            questionKey: "soal29",
            correctAnswer: "アメニティ類（るい）",
            options: {
                "A": "カスター",
                "B": "コンプリメンタリー",
                "C": "アメニティ類（るい）"
            }
        },
        
        
        
        
        {
            question: " サービスの利用（りよう）を保証（ほしょう）するために支払（しはら）われる金額（きんがく）について間違っているものを選びなさい",
            questionKey: "soal30",
            correctAnswer: "サービス料（りょう）",
            options: {
                "A": "預（あず）かり金（きん）",
                "B": "デポジット",
                "C": "サービス料（りょう）"
            }
        },
        
        
        
        
        {
            question: " チェックイン時間に関しては正しいものを一つ選びなさい。",
            questionKey: "soal31",
            correctAnswer: "15時から",
            options: {
                "A": "14時から",
                "B": "15時から",
                "C": "12時から"
            }
        },
        
        
        
        
        {
            question: " お客様が露天風呂（ろてんぶろう）に入浴（にゅうよく）したい場合、スタッフとしての役割（やくわり）はどこへ案内（あんない）しますか？",
            questionKey: "soal32",
            correctAnswer: "10F",
            options: {
                "A": "10F",
                "B": "３Ｆ",
                "C": "４Ｆ"
            }
        },
        
        
        
        {
            question: " お客様が朝食を食べたいときはどこへ案内すうればいいですか？",
            questionKey: "soal33",
            correctAnswer: "1F",
            options: {
                "A": "2F",
                "B": "3F",
                "C": "1F"
            }
        },
        
        
        
        
        {
            question: " 客室（きゃくしつ）に予約（よやく）が埋（う）まったお部屋（へや）が80室（しつ）,OCCは何パーセントですか？",
            questionKey: "soal34",
            correctAnswer: "80%",
            options: {
                "A": "40%",
                "B": "60%",
                "C": "80%"
            }
        },
        
        
        
        
        {
            question: " これは何の絵（え）ですか？",
            questionKey: "soal35",
            correctAnswer: "消火器（しょうかき）",
            options: {
                "A": " 火災報知器（かさいほうちき）",
                "B": " 消火器（しょうかき）",
                "C": "消化器（しょうかき）"
            }
        },
        
        
        
        
        {
            question: " E wo mite tadashi kotae erabinasai.",
            questionKey: "soal36",
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
