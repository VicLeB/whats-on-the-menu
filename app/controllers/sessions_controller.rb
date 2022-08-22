class SessionsController < ApplicationController
  skip_before_action :authorized, only: :create

  # '/login'
  def create
    user= User.find_by_username(params[:username])
    if user&.authenticate(params[:password])
      session[:user_id]= user.id
      render json: user, status: :ok
    else
      render json: "Invalid Username or Password", status: :unauthorized
    end
  end

  # '/logout
  def destroy
    session.delete(:user_id)
  end
end