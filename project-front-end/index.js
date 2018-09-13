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

  const currentUserFinalScore = document.getElementById('current-user-final-score')
  currentUserFinalScore.innerText = `You scored: ${userScore} out of 10 Questions`

  gameOverPage.addEventListener('submit', addUserNameAndScore)
  function addUserNameAndScore(event){
    event.preventDefault();
    let userName = event.target.parentElement.children[4].children[0].value
    console.log('hit submit button')

    fetch(`http://localhost:3000/api/v1/games`, {
      method: "Post",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        username: userName,
        score: userScore
      })
    })
    .then(resp=> resp.json())
}//currently will post Name and Score to api-games
//working on adding to leaderboard

//   gameOverPage.addEventListener('click', function(event) {
//       //debugger
//       if(event.target.id === "again-button") {
//         displayHelloPage()
//         userScore = 0
//       }
//   })
}//END GAME OVER PAGE

displayHelloPage()


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

let userScore = 0
let questionCounter
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
        $("div#right_alert").show()
        setTimeout(hideAlert, 2000)

      } else {
        $("div#wrong_alert").show()
        setTimeout(hideAlert, 2000)
      }
      $("input[type=radio]").attr('disabled', true);
  }) 
  
}

function restartGame(randomQuestion) {
  gameOverPage.addEventListener('click', function(event) {
    if(event.target.id === "again-button") {
        displayHelloPage()
        userScore = 0
        triviaScore.innerHTML = `Current Score: ${userScore}`
        getAllQuestions()
    }
  })
}

restartGame()

function hideAlert(){
  if ($("div#right_alert").show()){
    $("div#right_alert").hide()
  }
  if ($("div#wrong_alert").show()){
    $("div#wrong_alert").hide()
  }
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
