


const confirmButton = document.getElementById('confirm-btn');

const startButton = document.getElementById('start-btn');

const resultButton = document.getElementById('result-btn');

const resultsDiv = document.getElementById('results');

const answersContainerElement = document.getElementById('answers-rbuttons');

const questionElement = document.getElementById('question');

const mainContentElement = document.getElementById('main-content');

const answerRbtn = [
    document.getElementById('lrbtn1'), document.getElementById('lrbtn2'), document.getElementById('lrbtn3')
]


let counter = 0;

startButton.addEventListener('click', startQuiz);
confirmButton.addEventListener('click', confirmAnswers);
resultButton.addEventListener('click', showResults);

const questions = [
    {
        question: "What kind of roast do you prefer?",
        answers: [
            {text: "dark"},
            {text: "light"},
            {text: "midium"}
        ]
    },
    {
        question: "What kind of flower do you like?",
        answers: [
            {text: "fruity"},
            {text: "chocolate"},
            {text: "berry"}
        ]
    },
    {
        question: "How do you make your coffe?",
        answers: [
            {text: "espresso"},
            {text: "french_press"},
            {text: "drip"}
        ]
    },
];




function startQuiz() {
    startButton.classList.add('hide');
    setNextQuestion();


}

function setNextQuestion() {
    showQuestion(questions[counter]);
    setAnswers();
    counter = counter + 1;
    if(counter === questions.length) {
        // confirmButton.classList.add('hide');
        resultButton.classList.remove('hide');
    
    }
    

}
function showQuestion(question){
    questionElement.innerText = question.question;

}

function setAnswers() {
    answerRbtn[0].innerText = questions[counter].answers[0].text;
    answerRbtn[1].innerText = questions[counter].answers[1].text;
    answerRbtn[2].innerText = questions[counter].answers[2].text;
}

function showAnswers(){


}

let rbtnValues = ['text', 'text', 'text'];
let answer = document.getElementsByName('answer');
let i = 0;
function confirmAnswers(){

    for (const key of answer) {
        if (key.checked) {
            rbtnValues[i] = key.value;
            i++;
        }
    }

    setNextQuestion();
}


function colectAnswers() {

}

function showResults() {
    resultsDiv.innerText = rbtnValues[0] + rbtnValues[1] + rbtnValues[2];
    
}


function returnRecomendation() {
    
    mainContentElement.classList.add('hide')



}