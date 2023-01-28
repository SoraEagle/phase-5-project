class AddUserIdToBinders < ActiveRecord::Migration[6.1]
  def change
    add_column :binders, :user_id, :integer
  end
end
