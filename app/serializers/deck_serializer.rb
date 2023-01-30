class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name, :flashcards

  belongs_to :binder
  has_many :flashcards
end