class Entry < ApplicationRecord
  belongs_to :feed
  has_many :comments, dependent: :destroy
end
