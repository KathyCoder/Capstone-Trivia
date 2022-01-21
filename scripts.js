const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')
const easyButton = document.getElementById('question-btn')
const answerSpot = document.getElementById("myFormAnswer");
let currentQuestion = 0
let gameObject = {}
let score = 0 
    const column = document.createElement('div')
    column.classList.add('genre-column') //KEEP THIS
    column.innerHTML = "GENRE" // KEEP THIS
    game.append(column) // STICKS THE COLUMN TO THE GAME DIV
    const card = document.createElement('div')
    game.append(card) 

 easyButton.addEventListener('click', function(e) {
fetch(`https://opentdb.com/api.php?amount=5&difficulty=${easyButton.value}&type=multiple`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        gameObject = data // outside this function gameObject not be available
        //gameObject brings in all data from fetch
        column.innerHTML = data.results[0].category // NOTE:typing HERE overrides line 4 & 36 FILM -11
        card.innerHTML= data.results[0].question
     })
}) 
function checkAnswerFunction() {
    let userAnswer = document.getElementById("myFormInput").value;
    console.log(userAnswer)
    if (userAnswer === gameObject.results[currentQuestion].correct_answer) {
        console.log("You are correct!") 
        score +=1 
        scoreDisplay.innerHTML= score
        currentQuestion += 1
        if (currentQuestion >= gameObject.results.length) {
        document.body.innerHTML=""
        checkEndGame()
    }
        else {
        displayQuestion()
        }
        document.getElementById("myFormInput").value =""
    } else {
        console.log("Try again!")
        answerSpot.innerHTML=gameObject.results[currentQuestion].correct_answer
        checkLose()
        setTimeout(() => {window.location.reload()}, 5000);
    } } 
function displayQuestion(){
    column.innerHTML = gameObject.results[currentQuestion].category // NOTE:typing HERE overrides line 4 & 36 FILM -11
    card.innerHTML= gameObject.results[currentQuestion].question
}

function checkEndGame() {
// if (currentQuestion > gameObject.results.length) {
let winBox =document.createElement("div")
let winPic = document.createElement("img")
    winPic.src="./you-win.gif"
    winBox.append(winPic)
    document.body.append(winBox)
}
function checkLose() {
let mehBox =document.createElement("div")
let mehPic = document.createElement("img")
    mehPic.src="./thanks-for-playing.gif"//NOte to self change this to losing gif call check meh
    mehBox.append(mehPic)
    document.body.append(mehBox)
}
  // NOTE populate Correct Answer input box in the form with 
  //Array.from gameObject.results[0].correct_answer
    
 const allCards = Array.from(document.querySelectorAll('.card'))
 function getResult() {
     const cardOfButton = this.parentElement
     if(cardOfButton.getAttribute(data-answer) === this.innerHTML){
         score = score + parseInt(cardOfButton.getAttribute('data-value'))
         scoreDisplay.innerHTML = score
         cardOfButton.classlist.add('correct_answer')
         setTimeout(() => {
             while(cardOfButton.firstChild) {
                 cardOfButton.removechild(cardOfButton.lastChild)
             }
             cardOfButton.innerHTML.cardOfButton.getAttribute('data-value')
         }, 100)
        } else {
        cardOfButton.classList.add('wrong-answer')
        setTimeout(() => {
            while(cardOfButton.firstChild) {
                cardOfButton.removechild(cardOfButton.lastChild)
         }
         cardOfButton.innerHTML=0
        }, 100)
     } 
     cardOfButton.removeEventListener('click','flipCard')
 }
 //THESE ARETHE FIRST ENTERTAINMENT LINK 
 //https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple,
 //https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple`

 // LINK TO MIXED CATEGORY - GENRES****** DO NOT USE FOR CAPSTONE
//https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple
