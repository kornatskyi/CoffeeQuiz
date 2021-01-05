// const question1 = {
//     question: "1. What flavors do you like in coffee?",
//     answers: [
//         "Berries",
//         "Honey",
//         "Grape",
//         "Citrus",
//         "Chocolate",
//         "Nuts",
//         "Stone fruits",
//         "Floral",
//         "Caramel",
//     ],
//     numberOfPossibleAnswers: 3
// };

// const question2 = {
//     question: "2. How do you make your coffee?",
//     answers: [
//         "Drip",
//         "Espresso",
//         "French press",
//         "Pour over",
//         "Cold brew",
//         "Other",
//     ],
//     numberOfPossibleAnswers: 2
// };

// const question3 = {
//     question: "3. How much caffeine do you need?",
//     answers: ["Full caffeine", "Decaf"],
//     numberOfPossibleAnswers: 1
// };

// const question4 = {
//     question: "4. What roast level do you prefer?",
//     answers: ["Light roast", "Medium roast", "Dark roast", "I don't know"],
//     numberOfPossibleAnswers: 1
// };

// const question5 = {
//     question: "5. What process do you like?",
//     answers: ["Natural", "Washed", "Honey process", "Any"],
//     numberOfPossibleAnswers: 1
// };

// /**Array of objects, which contain in  their fields a question and an array with answers*/
// const questions = [question1, question2, question3, question4, question5];

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

/**Array of results. Each object contains name, keys(matched answers), weigh(level of how much its mached with costumer's answers). Weitgh counts and sets up through countWeight() function*/
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
    result12
];

/** Strart of application. After page loaded, it calls star() function and setAnswerListenerOnCurentButtonsSet()*/
document.addEventListener('DOMContentLoaded', function () {
    start();
    setAnswerListenersAtAnswerButtons();
}, false);

/** Iterates after each stage (step, each question setted up). */
let stageCounter = 1;

let startButton = document.getElementById("start-btn");

/**1. Change classes' parameters in html elements that have to be present first  */
function start() {
    questionContainer.classList.remove("hide");
    answersContainer.classList.remove("hide");
    submitButton.classList.remove("hide");
    submitButton.disabled = true;
    document.getElementById('counter').innerText = `${stageCounter} of ${questionHTMLArray.length}`;
}

let questionContainer = document.getElementById("question-container");

let answersContainer = document.getElementById("answers-container");

let roundAnswerCounter = 0;

/** Array for keep all answers-btn*/
let answerButtonElements = [];

/**2. Set up listeners on all buttons with class "answer-btn". */
function setAnswerListenersAtAnswerButtons() {
    answerButtonElements = document.getElementsByClassName(`answer-btn`);

    for (let i = 0; i < answerButtonElements.length; i++) {
        answerButtonElements[i].addEventListener('click', colectAnswers);

    }

}

/**Array that contain customer's answers. */
let arrayOfAnswers = [];

/**3. Colect all answers in array by name in string's representation. And change button view after click on it*/
function colectAnswers(e) {
    if (arrayOfAnswers.includes(e.target.innerText) || roundAnswerCounter >= e.target.value) {
        buttonOff(e);
        arrayOfAnswers = removeA(arrayOfAnswers, e.target.innerText);
        if(roundAnswerCounter === 0){
            submitButton.disabled = true;
        }

    } else {
        buttonOn(e);
        arrayOfAnswers.push(e.target.innerText);
        roundAnswerCounter++;
        submitButton.disabled = false;
    }
    
}

/**Background color changers */
function buttonOn(e) {

    e.target.style.border = "2px solid #2dc1bc" 
    
}

function buttonOff(e) {
    e.target.style.border = "1px solid #bababa" 
}


let questionHTMLArray = document.getElementsByClassName('question-container');

let submitButton = document.getElementById("submit-btn");

/**Main control button, that submits all answers and move to the next stage, after the last question and answers' submitting show the results. */
submitButton.addEventListener("click", function () {
    if (roundAnswerCounter === 0) {
        console.log("SELECT SOME ANSWERS");
    } else {
        /**Set to zero roundAnswerCounter */
        roundAnswerCounter = 0;
        stageCounter++;
        document.getElementById('counter').innerText = `${stageCounter} of ${questionHTMLArray.length}`;
        if (stageCounter === questionHTMLArray.length) {
            submitButton.innerText = "Results";
        }
        /**Check if the curent stage is the last one. If it is, shows results. But if it isn't, manipulates with "hide" property in elements' classes the way to show next ones */
        if (stageCounter === questionHTMLArray.length + 1) {
            submitButton.classList.add('hide');
            questionContainer.classList.add("hide");
            answersContainer.classList.add("hide");
            resultContainer.classList.remove("hide");
            document.getElementById('counter').classList.add('hide');
            showMostWeightResult();
        } else {
            questionHTMLArray[stageCounter - 2].classList.add('hide');
            questionHTMLArray[stageCounter - 1].classList.remove('hide');
            Array.from(document.getElementsByClassName(`answer-btn-${stageCounter - 1}`)).forEach(element => {
                element.classList.add('hide');

            });
            Array.from(document.getElementsByClassName(`answer-btn-${stageCounter}`)).forEach(element => {
                element.classList.remove('hide');
            });
            submitButton.disabled = true;


        }
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
        for (let j = 0; j < arrayOfAnswers.length; j++) {
            if (keysArray.includes(arrayOfAnswers[j])) {
                results[i].weight = results[i].weight + getCoefficientFromNeededKey(results[i].keys, arrayOfAnswers[j]);
            }
        }
    }
}
function getCoefficientFromNeededKey(keys, arrayOfAnswersElement) {
    for (let l = 0; l < keys.length; l++) {
        if (keys[l].key === arrayOfAnswersElement) {
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
function showMostWeightResult() {
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

}

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
    if (arrin === arr) {
        roundAnswerCounter++;
    }

    return arrin;
}

