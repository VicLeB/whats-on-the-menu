class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.belongs_to :restaurant, null: false, foreign_key: true
      t.integer :street_number
      t.string :street_name
      t.string :city
      t.string :state
      t.integer :zipcode

      t.timestamps
    end
  end
end
