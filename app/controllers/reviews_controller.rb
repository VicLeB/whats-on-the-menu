class ReviewsController < ApplicationController
    skip_before_action :authorized, only: :index

    def index
        reviews= Reviews.all
        render json: reviews
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    private

    def review_params
        params.permit(:restaurant_id, :user_id, :reviewer_name, :title, :content, :rating)
    end
end
