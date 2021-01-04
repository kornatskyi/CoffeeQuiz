const block1 = {
    question: "1. What flawors do you like in coffee?",
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
    numberOfPossibleAnswers: 3
};

const block2 = {
    question: "2. How do you make your coffee?",
    answers: [
        "Drip",
        "Espresso",
        "French press",
        "Pour over",
        "Cold brew",
        "Other",
    ],
    numberOfPossibleAnswers: 2
};

const block3 = {
    question: "3. How much caffeine do you need?",
    answers: ["Full caffeine", "Decaf"],
    numberOfPossibleAnswers: 1
};

const block4 = {
    question: "4. What roast level do you prefer?",
    answers: ["Light roast", "Medium roast", "Dark roast", "I don't know"],
    numberOfPossibleAnswers: 1
};

const block5 = {
    question: "What process do you like?",
    answers: ["Natural", "Washed", "Honey process", "Any"],
    numberOfPossibleAnswers: 1
};

/**Array of objects, which contain in  their fields a question and an array with answers*/
const questions = [block1, block2, block3, block4, block5];

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
    result12
];



function displayBlock() {
    
}