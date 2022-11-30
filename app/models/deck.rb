class Deck < ApplicationRecord
    belongs_to :binder
    has_many :flashcards
end
