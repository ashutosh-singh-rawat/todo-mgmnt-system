class Project < ApplicationRecord
  belongs_to :team
  has_many :developers_projects
  has_many :developers, through: :developers_projects, class_name: "User"
end
