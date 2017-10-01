class Room < ApplicationRecord

  has_many :residents, through: :resident_room, :dependent => :delete_all
  has_many :resident_room, :dependent => :delete_all

end
