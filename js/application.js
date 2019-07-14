//JavaScript Document

// Our Goal 

// Create a test in HTML using CSS styling 

// *** Javascript Goals 

// 1. I need to get and or store the correct answers that can be found in the HTML document with variables either using let or const 
// 2. Create a function that allows the computer to store the correct answer and increase in Increment in the event the answer is correct
// 3. I want to provide the user with feedback on their test results




$(document).ready(function () {
    "use strict";

    // Step 1. Has been solved by creating a variable that collects the data from the HTML document using the name of our targets and the value of true or false


    $('form').on('submit', function (event) {
        event.preventDefault();

    
        const question1 = document.quiz.q1.value;
        const question2 = document.quiz.q2.value;
        const question3 = document.quiz.q3.value;
        const question4 = document.quiz.q4.value;
        const question5 = document.quiz.q5.value;
        const question6 = document.quiz.q6.value;
        const question7 = document.quiz.q7.value;
        const question8 = document.quiz.q8.value;
        const question9 = document.quiz.q9.value;
       

        // Step 2. Has been solved by creating a variable that will increase in increment in the the event that the answer is correct
        let correct = 0;

        // Part of Step 1. and Step 2. Also requires a conditional statment int his case, if question === true then add to the variable correct
        if (question1 === "true") {
            correct++;
        }

        // console.log(correct) | I used this as a test feel free to try

        if (question2 === "true") {
            correct++;
        }

        if (question3 === "true") {
            correct++;
        }

        if (question4 === "true") {
            correct++;
        }

        if (question5 === "true") {
            correct++;
        }

        if (question6 === "true") {
            correct++;
        }

        if (question7 === "true") {
            correct++;
        }
        if (question8 === "true") {
            correct++;
        }
        if (question9 === "true") {
            correct++;
        }

        // in order to provide the user with feedback I have used a Template Literal that provides user with the correct amount of correct answers
        const resultHTML = `<h2>Your total score is ${correct}</h2>`;
        // I have styled the h2 tag in css and left results empty in order to store the user feedback in javascript
        $('.results').html(resultHTML);

    }); //end of form  
      
}); //end of $(document.ready)