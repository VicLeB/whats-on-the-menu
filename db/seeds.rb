# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding Users..."

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

puts "Seeding Reviews..."

Review.create(restaurant_id:r1.id, user_id:u5.id, reviewer_name: "John", title: "So Delicious!", content: "I took my wife out for an special dinner and we had a great time. The seafood was very fresh and the service was fantastic!", rating: 5)

Review.create(restaurant_id:r1.id, user_id:u6.id, reviewer_name: "Spencer", title: "Lunch with a view", content: "I took my work collegues who were from out of town for lunch and everyone enjoyed the waterfront views! The food was also very good.", rating: 4)

Review.create(restaurant_id:r2.id, user_id:u6.id, reviewer_name: "Spencer", title: "Can't go wrong with good Pizza!", content: "The apps were very nice but the pizza was the highlight of the meal! Crisp crust with delicious homemade tomato sauce!", rating: 5)

Review.create(restaurant_id:r3.id, user_id:u5.id, reviewer_name: "John", title: "C'est bon!", content: "Must try the escargot! The cheese selection was also very good. I will be back!", rating: 5)

Review.create(restaurant_id:r4.id, user_id:u5.id, reviewer_name: "John", title: "Fun spot!", content: "Fun atmosphere. Great for burger and fries any time!", rating: 4)

puts "Seeding Menus..."

m1= Menu.create(name:"Lunch", theme:1, restaurant_id:r1.id)
m2= Menu.create(name:"Dinner", theme:1, restaurant_id:r1.id)
m3= Menu.create(name:"Daily Special", theme:2, restaurant_id:r1.id)
m4= Menu.create(name:"Lunch", theme:1, restaurant_id:r2.id)
m5= Menu.create(name:"Dinner", theme:1, restaurant_id:r2.id)
m6= Menu.create(name:"Dessert", theme:2, restaurant_id:r2.id)
m7= Menu.create(name:"Lunch", theme:1, restaurant_id:r3.id)
m8= Menu.create(name:"Dinner", theme:1, restaurant_id:r3.id)
m9= Menu.create(name:"Brunch", theme:2, restaurant_id:r3.id)
m10= Menu.create(name:"Lunch", theme:1, restaurant_id:r4.id)
m11= Menu.create(name:"Dinner", theme:1, restaurant_id:r4.id)
m12= Menu.create(name:"Late Night", theme:2, restaurant_id:r4.id)

puts "Seeding Courses..."

c1= Course.create(name:"Appetizer", menu_id:m1.id)
c2= Course.create(name:"Salad", menu_id:m1.id)
c3= Course.create(name:"Main", menu_id:m1.id)
c4= Course.create(name:"Appetizer", menu_id:m2.id)
c5= Course.create(name:"Salad", menu_id:m2.id)
c6= Course.create(name:"Main", menu_id:m2.id)
c7= Course.create(name:"Soup", menu_id:m3.id)
c8= Course.create(name:"Main", menu_id:m3.id)
c9= Course.create(name:"Appetizer", menu_id:m4.id)
c10= Course.create(name:"Salad", menu_id:m4.id)
c11= Course.create(name:"Main", menu_id:m4.id)
c12= Course.create(name:"Appetizer", menu_id:m5.id)
c13= Course.create(name:"Salad", menu_id:m5.id)
c14= Course.create(name:"Main", menu_id:m5.id)
c15= Course.create(name:"Selection", menu_id:m6.id)
c16= Course.create(name:"Appetizer", menu_id:m7.id)
c17= Course.create(name:"Salad", menu_id:m7.id)
c18= Course.create(name:"Main", menu_id:m7.id)
c19= Course.create(name:"Appetizer", menu_id:m8.id)
c20= Course.create(name:"Salad", menu_id:m8.id)
c21= Course.create(name:"Main", menu_id:m8.id)
c19= Course.create(name:"Classics", menu_id:m9.id)
c20= Course.create(name:"House Favorites", menu_id:m9.id)
c21= Course.create(name:"Sides", menu_id:m9.id)
c22= Course.create(name:"Starters", menu_id:m10.id)
c23= Course.create(name:"Salads and Bowls", menu_id:m10.id)
c24= Course.create(name:"Main", menu_id:m10.id)
c25= Course.create(name:"Starters", menu_id:m11.id)
c26= Course.create(name:"Shareables", menu_id:m11.id)
c27= Course.create(name:"Main", menu_id:m11.id)
c28= Course.create(name:"Cravings", menu_id:m12.id)

