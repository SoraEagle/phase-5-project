class DeckSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :binder
  has_many :flashcards
end