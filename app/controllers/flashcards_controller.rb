class FlashcardsController < ApplicationController
    def index
        render json: set_user.flashcards
    end

    def create
        deck = current_user.decks.find_by(id: params[:deck_id])
        flashcard = deck.flashcards.new(flashcard_params)
            flashcard.user_id = current_user.id
            if flashcard.save
                render json: flashcard, status: :created
            else
                render json: {errors: flashcard.errors.full_messages}, status: :unauthorized
        end
    end

    def update
        flashcard = set_user.flashcards.find(params[:id])
        if flashcard.update(flashcard_params)
            render json: flashcard
        else
            render json: {errors: flashcard.errors.full_messages}, status: :unauthorized
        end
    end

    def destroy
        @flashcard = set_user.flashcards.find(params[:id])
        @flashcard.destroy
    end

    private
    def flashcard_params
        params.require(:flashcard).permit(:id, :user_id, :deck_id, :question, :answer)
    end
end