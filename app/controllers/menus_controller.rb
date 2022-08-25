class MenusController < ApplicationController
    skip_before_action :authorized

    def index
        menus= Menus.all
        render json: menus
    end

    def show
        menu= Menu.find_by(id: params[:id])
        render json: menu
    end
end
