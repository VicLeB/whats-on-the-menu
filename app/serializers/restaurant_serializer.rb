class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :cuisine
  has_one :user
  has_one :address
end
