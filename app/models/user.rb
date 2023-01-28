class User < ApplicationRecord
    has_secure_password

    has_many :binders
    has_many :decks, through: :binders
    has_many :flashcards, through: :decks

    # Validations
    validates :username, presence: true, uniqueness: true, length: {minimum: 5}
    validates :password, presence: true, length: {minimum: 4}

    # What other constraints are needed?
end