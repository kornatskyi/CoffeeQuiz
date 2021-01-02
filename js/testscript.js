
 
const question1 = {
    question: "Some question 1",
    answers: ["key11", "key12", "key13"]

}

const question2 = {
    question:"Some question 2",
    answers: ["key21", "key22", "key23"]

}

const question3 = {
question:"Some question 3",
answers: ["key31", "key32", "key33", "key34"]

}

const question4 = {
question:"Some question 4",
answers: ["key41", "key42"]

}

const question5 = {
question:"Some question 5",
answers: ["key51", "key52", "key53"]

}

/**Array of objects, which contain in  their fields a question and an array with answers*/
const questions = [question1, question2, question3, question4, question5];


const result1 = {
name: "east",
keys: ["key11", "key22", "key53"],
weight: 0

}

const result2 = {
name: "africa",
keys: ["key22", "key34", "key42"],
weight: 0

}

const result3 = {
name: "ephoopia",
keys: ["key41", "key34"],
weight: 0

}

const result4 = {
name: "seattle",
keys: ["kekey34y4", "key53"],
weight: 0

}

const result5 = {
name: "blend",
keys: ["key52", "key41"],
weight: 0

}

/**Array of results. Each object contains name, keys(matched answers), weigh(level of how much its mached with costumer's answers) */
const results = [result1, result2, result3, result4, result5];



/**Array that contain customer's answers. */
let scopeOfAnswers = [];

/**1. Strart of application. Call showQuestionAndAnswers() function with start parameters*/

let questionCounter = 0;

function start() {

    showQuestionAndAnswers(questions[questionCounter].question, questions[questionCounter].answers);

}



let questionContainer = document.getElementById('question-container'); 

let answersContainer = document.getElementById('answers-container');



let htmlStringWithAnswers = "";

/**2. Set up questions from "questions" array by "questionCounter" number. Then create html string with answers in button appearance and put it into answerContainer.*/

function showQuestionAndAnswers(question, answers) {

    questionContainer.innerHTML = question;

    htmlStringWithAnswers = "";

    for (let i = 0; i < answers.length; i++) {
        htmlStringWithAnswers += htmlStringGenerator(answers[i]);            
    }
    
    answersContainer.innerHTML = htmlStringWithAnswers;

    answerListener(answers);
}
/**Generate 1 string in button appearance */
function htmlStringGenerator(answer) {
    return `<button id=${answer}>${answer}</button><br/>`;
} 

/**3. Answer listener */
let answerButton;

function answerListener(answers) {

    for (let i = 0; i < answers.length; i++) {

        answerButton = document.getElementById(`${answers[i]}`);

        answerButton.addEventListener('click', function() { answersContainer.innerHTML = " ";})

        answerButton.addEventListener('click', colectAnswers);
    }
}


/**4. Colect all answers in array by name in string's representation.*/
function colectAnswers(e) {
    
    scopeOfAnswers.push(e.target.innerText);

    console.log(e.target.innerText);

    questionCounter++;

    if(questionCounter < questions.length){
    
        showQuestionAndAnswers(questions[questionCounter].question, questions[questionCounter].answers);

    } else {

        console.log(scopeOfAnswers);
    }
}

let submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', showMostWeightResult)
/**Set up weight for each result*/
function countWeight() {
    for (let i = 0; i < results.length; i++) {
        for (let j = 0; j < scopeOfAnswers.length; j++) {
            if(results[i].keys.includes(scopeOfAnswers[j])){
                results[i].weight++;
            }
        }
        
    }
    }
    
    /**Array of weights. Helps to detect a highest weight. */
    let weights = [];
    
    let customerResult;
    
    
    /** Count most weight result.*/
    function showMostWeightResult(){
        countWeight();
     
     for (let i = 0; i < results.length; i++) {
         weights.push(results[i].weight)
     }
     results.forEach(element => {
         if(element.weight === Math.max.apply(Math, weights)) {
             console.log(element.name);
             customerResult = element;
         }
         
     });
    
    
    }


