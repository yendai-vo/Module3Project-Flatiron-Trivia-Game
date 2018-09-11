class Question < ApplicationRecord
    has_many :game_questions
    has_many :games, through: :game_questions
    has_many :choices
end
