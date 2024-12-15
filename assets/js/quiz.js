const container = document.querySelector('.container');
const content = document.querySelector('.content');

// Tema değişikliği için
if (localStorage.isDarkMode === 'true') {
  document.body.classList.add('darkMode');
  themeChange.checked = true;
} else {
  document.body.classList.remove('darkMode');
  themeChange.checked = false;
}

function changeTheme() {
  if (themeChange.checked) {
    document.body.classList.add('darkMode');
    localStorage.isDarkMode = true;
  } else {
    document.body.classList.remove('darkMode');
    localStorage.isDarkMode = false;
  }
}

themeChange.addEventListener("change", changeTheme);

// datayı çekmek için
let data = null;

async function init() {
  data = await fetch('assets/data/data.json').then(r => r.json());

  for (const quiz of data.quizzes) {
    content.innerHTML += `
      <h4 class="card"><img src="${quiz.icon}" alt="title icon">${quiz.title}</h4>
    `;
  }

  addCardListeners(); // konulara tıklandığında soru gösterme olayı
}

// konulara tıklandığında soru gösterme olayı
function addCardListeners() {
  const cards = document.querySelectorAll('.card');
  for (const card of cards) {
    card.addEventListener('click', function () {
      const title = this.innerText; // Konu başlığını almak için kullanılan geçici değişken
      cardTxt = this.innerText; // Konu başlığını uzun vadede saklayıp başka yerde kullanmak için
      querys = handleTitle(title); // Seçilen başlık bu fonksiyona gönderilir ve soruları almak için çağırılır
      handleQuestions(); // Sorular işlenir
      displayQuestions(); // Sorular ekranda gösterilir
    });
  }
}

let querys = []; // soruları ham halleriyle saklamak
let index = 1; // sorulara numara vermek için 1den başlatıyoruz

const cards = document.querySelectorAll('.card');
let cardTxt = ""; // konu isminin tutulacağı boş string

function handleTitle(title) {
  for (const quiz of data.quizzes) { // Tüm quizleri dolaş
    if (quiz.title === title) { // Eğer quiz başlığı seçilen başlıkla eşleşirse
      return quiz.questions; // O quizin sorularını döndür
    }
  }
}

let formattedQuestions = []; // soruları numaralandırılmış formatta saklamak

function handleQuestions() {
  formattedQuestions = [];
  querys.forEach((que) => {
    // soru metinlerinde yer alabilecek riskli semboller için
    const sanitizedQuestion = que.question.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    formattedQuestions.push({
      number: index, // her soruya numara atamak için
      question: sanitizedQuestion, // Temizlenmiş soru metni
      selects: que.options, // Sorunun seçenekleri (A, B, C, D)
      answer: que.answer, // Doğru cevap
    });
    index++;
  });
  displayQuestions(); // sorular işlendikten sonra ekranda gösterilmesi için bu fonksiyonu çağırıyoruz
}

let i = 0; // görüntülenen sorunun indeksini tutar, formattedQuestions dizisindeki sorular arasında gezinmek için
let correctAnswerCounter = 0; // doğru cevaplanan soruların sayısını tutar

const mainText = document.querySelector('.mainText');
const header = document.querySelector('.header');
const headerSubject = document.querySelector('.headerSubject');
const progressBar = document.querySelector('.progressBarInner');

let selectedOption = null; // kullanıcının seçtiği şıkkı tutar

//soruları ekrana yazdırmak için
function displayQuestions() {
  warnTxt.style.display = 'none';
  content.innerHTML = '';
  const selections = ["A", "B", "C", "D"];
  formattedQuestions[i].selects.forEach((option, index) => {
    const optionBtn = document.createElement('button');
    const optionText = option.replace(/</g, "&lt;").replace(/>/g, "&gt;"); // cevap metinlerinde yer alabilecek riskli semboller için
    // cevap şıklarının yazdırıldığı alan
    optionBtn.innerHTML = `
    <div class="selectionBox">
      <h5 class="selections">${selections[index]}</h5>
      <p class="optionText">${optionText}</p>
    </div>
    `;
    optionBtn.classList.add('optionBtn');
    content.appendChild(optionBtn);
  });

  // header alanında konu başlığının yazdırıldığı alan
  headerSubject.innerHTML = `
      <div class="headerSubject">
      <img src="assets/img/${cardTxt.toLocaleLowerCase()}-icon.svg" alt="Quiz Subject Icon">
      <h3>${cardTxt}</h3>
      </div>
  `;

  // soruların ve progressbarın bulunduğu kısım
  mainText.innerHTML = `
      <div class="questionContent">
        <h5 class="questionNumber">Question ${formattedQuestions[i].number} of ${formattedQuestions.length}</h5>
        <h4 class="question">${formattedQuestions[i].question}</h4>
        <div class="progressBar">
         <div class="progressBarInner" style="width:${(i + 1) / formattedQuestions.length * 100}%;"></div>
        </div>
      </div>
    `;

  submitBtn.style.display = 'block';
  const optionBtns = document.querySelectorAll('.optionBtn');
  for (const option of optionBtns) {
    option.addEventListener('click', function () {

      // Daha önce seçili olan butonu kaldırıyoruz.
      if (selectedOption) {
        selectedOption.classList.remove('selected');

      }
      // Yeni seçimi kaydediyoruz ve stil ekliyoruz.
      selectedOption = option;
      selectedOption.classList.add('selected');
      // selectedOption.classList.toggle('selected');
    });
  }
}

// submit butonu oluşturma
const submitBtn = document.createElement('button');
submitBtn.classList.add('submitBtn'); // class verme
submitBtn.style.display = 'none'; // ilk ekranda gözükmesin
submitBtn.innerText = 'Submit Answer' // oluşturulan butonun içerisine metin yazma

const optionTexts = document.querySelectorAll('.optionText');
const optionBtns = document.querySelectorAll('.optionBtn');
const containerInner = document.querySelector('.container-inner');
const bottom = document.querySelector('.bottom');
const bottomInner = document.querySelector('.bottom-inner');

submitBtn.addEventListener('click', function () {
  if (submitBtn.innerText === "Submit Answer") { // eğer butonun içerisindeki metin submit answer ise
    if (selectedOption) { // bir şık seçildiyse
      warnTxt.style.display = 'none'; // uyarı metnini gizli olarak tut

      // Kullanıcının seçtiği cevabı al
      const selectedTxt = selectedOption.querySelector('.optionText').innerText.trim(); // kullanıcının seçtiği şıkkı alma
      const correctAnswer = formattedQuestions[i].answer; // datada var olan doğru cevabı alma

      // Kullanıcının seçtiği şık ile doğru cevap eşitse skoru artır ve yeşil renkle işaretle
      if (selectedTxt === correctAnswer) {
        selectedOption.classList.add("green");
        correctAnswerCounter++;
      } else { // eşit değilse 
        selectedOption.classList.add("red"); // 
        // Doğru cevabı yeşil renkle işaretle
        const optionBtns = document.querySelectorAll('.optionBtn');
        for (const option of optionBtns) { // tüm şıkların üzerinde dön
          const optionTxt = option.querySelector('.optionText').innerText.trim(); // her şıkkın innerText'ini al ve trimle
          if (optionTxt === correctAnswer) { // doğru cevabı bulduysan
            option.classList.add("green"); // onu green sınıfı ile işaretle
          }
        }
      }
      // Buton metnini değiştir
      submitBtn.innerText = "Next Question";
    } else {
      warnTxt.style.display = 'flex'; // Eğer cevap seçilmemişse uyarı göster
    }
  } else if (submitBtn.innerText === "Next Question") {  // eğer butonun içerisindeki metin next question ise
    // Sonraki soruya geçiş
    i++;
    if (i < querys.length) { // eğer daha gösterilecek soru varsa
      displayQuestions(); // yeni sorulara birer birer geç
      submitBtn.innerText = "Submit Answer"; // her geçişte butonu tekrar "Submit Answer" yap
    } else {
      // Quiz tamamlandığında sonuçları göster
      containerInner.innerHTML = `
        <div class="resultContent">
          <h5>Quiz completed</h5>
          <h4>You scored...</h4>
        </div>
        <div class="resultRightSide">
          <div class="resultBox">
            <div class="resultSubject">
            <img src="assets/img/${cardTxt.toLocaleLowerCase()}-icon.svg" alt="Quiz Subject Icon">
            <h3>${cardTxt}</h3>
            </div>
            <p class="result">${correctAnswerCounter}</p>
            <span>out of ${formattedQuestions.length}</span>
          </div>
          <div class="toMainPage">
            <a href="/">Play Again</a>
          </div>
        </div>
      `;
      mainText.style.display = 'none';
      submitBtn.style.display = 'none';
    }
  }
});


bottomInner.appendChild(submitBtn);
const warnTxt = document.createElement('div');
warnTxt.innerHTML = `
    <img src="assets/img/false-icon.svg" alt="Quiz Subject Icon">
    <p>Please select an answer</p>
  `;

bottomInner.appendChild(warnTxt);
warnTxt.classList.add('warnTxt');

warnTxt.style.display = 'none';

init();