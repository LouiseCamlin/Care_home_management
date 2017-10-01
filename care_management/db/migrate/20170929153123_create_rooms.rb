class CreateRooms < ActiveRecord::Migration[5.1]
  def change
    create_table :rooms do |t|
      t.integer :beds
      t.integer :room_number

      t.timestamps
    end
  end
end
