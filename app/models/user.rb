class User < ApplicationRecord
    has_secure_password

    has_many :flashcards
    has_many :decks, through: :flashcards

    #   Validations
end