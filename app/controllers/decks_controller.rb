class DecksController < ApplicationController
    def index
        render json: set_user.decks
    end

    def create
        binder = current_user.binders.find_by(id: params[:binder_id])
        deck = binder.decks.new(deck_params)
        if deck.save
            render json: deck, status: :created
        else
            render json: {errors: deck.errors.full_messages}, status: :unauthorized
        end
    end

    def update
        deck = set_user.decks.find_by(params[:id])
        # Add condition for updating the name text field
        if deck.update(binder_id: params[:binder_id]) || flashcard.update(deck: params[:deck])
            render json: deck
            # Add an condition for updating both the question AND answer text fields
        else
            render json: {errors: deck.errors.full_messages}, status: :unauthorized
        end
    end

    def destroy
        @deck = set_user.decks.find(params[:id])
        @deck.destroy
    end

    private
    def deck_params
        params.require(:deck).permit(:binder_id, :name)
    end
end