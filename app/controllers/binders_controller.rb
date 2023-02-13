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
    private
    def binder_params
        params.require(:binder).permit(:name)
    end
end