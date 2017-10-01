class CreateResidentRooms < ActiveRecord::Migration[5.1]
  def change
    create_table :resident_rooms do |t|
      t.references :room, foreign_key: true
      t.references :resident, foreign_key: true

      t.timestamps
    end
  end
end
