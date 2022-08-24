class ReviewsController < ApplicationController
    skip_before_action :authorized

    def index
        reviews= Reviews.all
        render json: reviews
    end
end
