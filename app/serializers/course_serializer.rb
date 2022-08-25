class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :menu
  has_many :menu_items
end
