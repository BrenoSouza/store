class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name
      t.float :price
      t.text :description
      t.integer :likes
      t.integer :dislikes
      t.text :url
      t.string :category

      t.timestamps
    end
  end
end
