class ResidentRoom < ApplicationRecord

  belongs_to :room
  belongs_to :resident
  
end
