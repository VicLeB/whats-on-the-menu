class MenuItemsController < ApplicationController
    skip_before_action :authorized

    def index
        menuItems = MenuItems.all
        render json: menuItems
    end
end
