const data = {
  "quizzes": [
    {
      "title": "HTML",
      "icon": "/assets/img/html-icon.svg",
      "questions": [
        {
          "question": "What does HTML stand for?",
          "options": [
            "Hyper Trainer Marking Language",
            "Hyper Text Marketing Language",
            "Hyper Text Markup Language",
            "Hyper Text Markup Leveler"
          ],
          "answer": "Hyper Text Markup Language"
        },
        {
          "question": "Which of the following is the correct structure for an HTML document?",
          "options": [
            "<html><head></head><body></body></html>",
            "<head><html></html><body></body></head>",
            "<body><head></head><html></html></body>",
            "<html><body></body><head></head></html>"
          ],
          "answer": "<html><head></head><body></body></html>"
        },
        {
          "question": "Which HTML element is used to define the title of a document?",
          "options": ["<head>", "<title>", "<header>", "<top>"],
          "answer": "<title>"
        },
        {
          "question": "What is the purpose of the <body> tag in HTML?",
          "options": [
            "It defines the document's head section.",
            "It contains all the content such as text, images, and links.",
            "It is used to define the main content of an HTML document.",
            "It specifies the body of the email content in HTML."
          ],
          "answer": "It contains all the content such as text, images, and links."
        },
        {
          "question": "Which HTML tag is used to create a hyperlink?",
          "options": ["<hyperlink>", "<link>", "<a>", "<href>"],
          "answer": "<a>"
        },
        {
          "question": "Which tag is used to display images in HTML?",
          "options": ["<img>", "<image>", "<src>", "<pic>"],
          "answer": "<img>"
        },
        {
          "question": "What attribute is used to provide the path of an image in the <img> tag?",
          "options": ["link", "src", "href", "url"],
          "answer": "src"
        },
        {
          "question": "Which HTML tag is used to create an unordered list?",
          "options": ["<ul>", "<ol>", "<list>", "<li>"],
          "answer": "<ul>"
        },
        {
          "question": "What does the <br> tag do?",
          "options": [
            "It breaks the text into two sections.",
            "It creates a bold text.",
            "It inserts a line break.",
            "It adds a new row in a table."
          ],
          "answer": "It inserts a line break."
        },
        {
          "question": "In HTML, what does the `fieldset` tag do?",
          "options": [
            "It is used to group related data in a form.",
            "It sets the field to a fixed size.",
            "It automatically validates the fields within a form.",
            "It hides the fields in a form."
          ],
          "answer": "It is used to group related data in a form."
        },
      ]
    },
    {
      "title": "CSS",
      "icon": "/assets/img/css-icon.svg",
      "questions": [
        {
          "question": "What does CSS stand for?",
          "options": [
            "Colorful Style Sheets",
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Sheets"
          ],
          "answer": "Cascading Style Sheets"
        },
        {
          "question": "Which HTML attribute is used to define inline styles?",
          "options": ["styles", "style", "class", "font-style"],
          "answer": "style"
        },
        {
          "question": "How do you insert a comment in a CSS file?",
          "options": [
            "// this is a comment //",
            "/* this is a comment */",
            "-- this is a comment --",
            "<!-- this is a comment -->"
          ],
          "answer": "/* this is a comment */"
        },
        {
          "question": "Which property is used to change the background color of an element?",
          "options": [
            "color",
            "bgcolor",
            "background-color",
            "background"
          ],
          "answer": "background-color"
        },
        {
          "question": "How do you apply a style to all <p> elements?",
          "options": ["p { }", ".p { }", "#p { }", "all.p { }"],
          "answer": "p { }"
        },
        {
          "question": "Which property is used to change the font of an element?",
          "options": [
            "font-style",
            "text-style",
            "font-family",
            "typeface"
          ],
          "answer": "font-family"
        },
        {
          "question": "How do you make each word in a text start with a capital letter?",
          "options": [
            "text-transform: capitalize",
            "text-transform: uppercase",
            "text-style: capital",
            "font-transform: capitalize"
          ],
          "answer": "text-transform: capitalize"
        },
        {
          "question": "How do you select an element with the class name 'header'?",
          "options": [".header", "#header", "header", "*header"],
          "answer": ".header"
        },
        {
          "question": "What is the default value of the 'position' property?",
          "options": ["relative", "fixed", "absolute", "static"],
          "answer": "static"
        },
        {
          "question": "What is the purpose of the z-index property in CSS?",
          "options": [
            "To count the number of elements",
            "To set the magnification level of an element",
            "To specify the stack order of an element",
            "To create a zoom effect"
          ],
          "answer": "To specify the stack order of an element"
        },
      ]
    },
    {
      "title": "JavaScript",
      "icon": "/assets/img/javascript-icon.svg",
      "questions": [
        {
          "question": "Which syntax is correct to output 'Hello World' in an alert box?",
          "options": [
            "alertBox('Hello World');",
            "msg('Hello World');",
            "alert('Hello World');",
            "msgBox('Hello World');"
          ],
          "answer": "alert('Hello World');"
        },
        {
          "question": "How do you call a function named 'myFunction'?",
          "options": [
            "call function myFunction()",
            "call myFunction()",
            "myFunction()",
            "execute myFunction()"
          ],
          "answer": "myFunction()"
        },
        {
          "question": "How to write an IF statement in JavaScript?",
          "options": [
            "if i = 5 then",
            "if (i == 5)",
            "if i == 5",
            "if i = 5"
          ],
          "answer": "if (i == 5)"
        },
        {
          "question": "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
          "options": [
            "if (i <> 5)",
            "if i =! 5 then",
            "if (i != 5)",
            "if i not = 5"
          ],
          "answer": "if (i != 5)"
        },
        {
          "question": "How does a FOR loop start?",
          "options": [
            "for (i = 0; i <= 5)",
            "for i = 1 to 5",
            "for (i <= 5; i++)",
            "for (i = 0; i <= 5; i++)"
          ],
          "answer": "for (i = 0; i <= 5; i++)"
        },
        {
          "question": "How can you add a single-line comment in JavaScript?",
          "options": [
            "'This is a single-line comment",
            "//This is a single-line comment",
            "<!--This is a single-line comment-->",
            "/* This is a single-line comment */"
          ],
          "answer": "//This is a single-line comment"
        },
        {
          "question": "What is the correct way to write a JavaScript array?",
          "options": [
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colors = ['red', 'green', 'blue']",
            "var colors = 'red', 'green', 'blue'",
            "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
          ],
          "answer": "var colors = ['red', 'green', 'blue']"
        },
        {
          "question": "How do you find the number with the highest value of x and y?",
          "options": [
            "Math.ceil(x, y)",
            "top(x, y)",
            "Math.max(x, y)",
            "Math.highest(x, y)"
          ],
          "answer": "Math.max(x, y)"
        },
        {
          "question": "Which operator is used to assign a value to a variable?",
          "options": ["-", "*", "=", "x"],
          "answer": "="
        },
        {
          "question": "What is the correct way to write a JavaScript object?",
          "options": [
            "var person = {firstName: 'John', lastName: 'Doe'};",
            "var person = {firstName = 'John', lastName = 'Doe'};",
            "var person = (firstName: 'John', lastName: 'Doe');",
            "var person = (firstName = 'John', lastName = 'Doe');"
          ],
          "answer": "var person = {firstName: 'John', lastName: 'Doe'};"
        },
      ]
    },
    {
      "title": "Accessibility",
      "icon": "/assets/img/accessibility-icon.svg",
      "questions": [
        {
          "question": "What does 'WCAG' stand for?",
          "options": [
            "Web Content Accessibility Guidelines",
            "Web Compliance Accessibility Guide",
            "Web Content Accessibility Goals",
            "Website Compliance and Accessibility Guidelines"
          ],
          "answer": "Web Content Accessibility Guidelines"
        },
        {
          "question": "Which element is used to provide alternative text for images for screen reader users?",
          "options": [
            "<alt>",
            "<figcaption>",
            "<description>",
            "<img alt='description'>"
          ],
          "answer": "<img alt='description'>"
        },
        {
          "question": "What does ARIA stand for in web development?",
          "options": [
            "Accessible Rich Internet Applications",
            "Advanced Responsive Internet Assistance",
            "Accessible Responsive Internet Applications",
            "Automated Responsive Internet Actions"
          ],
          "answer": "Accessible Rich Internet Applications"
        },
        {
          "question": "Which of the following is not a principle of the WCAG?",
          "options": [
            "Perceivable",
            "Dependable",
            "Operable",
            "Understandable"
          ],
          "answer": "Dependable"
        },
        {
          "question": "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
          "options": ["3:1", "4.5:1", "7:1", "2:1"],
          "answer": "4.5:1"
        },
        {
          "question": "Which of the following elements is inherently focusable, meaning it can receive focus without a 'tabindex' attribute?",
          "options": ["<div>", "<span>", "<a href='...'>", "<p>"],
          "answer": "<a href='...'>"
        },
        {
          "question": "What is the purpose of the 'lang' attribute in an HTML page?",
          "options": [
            "To specify the scripting language",
            "To define the character set",
            "To indicate the language of the page content",
            "To declare a language pack"
          ],
          "answer": "To indicate the language of the page content"
        },
        {
          "question": "Which guideline ensures that content is accessible by keyboard as well as by mouse?",
          "options": [
            "Keyboard Accessible",
            "Mouse Independence",
            "Device Independence",
            "Operable Controls"
          ],
          "answer": "Keyboard Accessible"
        },
        {
          "question": "What is the role of 'skip navigation' links in web accessibility?",
          "options": [
            "To skip over primary navigation to the main content",
            "To provide shortcuts to different sections of the website",
            "To help users skip unwanted sections like advertisements",
            "To bypass broken links in the navigation"
          ],
          "answer": "To skip over primary navigation to the main content"
        },
        {
          "question": "Which of these tools can help in checking the accessibility of a website?",
          "options": [
            "W3C Validator",
            "Google Lighthouse",
            "CSS Validator",
            "JavaScript Console"
          ],
          "answer": "Google Lighthouse"
        },
      ]
    }
  ]
}

const container = document.querySelector('.container');
const content = document.querySelector('.content');

//tema değişikliği için;

if (localStorage.isDarkMode === 'true') {
  document.body.classList.add('darkMode');
  themeChange.checked = true;
}
else {
  document.body.classList.remove('darkMode');
  themeChange.checked = false;
}

themeChange.addEventListener("change", function () {
  if (themeChange.checked) {
    document.body.classList.add('darkMode');
    localStorage.isDarkMode = true;
  }
  else {
    document.body.classList.remove('darkMode');
    localStorage.isDarkMode = false;
  }
});

for (const quiz of data.quizzes) {
  content.innerHTML +=
    `<h4 class="card"><img src="${quiz.icon}" alt="title icon">${quiz.title}</h4>`
    ;
}

let querys = []; //soruları ham halleriyle saklamak
let index = 1;

const cards = document.querySelectorAll('.card');
let cardTxt = "";

for (const card of cards) {
  card.addEventListener('click', function () {
    const title = this.innerText;
    cardTxt = this.innerText;
    querys = handleTitle(title);
    handleQuestions();
    displayQuestions();
  })
}

function handleTitle(title) {
  for (const quiz of data.quizzes) {
    if (quiz.title === title) {
      return quiz.questions;
    }
  }
}

let formattedQuestions = []; //soruları numaralandırılmış formatta saklamak

function handleQuestions() {
  formattedQuestions = [];
  querys.forEach((que) => {
    const sanitizedQuestion = que.question.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    formattedQuestions.push({
      number: index, //her soruya numara atamak için
      question: sanitizedQuestion,
      selects: que.options,
      answer: que.answer,
    });
    index++;
  });
  displayQuestions();
}

let i = 0;
let correctAnswerCounter = 0;

const mainText = document.querySelector('.mainText');

const header = document.querySelector('.header');
const headerSubject = document.querySelector('.headerSubject');
const progressBar = document.querySelector('.progressBarInner');

let progress = 1;
let selectedOption = null;

//soruları ekrana yazdırmak için
function displayQuestions() {
  warnTxt.style.display = 'none';
  content.innerHTML = '';
  const selections = ["A", "B", "C", "D"];
  formattedQuestions[i].selects.forEach((option, index) => {
    const optionBtn = document.createElement('button');
    const optionText = option.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    optionBtn.innerHTML = `
    <div class="selectionBox">
      <h5 class="selections">${selections[index]}</h5>
      <p class="optionText">${optionText}</p>
    </div>
    `;
    optionBtn.classList.add('optionBtn');
    content.appendChild(optionBtn);
  });

  headerSubject.innerHTML = `
      <div class="headerSubject">
      <img src="assets/img/${cardTxt.toLocaleLowerCase()}-icon.svg" alt="Quiz Subject Icon">
      <h3>${cardTxt}</h3>
      </div>
  `;

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

const submitBtn = document.createElement('button');
submitBtn.style.display = 'none';

const optionTexts = document.querySelectorAll('.optionText');
const optionBtns = document.querySelectorAll('.optionBtn');
const containerInner = document.querySelector('.container-inner');
const bottom = document.querySelector('.bottom');
const bottomInner = document.querySelector('.bottom-inner');

submitBtn.classList.add('submitBtn');
submitBtn.addEventListener('click', function () {
  if (selectedOption) {
    warnTxt.style.display = 'none';
    const selectedTxt = selectedOption.querySelector('.optionText').innerText.trim();
    const correctAnswer = formattedQuestions[i].answer;
    // eğer seçilen doğru cevapsa
    if (selectedTxt === correctAnswer) {
      selectedOption.classList.add("green");
      correctAnswerCounter++;
      // eğer seçilen yanlış cevapsa
    } else {
      selectedOption.classList.add("red");
      const optionBtns = document.querySelectorAll('.optionBtn');
      for (const option of optionBtns) {
        const optionTxt = option.querySelector('.optionText').innerText.trim();
        if (optionTxt === correctAnswer) {
          option.classList.add("green");
        }
      }
    }
    setTimeout(() => {
      i++;
      if (i < querys.length) {
        displayQuestions();
      }
      else {
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
    }, 1500)
    selectedOption = false;
  } else {
    warnTxt.style.display = 'flex';
  }

})
submitBtn.innerText = 'Submit Answer'
bottomInner.appendChild(submitBtn);
const warnTxt = document.createElement('div');
warnTxt.innerHTML = `
    <img src="assets/img/false-icon.svg" alt="Quiz Subject Icon">
    <p>Please select an answer</p>
  `;

bottomInner.appendChild(warnTxt);
warnTxt.classList.add('warnTxt');

warnTxt.style.display = 'none';