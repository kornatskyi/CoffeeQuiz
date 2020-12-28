const confirmButton = document.getElementById('confirm-btn');

const startButton = document.getElementById('start-btn');

const answersContainerElement = document.getElementById('answers-rbuttons');

const questionElement = document.getElementById('question');

const mainContentElement = document.getElementById('main-content');

const answerRbtn = [
    document.getElementById('rbtn1'), document.getElementById('rbtn2'), document.getElementById('rbtn3')
]


let counter = 0;

startButton.addEventListener('click', startQuiz);
confirmButton.addEventListener('click', setNextQuestion);

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
    setAnswers();

}

function setNextQuestion() {
    showQuestion(questions[counter]);
    counter = counter + 1;
    if(counter === questions.length) {
        confirmButton.innerText = "Get result"
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

function confirmAnswer(){

}


function colectAnswers() {

}


function returnRecomendation() {
    
    mainContentElement.classList.add('hide')



}