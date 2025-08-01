let nextQ = document.getElementById("next-Q")
let answer = document.querySelectorAll(".answer-btn")
let questions = document.getElementById("question")
let image = document.querySelector(".image")
let answers = document.querySelector(".answers")
const quizData = [
  {
    question: "How many teeth do adults have?",
    options: ["26", "28", "32", "34"],
    correct: "32",
    img: "../QuizApp/QuizImages/perfect-healthy-teeth-smile-of-a-young-woman-at-a-dentist-teeth-whitening-dental-care-stomatology-concept-by-ai-generated-free-photo.jpg"
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "Rome", "Madrid", "Berlin"],
    correct: "Paris",
    img: "../QuizApp/QuizImages/france.jpg"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correct: "Mars",
    img: "../QuizApp/QuizImages/planet.webp"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "JavaScript", "Python"],
    correct: "JavaScript",
    img: "../QuizApp/QuizImages/code.jpg"
  },
  {
    question: "Which organ pumps blood throughout the human body?",
    options: ["Heart", "Lungs", "Kidney", "Liver"],
    correct: "Heart",
    img: "../QuizApp/QuizImages/blood-cells.jpg"
  },
  {
    question: "What do you call a baby cat?",
    options: ["Kitten","Cat","Kit","Kitty"],
    correct: "Kitten",
    img: "../QuizApp/QuizImages/cat.jpg"
  },
  {
    question: "In French, what does 'merci' mean?",
    options: ["Thank you","Welcome","Hello","Fine"],
    correct: "Thank you",
    img: "../QuizApp/QuizImages/french.jpg"
  },
  {
    question: "In which year did the United states declare its independence from Great Britain?",
    options: [1916,1899,1758,1776],
    correct: "1776",
    img: "../QuizApp/QuizImages/Uk.webp"
  },
  {
    question: "In which country did the Renaissance movement originate?",
    options: ["China","india","Italy","Russia"],
    correct: "Italy",
    img: "../QuizApp/QuizImages/1776.webp"
  },
  {
    question: "How many bones are there in a newborn baby’s body?",
    options: [206,260,270,212],
    correct: "270",
    img: "../QuizApp/QuizImages/baby.webp"
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Liver","Heart","Skin","Kidney"],
    correct: "Skin",
    img: "../QuizApp/QuizImages/organs.jpg"
  },
  {
    question: "How many players are there on a standard soccer team?",
    options: [7,9,11,12],
    correct: "11",
    img: "../QuizApp/QuizImages/soccer.webp"
  },
];

let answered = false;
let currentData = 0;
let point = 0;

function resultPage(btn){
  let highestPoint = Number(localStorage.getItem("highestpoints")) || 0;
  if(point > highestPoint){
    highestPoint = point;
  localStorage.setItem("highestpoints",highestPoint)
  }
    questions.innerText = `You got ${point} / ${quizData.length}`;

  answer.forEach(Element => {
    Element.innerHTML = "";
    Element.style.border = "none";
    btn.style.backgroundColor = "";
    image.src = "../QuizApp/QuizImages/keepL.webp"
    nextQ.style.display = "none"
  })
   let p = document.createElement("p")
   p.className = "p"
   p.innerText = `The highest score is ${highestPoint}`
   answers.appendChild(p)
}

function correctAnswer(ans,btn){
    if(answered) return;
    answered = true;

    let q = quizData[currentData]
    if(q.correct === ans){
      point++
        btn.style.backgroundColor = "green";
    }else{
        btn.style.backgroundColor = "red";
    }
    nextQ.style.display = "block";

    nextQ.onclick = ()=> {
      currentData++
      if(currentData >= quizData.length){
        resultPage(btn)
        return;
      }
      rendering()
    }
}
function rendering(){
    answered = false;
    let q = quizData[currentData]
    questions.innerText = q.question;
    answer.forEach((btn,index)=>{
      btn.style.backgroundColor = ""
        btn.innerText = q.options[index]
        btn.onclick = ()=>{
            correctAnswer(btn.innerText,btn)
        }
    })
    image.src = q.img
    nextQ.style.display = "none"
}
rendering()
