class BindersController < ApplicationController
    def index
        binders = set_user.binders
        render json: binders
    end

    def create
        binder = set_user.binders.new(binder_params)
        if binder_name
            if binder.save
                render json: binder, status: :created
            else
                render json: {errors: binder.errors.full_messages}, status: :unauthorized
            end
        else
            render json: {errors: binder.errors.full_messages}, status: :unauthorized
    end

    def update
        binder = set_user.binders.find(params[:id])
        # Add condition for updating/changing the binder_name text field
        if binder.update(binder_name: params[:binder_name])
            render json: binder
        else
            render json: {errors: binder.errors.full_messages}, status: :unauthorized
        end
    end
    private
    def binder_params
        params.require(:binder).permit(:binder_name)
    end
end