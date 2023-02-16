class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name, :flashcards, :binder_id

  belongs_to :binder
  has_many :flashcards
end