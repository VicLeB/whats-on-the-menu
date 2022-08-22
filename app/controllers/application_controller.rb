class ApplicationController < ActionController::API
    include ActionController::Cookies

rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid
rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end

    private

    def render_record_invalid(e)
        render json: {errors: e.reocrd.errors.full_messages}, status: :unprocessable_entity
    end

    def render_record_not_found
        render json: {errors: "Record not found"}, status: :not_found
    end
end
