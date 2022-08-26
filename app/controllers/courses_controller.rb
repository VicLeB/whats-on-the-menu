class CoursesController < ApplicationController
    skip_before_action :authorized, only: :index

    def index
        courses= Courses.all
        render json: courses
    end

    def create
        course =Course.create!(courses_params)
        render json: course, status: :created
    end

    private

    def courses_params
        params.permit(:name, :menu_id)
    end

end
