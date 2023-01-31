class BindersController < ApplicationController
    def index
        render json: set_user.binders
    end

    def create
        binder = current_user.binders.new(binder_params)
        if binder.save
            render json: binder, status: :created
        else
            render json: {errors: binder.errors.full_messages}
        end
    end

    def update
        # binder = set_user.binders.find_by(params[:id])
        # Add condition for updating/changing the name text field
        if binder.update(name: params[:name])
            render json: binder
        else
            render json: {errors: binder.errors.full_messages}, status: :unauthorized
        end
    end
    private
    def binder_params
        params.require(:binder).permit(:name)
    end
end