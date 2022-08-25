class MenuSerializer < ActiveModel::Serializer
  attributes :id, :name, :theme
  belongs_to :restaurant
  has_many :courses

end
