class BinderSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :decks
  has_many :flashcards, through: :decks
end