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