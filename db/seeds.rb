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

puts "Seeding restaurants..."


r1= Restaurant.create(user_id:u1.id, name:"Jerry's Seafood", image_url:"https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3474&q=80", cuisine:"Seafood")
r2= Restaurant.create(user_id:u2.id, name:"Luna's Italian Kitchen", image_url:"https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80", cuisine:"Italian")
r3= Restaurant.create(user_id:u3.id, name:"Chez Layla", image_url:"https://images.unsplash.com/photo-1480951759438-f39a376462f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80", cuisine:"French")
r4= Restaurant.create(user_id:u4.id, name: "Tyler's Bar and Grill", image_url:"https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80", cuisine:"American")

puts "Seeding Addresses..."

Address.create(restaurant_id:r1.id, street_number: 432, street_name:"Leary street", city: "Seattle", state:"WA", zipcode:98209)

Address.create(restaurant_id:r2.id, street_number: 87, street_name:"Washington Street", city:"Hoboken", state:"NJ", zipcode:07030)

Address.create(restaurant_id:r3.id, street_number:222, street_name:"Stanley Street", city:"Seattle",state:"WA", zipcode:98108)

Address.create(restaurant_id:r4.id, street_number:1902, street_name:"Monroe Street", city:"Hoboken", state:"NJ", zipcode:07030)
