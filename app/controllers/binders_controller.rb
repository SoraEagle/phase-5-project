class BindersController < ApplicationController
    def index
        binders = set_user.binders
        render json: binders
    end

    def create
        binder = Binder.new(binder_params)
        # byebug
        if binder.save
            render json: binder, status: :created
        else
            render json: {errors: binder.errors.full_messages}, status: :unauthorized
        end
    end

    def update
        # binder = set_user.binders.find(params[:id])
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