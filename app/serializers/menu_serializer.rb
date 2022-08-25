class MenuSerializer < ActiveModel::Serializer
  attributes :id, :name, :theme
  has_one :restaurant
  has_many :courses
end
