class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :reviewer_name, :title, :content, :rating
  has_one :restaurant
  has_one :user
end
