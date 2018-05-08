class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body
      t.datetime :timestamp
      t.string :user

      t.timestamps
    end
  end
end
