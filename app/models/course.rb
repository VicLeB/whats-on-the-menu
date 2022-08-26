class Course < ApplicationRecord
  validates :name, presence: true
  belongs_to :menu
  has_many :menu_items
end
