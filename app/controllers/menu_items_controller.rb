class MenuItemsController < ApplicationController
    skip_before_action :authorized

    def index
        menuItems = MenuItems.all
        render json: menuItems
    end

    def create
        menuItem = MenuItem.create!(menu_items_params)
        render json: menuItem, status: :created
    end

    def destroy
        menuItem= MenuItem.find_by(id: params[:id])
        menuItem.destroy
        head :no_content
    end

    def update
        menuItem= MenuItem.find_by(id: params[:id])
        menuItem.update!(menu_items_params)
        render json: menuItem, status: :accepted
    end

    private

    def menu_items_params
        params.permit(:name, :description, :price, :course_id)
    end
end
