class Deck < ApplicationRecord
    belongs_to :binder
    has_many :flashcards

    # Validations
    validates :binder, presence: true
    validates :deck_name, presence: true, uniqueness: {scope: :binder}

    # What other constraints are needed?
end