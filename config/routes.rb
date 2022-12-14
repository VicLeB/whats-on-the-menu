Rails.application.routes.draw do
  resources :menu_items, only: [:index, :create, :destroy, :update]
  resources :courses, only: [:index, :create, :destroy, :update]
  resources :menus, only: [:index, :show, :create, :destroy]
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
