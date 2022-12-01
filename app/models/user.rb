class User < ApplicationRecord
    has_secure_password

    has_many :flashcards
    has_many :decks, through: :flashcards
    has_many :binders, through: :flashcards, through: :decks

    # Validations
    validates :user, presence: true, uniqueness: true, length: {minimum: 5}, exclusion: {
        in: %w(+ - = _ @ npm), message: "%{value} is not allowed!"
    }
    validates :password, presence: true, length: {minimum: 4}

    # What other constraints are needed?
end