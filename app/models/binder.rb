class Binder < ApplicationRecord
    has_many :decks
    has_many :flashcards, through: :decks

    #   Validations
    validates :binder_name, presence: true, uniqueness: {scope: :user}

    # What other constraints are needed?
end