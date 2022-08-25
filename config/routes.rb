Rails.application.routes.draw do
  resources :menu_items
  resources :courses, only: :index
  resources :menus, only: [:index, :show]
  resources :reviews, only: [:index, :create]
  resources :addresses, only:[:index, :show]
  resources :restaurants, only: [:index, :show]
  resources :users

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
