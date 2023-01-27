class FlashcardSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :user
  belongs_to :deck
end