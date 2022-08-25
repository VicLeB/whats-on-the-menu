class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :menu
end
