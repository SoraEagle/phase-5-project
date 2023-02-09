class FlashcardSerializer < ActiveModel::Serializer
  attributes :id, :question, :answer

  belongs_to :user
  belongs_to :deck
end