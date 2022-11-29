class CreateFlashcards < ActiveRecord::Migration[6.1]
  def change
    create_table :flashcards do |t|
      t.integer :user_id
      t.integer :deck_id
      t.string :question
      t.string :answer

      t.timestamps
    end
  end
end
