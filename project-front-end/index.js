
function getAllGames(){
  return fetch('http://localhost:3000/api/v1/games')
    .then(resp=>resp.json())
    .then(getGameInfo)
}
function getGameInfo(games){
  games.forEach(function(game){
    console.log(game.username)
    console.log(game.score)
  })
}
function getAllQuestions(){
  return fetch('http://localhost:3000/api/v1/questions')
  .then(resp=>resp.json())
  .then(renderQuestions)
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

  const currentUserFinalScore = document.getElementById('current-user-final-score')
  currentUserFinalScore.innerText = `You scored: ${userScore} out of 10 Questions`

  gameOverPage.addEventListener('submit', addUserNameAndScore)
  function addUserNameAndScore(){
    console.log('hit submit button')
    console.log(userScore)
    //WORKING ON ADDING NAME & SCORE
    // fetch(`http://localhost:3000/api/v1/games`, {
    //   method: "Post",
    //   headers: {
    //     'Content-Type':'application/json'
    //   },
    //   body: JSON.stringify({
    //     username: userName,
    //     score: userScore
    //   })
    }
  }
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
      if(event.target.id === "next-button") {
          let q = randomQuestion(questions)
          renderOneQuestion(q)
      }
  })
}
let userScore = 0
const triviaScore = document.getElementById('trivia-score')
triviaScore.innerHTML = `Current Score: ${userScore}`
function renderOneQuestion(q){
  currentQuestion.innerHTML = `
      <h3 id="trivia-question-title">Question: ${q.question}</h3>
      <form action=""  id="trivia-answer-choices">
          ${createAnswers(q)}
      </form>
  `
  document.querySelector('#trivia-answer-choices').addEventListener('change', function(event) {
      if(event.target.value === "true") {
        userScore +=1
        triviaScore.innerHTML = `Current Score: ${userScore}`
        console.log('alert for correct - done')
      } else {
        console.log('alert for incorrect - done')
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
