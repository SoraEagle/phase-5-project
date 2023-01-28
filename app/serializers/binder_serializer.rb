class BinderSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :user
  has_many :decks
  has_many :flashcards, through: :decks
end