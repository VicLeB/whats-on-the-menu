class Restaurant < ApplicationRecord
  belongs_to :user
  has_one :address
  has_many :reviews
  has_many :menus
end
