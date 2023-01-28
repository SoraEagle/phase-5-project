class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :binders
  has_many :decks, through: :binders
  has_many :flashcards, through: :decks
end