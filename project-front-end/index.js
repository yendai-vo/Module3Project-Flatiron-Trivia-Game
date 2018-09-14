//******BEGIN HELLOPAGE **********************
const helloPage = document.getElementById('hello-page')
const triviaPage = document.getElementById('trivia-page')
const gameOverPage = document.getElementById('game-over-page')

function displayHelloPage() {
    document.getElementById('hello-page').style.display = "block";
    document.getElementById('trivia-page').style.display = "none";
    document.getElementById('game-over-page').style.display = "none";
}//displayHelloPage

helloPage.addEventListener('click', function(event) {
  //debugger
    if(event.target.id === "start-button") {
        displayTriviaPage()
    }
})//helloPage addEventListener
displayHelloPage()
//******** END HELLO PAGE ***********
//****BEGIN TRIVIA PAGE **************************

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
}//triviaPage & trivia eventlistener

function getAllQuestions(){
  return fetch('http://localhost:3000/api/v1/questions')
  .then(resp=>resp.json())
  .then(renderQuestions)
}//getAllQuestions & renderQuestions

function randomQuestion(array){
  let question = array[Math.floor( Math.random()*array.length)];
  let questionIndex = array.indexOf(question)
  array.splice(questionIndex, 1);
  return question;
}//end randomQuestion

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
  })//eventListener
}//end renderQuestions

let userScore = 0
let questionCounter = 0
const triviaScore = document.getElementById('trivia-score')
triviaScore.innerHTML = `Score: ${userScore}`
////begin new
function renderOneQuestion(q){
  // console.log(q)
  // debugger
  if (questionCounter < 10){
    // debugger
    currentQuestion.innerHTML = `
        <h3 id="trivia-question-title">Question: ${q.question}</h3>
        <form action=""  id="trivia-answer-choices">
            ${createAnswers(q)}
        </form>
    `
    questionCounter++
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
  } else if(questionCounter === 10){

    displayGameOverPage()
  }
}

///end new
// function renderOneQuestion(q){
//   currentQuestion.innerHTML = `
//       <h3 id="trivia-question-title">Question: ${q.question}</h3><hr>
//       <form action=""  id="trivia-answer-choices">
//           ${createAnswers(q)}
//       </form>
//   `
//   document.querySelector('#trivia-answer-choices').addEventListener('change', function(event) {
//     if(event.target.value === "true") {
//       userScore +=1
//       triviaScore.innerHTML = `Score: ${userScore}`
//       $("div#right_alert").show()
//       setTimeout(hideAlert, 2000)
//
// currentQuestion.innerHTML = `
//     <h3 id="trivia-question-title">Question: ${q.question}</h3>
//     <form action=""  id="trivia-answer-choices">
//         ${createAnswers(q)}
//     </form>
// `
// document.querySelector('#trivia-answer-choices').addEventListener('change', function(event) {
//   if(event.target.value === "true") {
//     userScore +=1
//     triviaScore.innerHTML = `Current Score: ${userScore}`
//    $("div#right_alert").show()
//   } else {
//     $("div#wrong_alert").show()
//   }
// })
// // console.log(q)
// // debugger
//         if (questionCounter < 10){
//           console.log(questionCounter)
//           // debugger
//           currentQuestion.innerHTML = `
//               <h3 id="trivia-question-title">Question: ${q.question}</h3>
//               <form action=""  id="trivia-answer-choices">
//                   ${createAnswers(q)}
//               </form>
//           `
//         questionCounter++
//         document.querySelector('#trivia-answer-choices').addEventListener('change', function(event) {
//             if(event.target.value === "true") {
//               userScore +=1
//               triviaScore.innerHTML = `Current Score: ${userScore}`
//               $("div#right_alert").show()
//               setTimeout(hideAlert, 2000)
//
//             } else {
//               $("div#wrong_alert").show()
//               setTimeout(hideAlert, 2000)
//             }
//             $("input[type=radio]").attr('disabled', true);
//         })//eventlistner
//       } else if(questionCounter >= 10){
//         displayGameOverPage()
//       }
//      }// end if1
//   })//end eventListner trivia answer questions
// }//end renderOneQuesiton

// function restartGame(randomQuestion) {
//   gameOverPage.addEventListener('click', function(event) {
//     if(event.target.id === "again-button") {
//         displayHelloPage()
//         userScore = 0
//         triviaScore.innerHTML = `Score: ${userScore}`
//         getAllQuestions()
//     }
//   })
// }

// restartGame()

function hideAlert(){
  if ($("div#right_alert").show()){
    $("div#right_alert").hide()
  }
  if ($("div#wrong_alert").show()){
    $("div#wrong_alert").hide()
  }
}//end HideAlert

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
}//end createAnswers

getAllQuestions()
///************end trivia game page ***********

// *************** GAME OVER PAGE
gameOverPage.addEventListener('click', function(event) {

  if(event.target.id === "again-button") {

    displayHelloPage()
    userScore = 0
    questionCounter = 0
    triviaScore.innerHTML = `Current Score: ${userScore}`
    let buttonElement = document.getElementById("form-submit-button")
    buttonElement.disabled = false
    //make a toggle function for turn true/false
    getAllQuestions()

    }
  })// start game over button
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
    .then(getAllGames)
    .then(disableSubmitButton)

    function getAllGames(){
      return fetch('http://localhost:3000/api/v1/games')
        .then(resp=>resp.json())
        .then(sortGames)
    }//getAllGames
    function sortGames(games){
      games.sort(function(a, b){
        if (b.score < a.score){
          return -1;
        }
        if (b.score > a.score){
          return 1;
        }
        return 0;
      })//sort
      let topFiveGames= games.slice(0, 5)
      topFiveGames.forEach(function (game){

      const gameScoreTable = document.getElementById('game-score-table')
      gameScoreTable.innerHTML += `
        <tr data-id="${game.id}">
          <td>${game.username}</td>
          <td>${game.score}</td>
        </tr>
      `
    })//topFiveGames - function

    }//sortGames

    function disableSubmitButton(){
      let buttonElement = document.getElementById("form-submit-button")
      buttonElement.disabled = true
    }
    // gameOverPage.addEventListener('click', function(event) {
    //     debugger
    //     if(event.target.id === "again-button") {
    //       displayHelloPage()
    //       userScore = 0
    //       triviaScore.innerHTML = `Current Score: ${userScore}`
    //       getAllQuestions()
    //       }
    //   })// start game over button
  } //addUserNameAndScore

  //DOUPLICATE RESTART GAMES??
  // gameOverPage.addEventListener('click', function(event) {
  //     if(event.target.id === "again-button") {
  //         displayHelloPage()
  //     }
  // })//gameOver - PlayAgaing Button

  // gameOverPage.addEventListener('click', function(event) {
  //     //debugger
  //     if(event.target.id === "again-button") {
  //       displayHelloPage()
  //       userScore = 0
  //         triviaScore.innerHTML = `Current Score: ${userScore}`
  //         getAllQuestions()
  //       }
  //   })// start game over button

}//end DisplayOverPage

//DOUPLICATE RESTART GAMES ABOVE??
//RESTART GAME
// function restartGame(randomQuestion) {
//   gameOverPage.addEventListener('click', function(event) {
//
//     if(event.target.id === "again-button") {
//         displayHelloPage()
//         userScore = 0
//         triviaScore.innerHTML = `Current Score: ${userScore}`
//         getAllQuestions()
//     }
//   })
// } //end restartGame(randomQuestions)
//
// restartGame()
