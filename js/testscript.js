const question1 = {
    question: "1. What flavors do you like in coffee?",
    answers: [
        "Berries",
        "Honey",
        "Grape",
        "Citrus",
        "Chocolate",
        "Nuts",
        "Stone fruits",
        "Floral",
        "Caramel",
    ],
    numberOfPossibleAnswers: 3,
};

const question2 = {
    question: "2. How do you make your coffee?",
    answers: [
        "Drip",
        "Espresso",
        "French press",
        "Pour over",
        "Cold brew",
        "Other",
    ],
    numberOfPossibleAnswers: 2,
};

const question3 = {
    question: "3. How much caffeine do you need?",
    answers: ["Full caffeine", "Decaf"],
    numberOfPossibleAnswers: 1,
};

const question4 = {
    question: "4. What roast level do you prefer?",
    answers: ["Light roast", "Medium roast", "Dark roast", "I don't know"],
    numberOfPossibleAnswers: 1,
};

const question5 = {
    question: "What process do you like?",
    answers: ["Natural", "Washed", "Honey process", "Any"],
    numberOfPossibleAnswers: 1,
};

/**Array of objects, which contain in  their fields a question and an array with answers*/
const questions = [question1, question2, question3, question4, question5];

const result1 = {
    name: "Seattle Space Blend",
    keys: [
        { key: "Medium roast", coefficient: 3 },
        { key: "Espresso", coefficient: 2 },
        { key: "Cold brew", coefficient: 1 },
        { key: "Drip", coefficient: 1 },
        { key: "Chocolate", coefficient: 1 },
        { key: "Berries", coefficient: 1 },
    ],
    weight: 0,
};

const result2 = {
    name: "Seattle Sunrise Blend",
    keys: [
        { key: "Medium roast", coefficient: 2 },
        { key: "Light roast", coefficient: 2 },
        { key: "Citrus", coefficient: 1 },
        { key: "Drip", coefficient: 1 },
        { key: "Chocolate", coefficient: 1 },
    ],
    weight: 0,
};

const result3 = {
    name: "Emerald City Blend",
    keys: [
        { key: "Medium roast", coefficient: 2 },
        { key: "Dark roast", coefficient: 2 },
        { key: "Drip", coefficient: 1 },
        { key: "Stone fruits", coefficient: 1 },
    ],
    weight: 0,
};

const result4 = {
    name: "Molly's Blend",
    keys: [
        { key: "Medium roast", coefficient: 3 },
        { key: "Other", coefficient: 1 },
        { key: "I don't know", coefficient: 1 },
        { key: "Drip", coefficient: 1 },
        { key: "Chocolate", coefficient: 1 },
        { key: "French press", coefficient: 1 },
    ],
    weight: 0,
};

const result5 = {
    name: "Seattle Strong",
    keys: [
        { key: "Dark roast", coefficient: 3 },
        { key: "Chocolate", coefficient: 1 },
        { key: "Caramel", coefficient: 1 },
        { key: "French press", coefficient: 1 },
        { key: "Cold Brew", coefficient: 1 },
    ],
    weight: 0,
};

const result6 = {
    name: "Decaf Blend",
    keys: [
        { key: "Dark roast", coefficient: 1 },
        { key: "Decaf", coefficient: 10 },
    ],
    weight: 0,
};

const result7 = {
    name: "Ethiopia Addisu",
    keys: [
        { key: "Light roast", coefficient: 3 },
        { key: "Espresso", coefficient: 1 },
        { key: "Drip", coefficient: 1 },
        { key: "Pour over", coefficient: 1 },
        { key: "Natural", coefficient: 1 },
        { key: "Honey", coefficient: 1 },
        { key: "Berries", coefficient: 1 },
    ],
    weight: 0,
};

const result8 = {
    name: "Guatemala La Esperanza",
    keys: [
        { key: "Light roast", coefficient: 3 },
        { key: "Espresso", coefficient: 1 },
        { key: "Drip", coefficient: 1 },
        { key: "Pour over", coefficient: 1 },
        { key: "Natural", coefficient: 1 },
        { key: "Honey", coefficient: 1 },
        { key: "Stone fruits", coefficient: 1 },
    ],
    weight: 0,
};

const result9 = {
    name: "Kenya Gatuyaini AA",
    keys: [
        { key: "Light roast", coefficient: 3 },
        { key: "Espresso", coefficient: 1 },
        { key: "Drip", coefficient: 1 },
        { key: "Pour over", coefficient: 1 },
        { key: "Washed", coefficient: 1 },
        { key: "Grape", coefficient: 1 },
    ],
    weight: 0,
};

const result10 = {
    name: "Bali Kintamani",
    keys: [
        { key: "Light roast", coefficient: 3 },
        { key: "Espresso", coefficient: 1 },
        { key: "Drip", coefficient: 1 },
        { key: "Pour over", coefficient: 1 },
        { key: "Natural", coefficient: 1 },
        { key: "Stone fruits", coefficient: 1 },
    ],
    weight: 0,
};

const result11 = {
    name: "Guatemala Rosma",
    keys: [
        { key: "Light roast", coefficient: 3 },
        { key: "Espresso", coefficient: 1 },
        { key: "Drip", coefficient: 1 },
        { key: "Pour over", coefficient: 1 },
        { key: "Washed", coefficient: 1 },
        { key: "Chocolate", coefficient: 1 },
        { key: "Nuts", coefficient: 1 },
    ],
    weight: 0,
};

const result12 = {
    name: "Honduras La Pila",
    keys: [
        { key: "Light roast", coefficient: 3 },
        { key: "Espresso", coefficient: 1 },
        { key: "Drip", coefficient: 1 },
        { key: "Pour over", coefficient: 1 },
        { key: "Washed", coefficient: 1 },
        { key: "Grape", coefficient: 1 },
        { key: "Citrus", coefficient: 1 },
    ],
    weight: 0,
};

/**Array of results. Each object contains name, keys(matched answers), weigh(level of how much its mached with costumer's answers) */
const results = [
    result1,
    result2,
    result3,
    result4,
    result5,
    result6,
    result7,
    result8,
    result9,
    result10,
    result11,
    result12,
];

/**Array that contain customer's answers. */
let scopeOfAnswers = [];

/**1. Strart of application. Call showQuestionAndAnswers() function with start parameters*/

let questionCounter = 0;

let startButton = document.getElementById("start-btn");

startButton.addEventListener("click", start);

function start() {
    startButton.classList.add("hide");
    questionCounterMethod();
    questionContainer.classList.remove("hide");
    answersContainer.classList.remove("hide");
    submitButton.classList.remove("hide");
}

let questionContainer = document.getElementById("question-container");

let answersContainer = document.getElementById("answers-container");

let roundAnswerCounter;
/**Count inerations of questions */
function questionCounterMethod() {
    if (questionCounter < questions.length) {
        answerButtons = createArrayOfAnswerButtons(
            questions[questionCounter].answers,
            questions[questionCounter].numberOfPossibleAnswers
        );
    }
    if (questionCounter < questions.length) {
        showQuestionAndAnswers(
            questions[questionCounter].question,
            questions[questionCounter].answers,
            answerButtons
        );
    } else {
        submitButton.classList.add("hide");
        resultButton.classList.remove("hide");
        console.log(scopeOfAnswers);
    }
    questionCounter++;
    roundAnswerCounter = 0;
}

let htmlStringWithAnswers = "";

class AnswerButton {
    constructor(answer, id, className, value) {
        this.answer = new String(answer);
        this.className = className;
        this.id = id;
        this.value = value;
    }

    htmlElement;

    createStringOfHTMLRepresentation() {
        return `<button class="${this.className}" id="${this.id}">${this.answer}</button>`;
    }

    createHTMLElement() {
        this.htmlElement = document.createElement("button");
        this.htmlElement.innerText = `${this.answer}`;
        this.htmlElement.classList.add(this.className);
        this.htmlElement.setAttribute("id", `${this.id}`);
        this.htmlElement.setAttribute("value", `${this.value}`);
        this.htmlElement.setAttribute("type", "button");
    }

    status;
    statusSwitcher() {
        console.log("switch");
        if (status === false || status === undefined) {
            status = true;
            console.log("switch to true");
        } else {
            status = false;
        }
    }
}

let answerButtons = [];

function createArrayOfAnswerButtons(answers, numberOfPossibleAnswers) {
    answerButtons2 = [];
    for (let i = 0; i < answers.length; i++) {
        answerButtons2.push(
            new AnswerButton(
                answers[i],
                answers[i],
                "answer-btn",
                numberOfPossibleAnswers
            )
        );
    }
    return answerButtons2;
}
/**2. Set up questions from "questions" array by "questionCounter" number. Then create html string with answers in button appearance and put it into answerContainer.*/
function showQuestionAndAnswers(question, answers, answerButtons) {
    questionContainer.innerHTML = question;
    answersContainer.innerHTML = "</br>";

    for (let i = 0; i < answerButtons.length; i++) {
        // htmlStringWithAnswers += htmlStringGenerator(answers[i]);
        answerButtons[i].createHTMLElement();
        answersContainer.appendChild(answerButtons[i].htmlElement);
        answersContainer.innerHTML += "</br>";
    }
    setAnswerListener();
}
/**Generate 1 string in button appearance */
// function htmlStringGenerator(answer) {
//     return `<button class="answer-btn" id=${answer} style="background-color:rgb(192,192,192)">${answer}</button><br/>`;
// }

/**3. Answers listener */
// let answerButtons = [];

function setAnswerListener() {
    answerButtonsHTML = document.getElementsByClassName("answer-btn");

    for (let i = 0; i < answerButtonsHTML.length; i++) {
        answerButtonsHTML[i].addEventListener("click", colectAnswers);
    }
}

/**Make it posible to pick a limited amount of answers*/

/**4. Colect all answers in array by name in string's representation. And change button view after click on it*/
function colectAnswers(e) {
    console.log(e.target.value);
    if (
        scopeOfAnswers.includes(e.target.innerText) ||
        roundAnswerCounter >= questions[questionCounter - 1].numberOfPossibleAnswers
    ) {
        bgChangeOff(e);
        console.log(scopeOfAnswers);
        scopeOfAnswers = removeA(scopeOfAnswers, e.target.innerText);
    } else {
        bgChangeOn(e);
        scopeOfAnswers.push(e.target.innerText);
        roundAnswerCounter++;
    }
    console.log(e.target.innerText);
}

/**Background color changers */
function bgChangeOn(e) {
    const rndCol = "rgb(" + "255" + "," + "0" + "," + "0" + ")";
    e.target.style.backgroundColor = rndCol;
}

function bgChangeOff(e) {
    const rndCol = "rgb(" + "192" + "," + "192" + "," + "192" + ")";
    e.target.style.backgroundColor = rndCol;
}

let submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", function () {
    if (roundAnswerCounter === 0) {
        console.log("SELECT SOME ANSWER");
    } else {
        questionCounterMethod();
    }
});
/**Set up weight for each result*/
let keysArray = [];
function countWeight() {
    for (let i = 0; i < results.length; i++) {
        keysArray = [];
        for (let k = 0; k < results[i].keys.length; k++) {
            keysArray.push(results[i].keys[k].key);
        }
        for (let j = 0; j < scopeOfAnswers.length; j++) {
            if (keysArray.includes(scopeOfAnswers[j])) {
                results[i].weight =
                    results[i].weight +
                    1 * coefficientMultiplayer(results[i].keys, scopeOfAnswers[j]);
            }
        }
    }
}
function coefficientMultiplayer(keys, scopeOfAnswersElement) {
    for (let l = 0; l < keys.length; l++) {
        if (keys[l].key === scopeOfAnswersElement) {
            return keys[l].coefficient;
        }
    }
}
/**Array of weights. Helps to detect a highest weight. */
let weights = [];

let resultContainer = document.getElementById("result-container");

let resultString = "";

let customerResult = [];

/** Count most weight result.*/
function getMostWeightResult() {
    countWeight();

    for (let i = 0; i < results.length; i++) {
        weights.push(results[i].weight);
    }
    results.forEach((element) => {
        if (element.weight === Math.max.apply(Math, weights)) {
            customerResult.push(element);
            resultString += `<h2>${element.name}</h2><br/>`;
        }
    });
    resultContainer.innerHTML = resultString;
    questionContainer.classList.add("hide");
    answersContainer.classList.add("hide");
    resultButton.classList.add("hide");
    resultContainer.classList.remove("hide");
}

let resultButton = document.getElementById("result-btn");
resultButton.addEventListener("click", getMostWeightResult);

/* Remove element from array by value*/
function removeA(arr) {
    let arrin = [...arr];
    var what,
        a = arguments,
        L = a.length,
        ax;
    while (L > 1 && arrin.length) {
        what = a[--L];
        while ((ax = arrin.indexOf(what)) !== -1) {
            arrin.splice(ax, 1);
            roundAnswerCounter--;
        }
    }
    console.log(arrin === arr);
    console.log(arrin);
    console.log(arr);
    if (arrin === arr) {
        roundAnswerCounter++;
    }

    return arrin;
}

let girdArr = [];

document.addEventListener(
    "DOMContentLoaded",
    function () {
        start();
    },
    false
);
