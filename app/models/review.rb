class Review < ApplicationRecord
  validates :title, presence: true
  validates :content, presence: true
  validates :reviewer_name, presence: true
  validates :rating, presence: true
  belongs_to :restaurant
  belongs_to :user
end
