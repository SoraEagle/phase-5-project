class CreateDecks < ActiveRecord::Migration[6.1]
  def change
    create_table :decks do |t|
      t.integer :binder_id
      t.string :name

      t.timestamps
    end
  end
end
