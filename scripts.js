const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')
let score = 0 
const film = 12 // REMOVING THIS BREAKS THE CARD! SEE NOTE ON LINE 29 COLUMN INNERHTML
const levels = ["easy", "medium", "hard"] // this will replace the difficulty in fetch
const genres = () => { [
    {
        name:'Film',
        id: 11
    },
    {
        name:'Books',
        id: 10
    },
    {
        name:'Music',
        id: 12
    },
    {
        name:'Video Games',
        id: 15
    }
] }

function addGenre(genre) { // NOTE WITH GENRE IN THIS FUNCTION UNDEFINED SHOWS UP??!
    //NOTE genres BREAKS THE CARD AND ITS NEVER READ
const column = document.createElement('div')
column.classList.add('genre-column')
column.innerHTML = "this is a genre" // NOTE:typing HERE overrides line 4 & 36 FILM -11
game.append(column) // STICKS THE COLUMN TO THE GAME DIV
// genre.forEach(genre =>addGenre(film, genre)) - SYNTAX ERROR THIS IS NOT A FUNCTION
//WHEN THIS IS IN THE addGenre function - THE SCORE DOES NOT SHOW UP!!!!!!!!
//BECZ IT IS COMMENTED OUT NOW = THE DIV CARD WITH THE SCORE SHOWS UP!!
return column
}
const column = addGenre(film) // assign retun value 
// NOTE TO SELF...FOR SOME REASON THIS BREAKS THE DIV.GENRE

levels.forEach(level => {  // FOR EACH LOOP ADDS EACH CARD LEVEL
    const card = document.createElement('div')// CREATES EACH CARD-LEVELS OF DIFFICULTY
    //WITHOUT THIS ONLY ONE LEVEL!!!!
    card.classList.add('card') //THIS GIVES IT A CLASS 
    column.append(card)  // sticks the card INTO the column
    if (level === 'easy') {
        card.innerHTML = 100
    }
        
    if (level === 'medium') {
        card.innerHTML = 200
    }
        
    if (level === 'hard') {
            card.innerHTML = 300
    }
        
fetch(`https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple`)
    .then(response => response.json())
    .then(data => {
        //Possibly NOT enough data to get 10 items per difficulty level and get random
        //question using Math.random() and passing it through instead of 0
        //example: if amount =10 above, you could do:
        //cont randomNumber = Math.floor(Math.random()*10)
        // and pass through randomNumber, so:
        //data.result[0]question 
        console.log(data)
        card.setAttribute('data-question', data.results[0].question)
        card.setAttribute('data-answer', data.results[0].correct_answer)
        card.setAttribute('data-value', card.getInnerHTML())
     })
    //  .then (done => card.addeventlistner('click', 'flipCard'))
    //  card.addEventListener("click, flipCard")
}) 

function flipcard(){
    this.innerHTML = ''
    this.style.fontSize = '15px';
    const textDisplay = document.createElement('div');
    const trueButton = document.createElement('button')
    const falseButton = document.createElement('button')
    trueButton.innerHTML= 'true-button'
    falseButton.innerHTML= 'false-button'
    trueButton.classList.add('true-button')
    falseButton.classList.add('false-button')
    trueButton.addEventListener('click',getResult)
    falseButton.addEventListener('click',getResult)
    textDisplay.innerHTML = this.getAttribute('data-question')
    this.append(textDisplay, trueButton, falseButton)
   }

 const allCards = Array.from(document.querySelectorAll('.card'))
//  allCards.forEach(card).removeEventListener('click', 'flipCard')
//REFERENCE ERROR CARD IS NOT DEFINED
 
 function getResult() {
    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.addEventListener('click', 'flipcard'))

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
 