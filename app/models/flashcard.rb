class Flashcard < ApplicationRecord
    belongs_to :user
    belongs_to :deck

    validates :user, :deck, presence: true
    validates :question, presence: true, length: {minimum: 10}
    validates :answer, presence: true, length: {minimum: 4}
end