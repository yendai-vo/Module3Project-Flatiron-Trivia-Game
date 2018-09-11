class CreateChoices < ActiveRecord::Migration[5.2]
  def change
    create_table :choices do |t|
      t.belongs_to :question, foreign_key: true
      t.string :answer_choice
      t.boolean :is_correct

      t.timestamps
    end
  end
end
