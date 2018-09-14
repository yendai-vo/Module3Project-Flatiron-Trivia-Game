FLATIRON LEARNING TRIVIA GAME
USES rails s in backend - be sure to create/migrate/seed database (PostgresSQL)
15 questions are in the seed file.

* OBJECTIVES:
** User:  -> Go to the site:
*** See current high score
*** Enter name
*** Click Start Game Button
** Start Game:
** “Username’s Score” at the top it will start at zero
*** Asks question - multiple choice with 1 correct answer
** User answers
*** Show if your answer was right or wrong
*** Click next question
*** Go through 10 questions
*** Show score complete score at the end.
*** Click new game or exit game
** New game refreshes page and updates new questions
** Exit game takes you back to home page
****************************************
Hello-Page:
** Welcome to Game
** Start Game Button -- > user selects and takes to Game
Trivia-Page:
** Current Player Score: __ increments by 1
** Question come up one at a time with Answer choices.
** User Selects answer and a hidden pop up of if correct or if wrong comes up.
** At end of game (10 questions) - goes to end of game page
** Add exit Trivia button takes to end of game
End-of-Game:
** Trivia game is over
** Enter name
** Add name and score to leaderboard
** Leaderboard highest on top
