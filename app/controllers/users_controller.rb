class UsersController < ApplicationController
    skip_before_action :authorized, only: :create

    # '/myrestaurant
    def show
        render json: @current_user, status: :ok
    end

    # '/signup
    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json:
        end
    end

    private

    def user_params
        params.permit(:username, :password)
    end

end
