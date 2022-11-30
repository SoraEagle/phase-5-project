class Binder < ApplicationRecord
    has_many :decks
  has_many :flashcards, through: :decks
end