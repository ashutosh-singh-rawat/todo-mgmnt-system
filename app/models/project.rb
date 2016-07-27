class Project < ApplicationRecord
  belongs_to :team
  has_many :developer_projects
  has_many :developers, through: :developer_projects

  validates :team_id, presence: true

end
