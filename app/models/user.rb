class User < ApplicationRecord
    validates :username, uniqueness: true, presence: true
    validates :password, presence: true
    has_many :restaurants
    has_many :reviews
    has_secure_password
end
