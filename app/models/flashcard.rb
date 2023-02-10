class Flashcard < ApplicationRecord
    belongs_to :user
    belongs_to :deck

    # Validations
    validates :user, :deck, presence: true
    validates :question, presence: true, length: {minimum: 10}
    validates :answer, presence: true, length: {minimum: 4}
end