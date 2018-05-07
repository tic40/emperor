class Feed < ApplicationRecord
  has_many :entries, dependemt: :destroy
end
