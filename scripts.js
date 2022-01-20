const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')
const easyButton = document.getElementById('question-btn')
const answerSpot = document.getElementById("myFormAnswer");
let currentQuestion = 0

// const questionContainer = document.getElementById('question-container')
// let shuffledQuestions, currentQuestionIndex, currentQuestion

let gameObject = {}
let score = 0 
// const film = 12 // REMOVING THIS BREAKS THE CARD! SEE NOTE ON LINE 29 COLUMN INNERHTML
// const levels = ["easy", "medium", "hard"] // this will replace the difficulty in fetch
// const genres = () => { [
//     {
//         name:'Film',
//         id: 11, 
//
//     },
//     {
//         name:'Books',
//         id: 10,
//     },
//     {
//         name:'Music',
//         id: 12,
//     },
//     {
//         name:'Video Games',
//         id: 15,
//     }
// ] }

    const column = document.createElement('div')
    column.classList.add('genre-column') //KEEP THIS
    column.innerHTML = "GENRE" // KEEP THIS
    game.append(column) // STICKS THE COLUMN TO THE GAME DIV
// const column = addGenre(film) // assign retun value 


// levels.forEach(level => {  // FOR EACH LOOP ADDS EACH CARD LEVEL
    const card = document.createElement('div')// CREATES EACH CARD-LEVELS OF DIFFICULTY
    //WITHOUT THIS ONLY ONE LEVEL!!!!
    // card.classList.add('card') //THIS GIVES IT A CLASS 
    game.append(card)  // sticks the card INTO the column
    // if (level === 'easy') {
    //     card.innerHTML = 1
    // }

 easyButton.addEventListener('click', function(e) {
fetch(`https://opentdb.com/api.php?amount=5&difficulty=${easyButton.value}&type=multiple`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        gameObject = data // outside this function data will not be accessible
        //gameObject brings in all data from fetch by difficulty
        column.innerHTML = data.results[0].category // NOTE:typing HERE overrides line 4 & 36 FILM -11
        card.innerHTML= data.results[0].question
        // answerSpot.innerHTML=data.results[0].correct_answer
        // card.setAttribute('data-value', card.getInnerHTML()) ASSIGNS VALUE (SCORE)
     })
    //  .then (done => card.addEventListener('click', flipCard))
    //  card.addEventListener('click', flipCard)
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
        document.getElementById("myFormInput").value = ""
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
    winPic.src="./success.gif"
    winBox.append(winPic)
    document.body.append(winBox)
}
function checkLose() {
let mehBox =document.createElement("div")
let mehPic = document.createElement("img")
    mehPic.src="./success.gif"//NOte to self change this to losing gif call check meh
    mehBox.append(mehPic)
    document.body.append(mehBox)
}
  // NOTE populate Correct Answer input box in the form with 
  //Array.from gameObject.results[0].correct_answer
    

 const allCards = Array.from(document.querySelectorAll('.card'))
//  allCards.forEach(card).removeEventListener('click', 'flipCard')
//REFERENCE ERROR CARD IS NOT DEFINED
 
 function getResult() {
    // const allCards = Array.from(document.querySelectorAll('.card'))
    // allCards.forEach(card => card.addEventListener('click', 'flipcard'))

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
 //new random data from Trivia API...FOR  [SAMPLE DATA]
 //{"response_code":0,"results":[{"category":"Entertainment: Film","type":"multiple",
 //"difficulty":"easy","question":"Which of the following is not the name of a 
 //&quot;Bond Girl&quot;? ","correct_answer":"Vanessa Kensington","incorrect_answers":
 //["Pam Bouvier","Mary Goodnight","Wai Lin"]},{"category":"Geography","type":
 //"multiple","difficulty":"easy","question":"What country is the second largest in
 // the world by area?","correct_answer":"Canada","incorrect_answers":["Russia",
 //"China","United States of America"]},{"category":"Entertainment: Cartoon & 
 //Animations","type":"multiple","difficulty":"easy","question":"What was the first
 // Disney movie to use CGI?","correct_answer":"The Black Cauldron",
 //"incorrect_answers":["Tron","Toy Story","Fantasia"]},{"category":"Celebrities",
 //"type":"multiple","difficulty":"easy","question":"What does film maker Dan Bell
 // typically focus his films on?","correct_answer":"Abandoned Buildings and Dead Malls",
 //"incorrect_answers":["Historic Landmarks","Action Films","Documentaries "]},
 //{"category":"Entertainment: Music","type":"multiple","difficulty":"easy","question":
 //"Which of these is the name of a song by Tears for Fears?","correct_answer":"Shout",
 //"incorrect_answers":["Scream","Yell","Shriek"]},{"category":"Entertainment:
 // Video Games","type":"multiple","difficulty":"easy","question":"What does Solid
 // Snake use to hide himself with?","correct_answer":"Cardboard Box",
 //"incorrect_answers":["Cloaking Device","Metal Crate","Cardboard cut-out"]},
 //{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy",
 //"question":"Who is the main protagonist in Danganronpa 2: Goodbye Despair?",
 //"correct_answer":"Hajime Hinata","incorrect_answers":["Nagito Komaeda",
 //"Makoto Naegi","Junko Enoshima"]},{"category":"Entertainment: Video Games",
 //"type":"multiple","difficulty":"easy","question":"What is the name of the game 
 //developer who created &quot;Call Of Duty: Zombies&quot;?","correct_answer":
 //"Treyarch","incorrect_answers":["Sledgehammer Games","Infinity Ward","Naughty Dog"]},
 //{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy",
 //"question":"Which of these covert groups employs Sam Fisher to work as a Splinter
 // Cell?","correct_answer":"Third Echelon","incorrect_answers":["Voron","Black Arrow",
 //"The Engineers"]},{"category":"Entertainment: Television","type":"multiple",
 //"difficulty":"easy","question":"In the show &quot;Futurama&quot; what is
 // Fry&#039;s full name?","correct_answer":"Philip J. Fry","incorrect_answers":
 //["Fry J. Philip","Fry Rodr&iacute;guez","Fry Philip"]}]}