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
  .then(getQuestionInfo)
}

function getQuestionInfo(questions){
  questions.forEach(function(question){
    console.log(question.question)
  })
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
