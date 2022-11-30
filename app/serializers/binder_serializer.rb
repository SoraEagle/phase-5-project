class BinderSerializer < ActiveModel::Serializer
  attributes :id

  has_many :decks
  has_many :flashcards, through: :decks
end