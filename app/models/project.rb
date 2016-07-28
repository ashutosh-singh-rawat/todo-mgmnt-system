class Project < ApplicationRecord
  belongs_to :team
  has_many :developer_projects
  has_many :developers, through: :developer_projects
  has_many :todos

  validates :name, :team_id, presence: true
  validates_uniqueness_of :name, scope: [:team_id]

end
