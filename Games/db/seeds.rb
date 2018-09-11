# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

g1 = Game.create(username:'Cindy', score: 5)
g2 = Game.create(username:'Becci', score: 10)
g3 = Game.create(username:'Chantal', score: 9)

q1 = Question.create(question: 'Variables in ruby are written in:')
q2 = Question.create(question: 'How do you access a function fetch() from a h1 element in JSX?')
q3 = Question.create(question: 'Which of the following are SQL data type categories?')
q4 = Question.create(question: 'Which command can you run to see all of your rake tasks?')
q5 = Question.create(question: 'Which terminal command tells you which directory you are currently in?')
q6 = Question.create(question: 'What does MVC mean?')
q7 = Question.create(question: 'True or False? Cookies are used to store data about a user.')
q8 = Question.create(question: ' In JS, what is the result of “80” + 71.2 ?')
q9 = Question.create(question: 'What are valid ways to loop or iterate in JS?')
q10 = Question.create(question: 'Given a service that returns information about cars, including the various drivers of each car, what might the URI look like for getting the second driver of the third car?')

Choice.create(question: q1, answer_choice: 'camelCase', is_correct: true)
Choice.create(question: q1, answer_choice: 'snake_case', is_correct: false)
Choice.create(question: q1, answer_choice: 'PascalCase', is_correct: false)
Choice.create(question: q1, answer_choice: 'None of the Above', is_correct: false)

Choice.create(question: q2, answer_choice: '<h1>{fetch}</h1>', is_correct: false)
Choice.create(question: q2, answer_choice: '<h1>${fetch()}</h1>', is_correct: false)
Choice.create(question: q2, answer_choice: '<h1>{fetch()}</h1>', is_correct: true)
Choice.create(question: q2, answer_choice: '<h1>${fetch}</h1>', is_correct: false)

Choice.create(question: q3, answer_choice: 'Class, True, Integer, Blah', is_correct: false)
Choice.create(question: q3, answer_choice: 'Text, Integer, Real, Blob', is_correct: true)
Choice.create(question: q3, answer_choice: 'Hypertext, Number, Blob, Strings', is_correct: false)
Choice.create(question: q3, answer_choice: 'None of the above', is_correct: false)

Choice.create(question: q4, answer_choice: 'rake -t', is_correct: true)
Choice.create(question: q4, answer_choice: 'rake -tacks', is_correct: false)
Choice.create(question: q4, answer_choice: 'rake t', is_correct: false)
Choice.create(question: q4, answer_choice: 'None of the Above', is_correct: false)

Choice.create(question: q5, answer_choice: 'ls', is_correct: false)
Choice.create(question: q5, answer_choice: 'pwd', is_correct: true)
Choice.create(question: q5, answer_choice: 'mkdir', is_correct: false)
Choice.create(question: q5, answer_choice: 'cd ..', is_correct: false)

Choice.create(question: q6, answer_choice: 'Model, View, Control', is_correct: false)
Choice.create(question: q6, answer_choice: 'Model, View, Contact', is_correct: false)
Choice.create(question: q6, answer_choice: 'Model, View Template', is_correct: false)
Choice.create(question: q6, answer_choice: 'None of the Above', is_correct: true)

Choice.create(question: q7, answer_choice: 'True', is_correct: true)
Choice.create(question: q7, answer_choice: 'False', is_correct: false)

Choice.create(question: q8, answer_choice: '151.2', is_correct: false)
Choice.create(question: q8, answer_choice: '“8071.2”', is_correct: true)
Choice.create(question: q8, answer_choice: '151', is_correct: false)
Choice.create(question: q8, answer_choice: 'None of the Above', is_correct: false)

Choice.create(question: q9, answer_choice: 'for…of', is_correct: false)
Choice.create(question: q9, answer_choice: 'for…in', is_correct: false)
Choice.create(question: q9, answer_choice: 'for (let i = 0; i < myArray.length; i++){}', is_correct: false)
Choice.create(question: q9, answer_choice: 'All of the Above', is_correct: true)

Choice.create(question: q10, answer_choice: '/cars/1/drivers/2', is_correct: false)
Choice.create(question: q10, answer_choice: '/cars3drivers2', is_correct: false)
Choice.create(question: q10, answer_choice: '/cars/2/drivers/3', is_correct: false)
Choice.create(question: q10, answer_choice: '/cars/3/drivers/2', is_correct: true)

GameQuestion.create(game: g1, question: q1)
GameQuestion.create(game: g1, question: q2)
GameQuestion.create(game: g1, question: q5)
GameQuestion.create(game: g1, question: q7)
GameQuestion.create(game: g1, question: q9)

GameQuestion.create(game: g2, question: q10)
GameQuestion.create(game: g2, question: q1)
GameQuestion.create(game: g2, question: q8)
GameQuestion.create(game: g2, question: q2)
GameQuestion.create(game: g2, question: q9)

GameQuestion.create(game: g3, question: q4)
GameQuestion.create(game: g3, question: q2)
GameQuestion.create(game: g3, question: q5)
GameQuestion.create(game: g3, question: q6)
GameQuestion.create(game: g3, question: q10)