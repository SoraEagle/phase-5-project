class Flashcard < ApplicationRecord
    belongs_to :user
    belongs_to :deck

    # Validations
end