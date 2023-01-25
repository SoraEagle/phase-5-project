class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :user
  belongs_to :binder
  has_many :flashcards
end