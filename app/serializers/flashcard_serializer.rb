class FlashcardSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :user
  belongs_to :deck
end