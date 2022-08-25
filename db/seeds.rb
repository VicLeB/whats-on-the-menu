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
c22= Course.create(name:"Classics", menu_id:m9.id)
c23= Course.create(name:"House Favorites", menu_id:m9.id)
c24= Course.create(name:"Sides", menu_id:m9.id)
c25= Course.create(name:"Starters", menu_id:m10.id)
c26= Course.create(name:"Salads and Bowls", menu_id:m10.id)
c27= Course.create(name:"Main", menu_id:m10.id)
c28= Course.create(name:"Starters", menu_id:m11.id)
c29= Course.create(name:"Shareables", menu_id:m11.id)
c30= Course.create(name:"Main", menu_id:m11.id)
c31= Course.create(name:"Cravings", menu_id:m12.id)

puts "Seeding menu items..."

i1= MenuItem.create(name:"Mussles", description:"White wine, butter, garlic, herbs, baguette", price:18, course_id:c1.id)
i2= MenuItem.create(name:"Seafood Chowder", description:"Clams, house smoked bacon, red potato", price:10, course_id:c1.id)
i3= MenuItem.create(name:"Litle Gem Salad", description:"sweet gem lettuce, creamy garlic dressing,caper berries, red onion, radish, Grana Padano, pistachio", price:14, course_id:c2.id)
i4= MenuItem.create(name:"Cobb Salad", description:"Romain lettuce, blue cheese, bacon, egg, cherry tomato, ranch dressing", price:16, course_id:c2.id)
i5= MenuItem.create(name:"Fish and Chips", description:"two peices of Codd fish with housemade fries", price:20, course_id:c3.id)
i6= MenuItem.create(name:"Blackened grilled Salmon sandwich", description:"served on a housemade bun with your choice of fries or salad", price:18, course_id:c3.id)
i7= MenuItem.create(name:"Mussles", description:"White wine, butter, garlic, herbs, baguette", price:18, course_id:c4.id)
i8= MenuItem.create(name:"Seafood Chowder", description:"Clams, house smoked bacon, red potato", price:10, course_id:c4.id)
i9= MenuItem.create(name:"Litle Gem Salad", description:"sweet gem lettuce, creamy garlic dressing,caper berries, red onion, radish, Grana Padano, pistachio", price:14, course_id:c5.id)
i10= MenuItem.create(name:"Cobb Salad", description:"Romain lettuce, blue cheese, bacon, egg, cherry tomato, ranch dressing", price:16, course_id:c5.id)
i11= MenuItem.create(name:"Pan seared scallops", description:"Seared in lemon butter sauce, served over risotto with spring peas", price:32, course_id:c6.id)
i12= MenuItem.create(name:"Grilled Wild Alaskan King Salmon", description:"served with whipped potato, asperagus, with dill beurre blanc", price:40, course_id:c6.id)
i13= MenuItem.create(name:"Lobster bisque", description:"house made with white wine and lobster tails", price:10, course_id:c7.id)
i14= MenuItem.create(name:"Cream of asperagus", description:"cream and dill", price:8, course_id:c7.id)
i15= MenuItem.create(name:"Grilled Alaskan Halibut", description:"Served over warm orzo with sundried tomatos", price:35, course_id:c8.id)
i16= MenuItem.create(name:"Seafood pasta", description:"Clams, mussels, and  salmon in a white wine and garlic sauce with spaghetti", price:26, course_id:c8.id)
i17= MenuItem.create(name:"Arancini", description:"Fried saffron balls stuffed with fontina cheese- marinara sauce", price:15, course_id:c9.id)
i18= MenuItem.create(name:"Antipasto of the house", description:"Prosciutto, tuscan bean salad, fresh mozzarella, grilled vegetables, and more", price:18, course_id:c9.id)
i19= MenuItem.create(name:"Cesar", description:"With housemade crutons", price:13, course_id:c10.id)
i20= MenuItem.create(name:"Caprese", description:"Fresh mozzarella and local tomatos", price:14, course_id:c10.id)
i21= MenuItem.create(name:"Spinach Lasagna", description:"Fresh spinach pasta layered with ricotta, pesto, and topped with marinara sauce", price:23, course_id:c11.id)
i22= MenuItem.create(name:"Cioppino", description:"prawns, mussels, clams, and calamari is a spicy tomato and white wine broth", price:28, course_id:c11.id)
i23= MenuItem.create(name:"Arancini", description:"Fried saffron balls stuffed with fontina cheese- marinara sauce", price:15, course_id:c12.id)
i24= MenuItem.create(name:"Bruschetta", description:"Grilled ciabatta bread with ripe summer tomatoes, basil, olive oil, and balsamic reduction", price:17, course_id:c12.id)
i25= MenuItem.create(name:"Cesar", description:"With housemade crutons", price:13, course_id:c13.id)
i26= MenuItem.create(name:"Caprese", description:"Fresh mozzarella and local tomatos", price:14, course_id:c13.id)
i27= MenuItem.create(name:"Spinach Lasagna", description:"Fresh spinach pasta layered with ricotta, pesto, and topped with marinara sauce", price:23, course_id:c14.id)
i28= MenuItem.create(name:"Linguini alle Vongole", description:"prawns, mussels, clams, and calamari is a spicy tomato and white wine broth", price:25, course_id:c14.id)
i29= MenuItem.create(name:"Trio of Gelato", description:"pistacchio, coffee, strawberry", price:11, course_id:c15.id)
i30= MenuItem.create(name:"Tiramisu", description:"House made with marscapone, and ladyfingers dipped in coffee, dusted with Coco", price:13, course_id:c15.id)

i31= MenuItem.create(name:"Escargots", description:"Parsley, butter, lemon, garlic, shallots", price:20, course_id:c16.id)
i32= MenuItem.create(name:"Steak Tartar", description:"Capers, cornichons, shallots, quail egg", price:24, course_id:c16.id)
i33= MenuItem.create(name:"Salade aux fenouil avec crevettes", description:"Poached shrimp, shaved fennel, frisee, avocado, and citrus", price:24, course_id:c17.id)
i34= MenuItem.create(name:"Salade Caesar", description:"Romaine, anchovy, parmesan, lemon", price:18, course_id:c17.id)
i35= MenuItem.create(name:"Le croque Monsieur", description:"Jambon, gruyere, sourdough bread, petite salade", price:23, course_id:c18.id)
i36= MenuItem.create(name:"French Dip", description:"Roasted ribeye, gruyere, horseradish, pomme frites, au jus", price:25, course_id:c18.id)

i37= MenuItem.create(name:"Escargots", description:"Parsley, butter, lemon, garlic, shallots", price:20, course_id:c19.id)
i38= MenuItem.create(name:"Tartar de Saumon ", description:"Salmon tartar, goat cheese, caviar", price:29, course_id:c19.id)
i39= MenuItem.create(name:"Salade aux fenouil avec crevettes", description:"Poached shrimp, shaved fennel, frisee, avocado, and citrus", price:24, course_id:c20.id)
i40= MenuItem.create(name:"Salade Caesar", description:"Romaine, anchovy, parmesan, lemon", price:18, course_id:c20.id)
i41= MenuItem.create(name:"Boeuf Bourguignon", description:"Red wine braised beef with carrots, pearl onions, mushrooms", price:40, course_id:c21.id)
i42= MenuItem.create(name:"Steak Frites", description:"NY strip steak, herb butter, pommes frites", price:48, course_id:c21.id)

i43= MenuItem.create(name:"Full breakfast", description:"sausage, bacon, two eggs cooked the way you choose, toast with jam", price:13, course_id:c22.id)
i44= MenuItem.create(name:"Breakfast sandwich", description:"Brioche bun with fried egg, cheese, and jambon, pomme frites", price:15, course_id:c22.id)
i45= MenuItem.create(name:"Eggs Benedict", description:"English muffin, jambon, sauce hollandaise", price:16, course_id:c23.id)
i46= MenuItem.create(name:"Crepe", description:"served with seasonal fruit", price:17, course_id:c23.id)
i47= MenuItem.create(name:"pomme frites", description:"with shaved parmesan", price:8, course_id:c24.id)
i48= MenuItem.create(name:"Fruit bowl", description:"selection of seasonal fruit", price:9, course_id:c24.id)

i49= MenuItem.create(name:"Wings", description:"Mix of wings and drums, with your choice of sauce, carrots, celery, blue cheese dressing", price:14, course_id:c25.id)
i50= MenuItem.create(name:"Mini sliders", description:"2 mini burgers or mini chicken sandwich on potato roll", price:10, course_id:c25.id)
i51= MenuItem.create(name:"Taco salad", description:"Tortilla bowl, lettuce, pico de gallo, beef, cheese, guacamole, chipotle sauce, sour cream", price:14, course_id:c26.id)
i52= MenuItem.create(name:"Quinoa bowl", description:"Arugula, quinoa, carrot, edamame, avocado, almonds, tomato, feta, balsamic vinaigrette", price:15, course_id:c26.id)
i53= MenuItem.create(name:"Tyler's Burger", description:"Cheddar cheese, pickles, lettuce, diced onion, tomato, tyler's sauce", price:16, course_id:c27.id)
i54= MenuItem.create(name:"Chicken tenders", description:"4 tenders with fresh house fries, your choice of sauce", price:14, course_id:c27.id)

i55= MenuItem.create(name:"Wings", description:"Mix of wings and drums, with your choice of sauce, carrots, celery, blue cheese dressing", price:14, course_id:c28.id)
i56= MenuItem.create(name:"Mini sliders", description:"2 mini burgers or mini chicken sandwich on potato roll", price:10, course_id:c28.id)
i57= MenuItem.create(name:"Nachos", description:"Corn tortilla chips, queso sauce, pico de gallo, sour cream, salsa, guacamole", price:14, course_id:c29.id)
i58= MenuItem.create(name:"Chicken Quesadillas", description:"Chicken and cheese in flour tortilla, sour cream, salsa, guacamole", price:15, course_id:c29.id)
i59= MenuItem.create(name:"Tyler's Burger", description:"Cheddar cheese, pickles, lettuce, diced onion, tomato, tyler's sauce", price:16, course_id:c30.id)
i60= MenuItem.create(name:"Chicken tenders", description:"4 tenders with fresh house fries, your choice of sauce", price:14, course_id:c30.id)

i61= MenuItem.create(name:"Grilled Cheese sandwich", description:"Grilled Sourdough, pepper jack, cheddar cheese", price:11, course_id:c31.id)
i62= MenuItem.create(name:"Onion Rings", description:"Basket of crispy rings", price:10, course_id:c31.id)
i63= MenuItem.create(name:"Sweet potato waffle fries", description:"served with chipotle mayo", price:8, course_id:c31.id)


