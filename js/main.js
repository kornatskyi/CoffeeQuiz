
    
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

    const results = [result1, result2, result3, result4, result5];



     
    let scopeOfAnswers = [];

    function coffeTest(){
        for (let i = 0; i < questions.length; i++) {
            console.log(questions[i].question);
            console.log("Answers: " + questions[i].answers);
            scopeOfAnswers.push(prompt("Enter answer:"));
            
        }
        console.log(scopeOfAnswers);
    }

     function countWeight() {
        for (let i = 0; i < results.length; i++) {
            for (let j = 0; j < scopeOfAnswers.length; j++) {
                if(results[i].keys.includes(scopeOfAnswers[j])){
                    results[i].weight++;
                }
            }
            
        }
     }

     const weights= [5, 2, 65, 6, 3];

     function showMostWeightResult(){
         
         for (let i = 0; i < results.length; i++) {
             weights.push(results[i].weight)
         }
         results.forEach(element => {
             if(element.weight === Math.max.apply(Math, weights)) {
                 console.log(element.name);
             }
             
         });
     }