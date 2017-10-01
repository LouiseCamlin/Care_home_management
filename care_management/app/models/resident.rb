class Resident < ApplicationRecord

  has_one :room, through: :resident_room, :dependent => :delete
  has_one :resident_room, :dependent => :delete


end
