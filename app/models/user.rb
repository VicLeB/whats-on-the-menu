class User < ApplicationRecord
    validates :username, uniqueness: true, presense: true
    has_secure_password
end
