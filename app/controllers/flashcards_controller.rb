class FlashcardsController < ApplicationController
    def index
        flashcards = set_user.flashcards
        render json: flashcards
    end

    def create
        flashcard = set_user.flashcards.new(flashcard_params)
        # Add conditions for the question and answer text fields
        if flashcard.question
            if flashcard.answer
                if flashcard.save
                    render json: flashcard, status: :created
                else
                    render json: {errors: flashcard.errors.full_messages}, status: :unauthorized
                end
            else
                render json: {errors: flashcard.errors.full_messages}, status: :unauthorized
            end
        else
            render json: {errors: flashcard.errors.full_messages}, status: :unauthorized
        end
    end

    def update
        flashcard = set_user.flashcards.find(params[:id])
        # Add conditions for updating the question and answer text fields
        if flashcard.update(question: params[:question]) || flashcard.update(answer: params[:answer])
            render json: flashcard
            # Add an condition for updating both the question AND answer text fields
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