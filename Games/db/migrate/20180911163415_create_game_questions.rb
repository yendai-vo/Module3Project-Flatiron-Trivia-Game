class CreateGameQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :game_questions do |t|
      t.belongs_to :question, foreign_key: true
      t.belongs_to :game, foreign_key: true

      t.timestamps
    end
  end
end
