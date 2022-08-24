class AddressSerializer < ActiveModel::Serializer
  attributes :id, :street_number, :street_name, :city, :state, :zipcode
  has_one :restaurant
end
