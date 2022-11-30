class User < ApplicationRecord
    has_many :flashcards
  has_many :decks, through: :flashcards
end