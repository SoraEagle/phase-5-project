class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create, :destroy]

  def create
    user = User.find_by(username: params[:username])
    # byebug
    if user
      if user.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user
      else
        render json: {errors: ["Invalid Password"]}, status: :unauthorized
      end
    else
      render json: {errors: ["Invalid Username"]}, status: :unauthorized
    end
  end

  def destroy
    # byebug
    session.delete :user_id
    head :no_content
  end
end