class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def show
        render json: current_user
    end

    def create
        user = User.new(user_params)
        # byebug
        if user.save
            session[:user_id] = user.id
            render json: user
        else
            render json: {errors: user.errors.full_messages}, status: :unauthorized
        end
    end
    
    private
    def user_params
        params.require(:user).permit(:username, :password)
    end
end