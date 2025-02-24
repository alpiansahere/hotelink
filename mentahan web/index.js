document.getElementById("nameForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const musicToggle = document.getElementById("musicToggle").checked;
    const music = document.getElementById("backgroundMusic");
    
    if (musicToggle) {
        music.play();
    } else {
        music.pause();
        music.currentTime = 0;
    }
    
    const userName = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const konfirmasiMulai = confirm("Anda akan memulai kuis dengan waktu 30 menit. Apakah Anda siap?");
    if (!konfirmasiMulai) {
        alert("Silakan persiapkan diri Anda sebelum memulai kuis.");
        return;
    }

    document.getElementById("nameContainer").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("userName").innerText = `Nama: ${userName}`;
    document.getElementById("userEmail").innerText = `Email: ${email}`;

    // Mulai timer 30 menit (1800 detik)
    startTimer(1 * 60);
});

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(function () {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        document.getElementById("timer").innerText = `Waktu tersisa: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (--timer < 0) {
            clearInterval(interval);
            alert("Waktu habis! Jawaban akan langsung dikirim dan hasil ditampilkan.");
            showResults();
        }
    }, 1000);
}

function showResults() {
    let correctCount = 0;
    let totalQuestions = 1;
    let feedbackHtml = '';
    const form = document.getElementById("quizForm");
    const questions = [
        {
            question: "チェックアウトについて正しいものを一つ選びなさい",
            questionKey: "soal1",
            correctAnswer: "お客様がホテルや旅館（りょかん）から退出（たいしゅつ）する時に行（おこ）なう手続（てつづ）き ",
            options: {
                "A": "お客様がホテルや旅館（りょかん）から退出（たいしゅつ）する時に行（おこ）なう手続（てつづ）き ",
                "B": "ふたつのシングルベッドのお部屋",
                "C": "ツインルーム"
            }
        }
    ];

    questions.forEach((q, index) => {
        const userAnswerKey = form[q.questionKey]?.value || "";
        const userAnswerText = q.options[userAnswerKey] || "Tidak dijawab";

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
                    <p class="wrong-text">Jawaban Anda: <br> ${userAnswerText} ❌</p>
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
}

document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const konfirmasi = confirm("Apakah Anda yakin ingin mengirim jawaban?");
    if (!konfirmasi) {
        alert("Silakan periksa kembali jawaban Anda.");
        return;
    }

    alert("Jawaban berhasil dikirim!");
    showResults();
});
