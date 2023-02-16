class Binder < ApplicationRecord
    belongs_to :user
    has_many :decks
    has_many :flashcards, through: :decks

    validates :name, presence: true, length: {minimum: 2}, uniqueness: {scope: :user}
end