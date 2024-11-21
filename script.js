/*CIS 302 - Project 5
  Author: Nurzida Toigombaeva
  Date: 11/21/2024
*/

// Questions will be asked
const Questions = [{
    id: 0,
    q: "What is the capital of Kyrgyzstan?",
    a: [{ text: "Jalal-Abad", isCorrect: false },
        { text: "Osh", isCorrect: false },
        { text: "Bishkek", isCorrect: true },
        { text: "Talas", isCorrect: false }
    ]
},
{
    id: 1,
    q: "What is the capital of Kazakhstan?",
    a: [{ text: "Shymkent", isCorrect: false, isSelected: false },
        { text: "Aktau", isCorrect: false },
        { text: "Karaganda", isCorrect: false },
        { text: "Astana", isCorrect: true }
    ]
},
{
    id: 2,
    q: "What is the capital of Turkey?",
    a: [{ text: "Istanbul", isCorrect: false},
        { text: "Izmir", isCorrect: false},
        { text: "Ankara", isCorrect: true},
        { text: "Antalya", isCorrect: false}
    ]
}

]
//Set start
var start = true;

//Iterate
function Iterate(id) {
// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

//Getting the question
const question = document.getElementById("question");
//Setting the question text
question.innerText = Questions[id].q;
//Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');
//Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;
//Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

//Show selection for op1
op1.addEventListener("click", () => {
op1.style.backgroundColor = "50DBB4";
op2.style.backgroundColor = "#003366";
op3.style.backgroundColor = "#003366";
op4.style.backgroundColor = "#003366";
selected = op1.value;
})
//Show selection for op2
op2.addEventListener("click", () => {
op1.style.backgroundColor = "#003366";
op2.style.backgroundColor = "50DBB4";
op3.style.backgroundColor = "#003366";
op4.style.backgroundColor = "#003366";
selected = op2.value;
})
//Show selection for op3
op3.addEventListener("click", () => {
op1.style.backgroundColor = "#003366";
op2.style.backgroundColor = "#003366";
op3.style.backgroundColor = "50DBB4";
op4.style.backgroundColor = "#003366";
selected = op3.value;
})
//Show selection for op4
op4.addEventListener("click", () => {
op1.style.backgroundColor = "#003366";
op2.style.backgroundColor = "#003366";
op3.style.backgroundColor = "#003366";
op4.style.backgroundColor = "50DBB4";
selected = op4.value;
})
//Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");
//Evaluate method
evaluate[0].addEventListener("click", () => {
if (selected == "true") {
    result[0].innerHTML = "True";
    result[0].style.color = "green";
} else {
    result[0].innerHTML = "False";
    result[0].style.color = "red";
}
})
}

if (start) {
Iterate("0");
}
//Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    Iterate(id);
    console.log(id);
}
})

// Restart button functionality
const restart = document.getElementsByClassName('restart')[0];
restart.addEventListener("click", () => {
    id = 0; // Reset to first question
    Iterate(id); // Re-initialize the first question
});