class MenusController < ApplicationController
    skip_before_action :authorized

    def index
        menus= Menus.all
        render json: menus
    end

    def show
        menu= Menu.find_by(id: params[:id])
        render json: menu, include: ['courses', 'courses.menu_items']
    end

    def create
        menu =Menu.create!(menu_params)
        render json: menu, status: :created
    end

    def destroy
        menu= Menu.find_by(id: params[:id])
        menu.destroy
        head :no_content
    end

    private

    def menu_params
        params.permit(:name, :theme, :restaurant_id)
    end
end
