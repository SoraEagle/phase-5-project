class Deck < ApplicationRecord
    belongs_to :binder
    has_many :flashcards

    validates :binder, presence: true
    validates :name, presence: true, uniqueness: {scope: :binder}
end