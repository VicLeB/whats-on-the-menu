# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

u1 = User.create(username:'jerry', password: 'fish', admin: true)
u2 = User.create(username:'luna', password: 'ball', admin: true)
u3 = User.create(username:'layla', password: 'bone', admin: true)
u4 = User.create(username:'tyler', password: 'house', admin: true)
u5 = User.create(username:'john', password: 'five', admin: false)
u6 = User.create(username:'spence', password: '3000', admin: false)
