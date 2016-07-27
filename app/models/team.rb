class Team < ApplicationRecord
  has_many :developers
  belongs_to :manager, class_name: "User", optional: true

  validates :name, presence: true, uniqueness: true 
end
