class RestaurantsController < ApplicationController
    skip_before_action :authorized

    def index
        restaurants= Restaurant.all
        render json: restaurants
    end

    def show
        restaurant= Restaurant.find_by(id: params[:id])
        render json: restaurant
    end
end
