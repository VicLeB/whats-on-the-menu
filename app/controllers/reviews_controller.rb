class ReviewsController < ApplicationController
    skip_before_action :authorized, only: :index

    def index
        reviews= Reviews.all
        render json: reviews
    end

    def create

    end
end
