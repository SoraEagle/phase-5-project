class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  before_action :authorize

  def current_user
    user = User.find_by(id: session[:user_id])
    return user
  end

  private
  def set_user
    return logged_in_user = User.find(session[:user_id])
  end

  def authorize
    render json: {errors: ["Not authorized"]}, status: :unauthorized unless current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end
end