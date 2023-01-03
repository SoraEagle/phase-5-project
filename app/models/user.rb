class User < ApplicationRecord
    has_secure_password

    has_many :flashcards
    has_many :decks, through: :flashcards
    has_many :binders, through: :decks

    # Validations
    validates :username, presence: true, uniqueness: true, length: {minimum: 5}
    validates :password, presence: true, length: {minimum: 4}

    # What other constraints are needed?
end