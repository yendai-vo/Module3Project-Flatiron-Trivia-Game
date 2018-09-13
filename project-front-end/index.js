
function getAllGames(){
  return fetch('http://localhost:3000/api/v1/games')
    .then(resp=>resp.json())
    .then(getGameInfo)
}
function getAllAnwerChoices(){
  return fetch('http://localhost:3000/api/v1/choices')
  .then(resp=>resp.json())
  .then(getChoicesInfo)
}
function getAllQuestions(){
  return fetch('http://localhost:3000/api/v1/questions')
  .then(resp=>resp.json())
  .then(renderQuestions)
}

function getChoicesInfo(choices){
  choices.forEach(function(choice){
      console.log(choice.question_id) //this grabs question ID how to grab question
      console.log(choice.answer_choice)
    })
}

function getGameInfo(games){
  games.forEach(function(game){
    console.log(game.username)
    console.log(game.score)
  })
}

const helloPage = document.getElementById('hello-page')
const triviaPage = document.getElementById('trivia-page')
const gameOverPage = document.getElementById('game-over-page')

function displayHelloPage() {
    document.getElementById('hello-page').style.display = "block";
    document.getElementById('trivia-page').style.display = "none";
    document.getElementById('game-over-page').style.display = "none";
}

helloPage.addEventListener('click', function(event) {
    //debugger
    if(event.target.id === "start-button") {
        displayTriviaPage()
    }
})

function displayTriviaPage() {
    document.getElementById('hello-page').style.display = "none";
    document.getElementById('trivia-page').style.display = "block";
    document.getElementById('game-over-page').style.display = "none";

    triviaPage.addEventListener('click', function(event) {
        //debugger
        if(event.target.id === "exit-button") {
            displayGameOverPage()
        }
    })


}

function displayGameOverPage() {
    document.getElementById('hello-page').style.display = "none";
    document.getElementById('trivia-page').style.display = "none";
    document.getElementById('game-over-page').style.display = "block";

    gameOverPage.addEventListener('click', function(event) {
        //debugger
        if(event.target.id === "again-button") {
            displayHelloPage()
        }
    })
}

displayHelloPage()
// displayTriviaPage()
// displayGameOverPage()


// function getAllQuestions(){
//     return fetch('http://localhost:3000/api/v1/questions')
//     .then(resp=>resp.json())
//     .then(getQuestionInfo)
// }

function randomQuestion(array){
  let question = array[Math.floor( Math.random()*array.length)];
  let questionIndex = array.indexOf(question)
  array.splice(questionIndex, 1);
  return question;
}

const currentQuestion = document.getElementById('trivia-question-title')
function renderQuestions(questions) {
  let q = randomQuestion(questions)
  renderOneQuestion(q)
  triviaPage.addEventListener('click', function(event) {
      //debugger
      if(event.target.id === "next-button") {
          let q = randomQuestion(questions)
          renderOneQuestion(q)
          //add in the function that would go to the next question
      }
  })
}

function renderOneQuestion(q){
  currentQuestion.innerHTML = `
      <h3 id="trivia-question-title">Question: ${q.question}</h3>
      <form action=""  id="trivia-answer-choices">
          ${createAnswers(q)}
      </form>
  `
  document.querySelector('#trivia-answer-choices').addEventListener('change', function(event) {
      if(event.target.value === "true") {
        $("div#right_alert").show()
        console.log('increase score')
        console.log('alert for correct answer')
      } else {
        $("div#wrong_alert").show()
        console.log('incorrect answer')
        console.log('alert for incorrect')
      }
  })
}

function createAnswers(q) {
    const answers = q.choices
    let myAnswers = ``
    for(let answer of answers) {
        let theAnswer = answer.answer_choice
        let rightOrWrong = answer.is_correct

        const oneAnswer = `<input type="radio" name="answers" value=${rightOrWrong}> ${theAnswer}<br>`
        myAnswers += oneAnswer
    }
    return myAnswers
}

getAllQuestions()
