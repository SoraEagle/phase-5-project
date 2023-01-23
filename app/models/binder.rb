class Binder < ApplicationRecord
    has_many :decks
    has_many :flashcards, through: :decks

    #   Validations
    validates :name, presence: true, length: {minimum: 2}

    # What other constraints are needed?
end