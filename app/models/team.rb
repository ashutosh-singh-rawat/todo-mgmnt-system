class Team < ApplicationRecord
  has_many :developers, class_name: "User"
  has_many :projects
  belongs_to :manager, class_name: "User", foreign_key: :user_id, optional: true

  validates :name, presence: true, uniqueness: true 
end
