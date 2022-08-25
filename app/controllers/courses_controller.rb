class CoursesController < ApplicationController
    skip_before_action :authorized

    def index
        courses= Courses.all
        render json: courses
    end

end
