const quizData = [
    { 
        question: "What is the purpose of the 'let' keyword in JavaScript?",
        a: "To declare a global variable",
        b: "To declare a block-scoped variable",
        c: "To declare a function",
        d: "To declare a class",
        correct: "b",
    },
    { 
      question: "What is the output of 'console.log(typeof null)'?",
      a: "object",
      b: "null",
      c: "undefined",
      d: "string",
      correct: "a",
    },

    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },             
    {
        question:
            "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What is the purpose of the 'preventDefault()' method in JavaScript?",
        a: "To prevent the default behavior of an event",
        b: "To trigger the default behavior of an event",
        c: "To stop the propagation of an event",
        d: "To start the propagation of an event",
        correct: "a",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question:
            "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question:
            "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What is the difference between == and === in JavaScript?",
        a: "Both are used for assignment",
        b: "Both are used for comparison, but === checks for type equality",
        c: "Both are used for comparison, but == checks for type equality",
        d: "One is used for comparison, the other is used for assignment",
        correct: "b",
     },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    }
];

const quiz = document.querySelector(".quiz-header");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    if (currentQuiz < quizData.length) {
        questionEl.innerText = quizData[currentQuiz].question;
        a_text.innerText = quizData[currentQuiz].a;
        b_text.innerText = quizData[currentQuiz].b;
        c_text.innerText = quizData[currentQuiz].c;
        d_text.innerText = quizData[currentQuiz].d;
    } else {
        quiz.innerText = `Your Score is ${score}/${quizData.length} `;
        submitBtn.innerText = "Restart";
    }
}

function deselectAnswers() {
    answerEls.forEach((e) => {
        e.checked = false;
    });
    loadQuiz();
}

function getSelected() {
    let selected = false;
    answerEls.forEach((e) => {
        if (e.checked) {
            selected = true;
            if (e.id == quizData[currentQuiz].correct) {
                score++;
            }
        }
    });

    if (selected) {
        currentQuiz++;
        deselectAnswers();
    } else {
        alert("Please select an option");
    }
}

submitBtn.addEventListener("click", () => {
    if (currentQuiz < quizData.length) {
        getSelected();
    } else {
        location.reload();
    }
});