class UserSerializer < ActiveModel::Serializer
  attributes :id

  has_many :flashcards
  has_many :decks, through: :flashcards
  has_many :binders, through: :decks
end