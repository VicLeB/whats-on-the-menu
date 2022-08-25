class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :cuisine
  has_one :user
  has_one :address
  has_many :reviews
  has_many :menus
end
