class Binder < ApplicationRecord
    belongs_to :user
    has_many :decks
    has_many :flashcards, through: :decks

    # Validations
    validates :name, presence: true, length: {minimum: 2}, uniqueness: {scope: :user}

    # What other constraints are needed?
end