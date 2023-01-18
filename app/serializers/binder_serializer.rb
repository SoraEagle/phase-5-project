class BinderSerializer < ActiveModel::Serializer
  attributes :id, :binder_name

  has_many :decks
  has_many :flashcards, through: :decks
end