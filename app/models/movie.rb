class Movie < ApplicationRecord
  has_many :bookmarks
  before_destroy :bookmark?
  validates :title, presence: true, uniqueness: true
  validates :overview, presence: true

  private

  def bookmark?
    :abort if bookmarks.count.zero?
  end
end
