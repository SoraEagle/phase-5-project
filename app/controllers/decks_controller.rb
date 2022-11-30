class DecksController < ApplicationController
    def index
        decks = set_user.decks
        render json: decks
    end

    def create
        deck = set_user.decks.new(deck_params)
        if deck.binder_id
            if deck.deck_name
                if deck.save
                    render json: deck, status: :created
                else
                    render json: {errors: deck.errors.full_messages}, status: :unauthorized
                end
            else
                render json: {errors: deck.errors.full_messages}, status: :unauthorized
            end
        else
            render json: {errors: deck.errors.full_messages}, status: :unauthorized
        end
    end

    def update
        deck = set_user.decks.find(params[:id])
        # Add condition for updating the deck_name text field
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
        params.require(:deck).permit(:binder_id, :deck_name)
    end
end