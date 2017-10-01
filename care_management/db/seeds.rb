# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ResidentRoom.delete_all()
Room.delete_all()
Resident.delete_all()

res1 = Resident.create({name: "May"})
res2 = Resident.create({name: "Jerry"})
room1 = Room.create({beds: 1, room_number: 1})
room2 = Room.create({beds: 2, room_number: 2 })
Room.create([{beds: 1, room_number: 3}, {beds: 1, room_number: 4},
  {beds: 1, room_number: 5}, {beds: 1, room_number: 6}, {beds: 2, room_number: 7}, {beds: 2, room_number: 8},
  {beds: 2, room_number: 9}, {beds: 2, room_number: 10}])
ResidentRoom.create(room: room1, resident: res1)
