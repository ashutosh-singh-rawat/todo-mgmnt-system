class DeveloperProject < ApplicationRecord
  belongs_to :developer, class_name: "User", foreign_key: :user_id
  belongs_to :project

  validates :user_id, :project_id, presence: true
  validate :valid_developer

  private
    def valid_developer
      errors.add(:developer, "must be a member of team #{project.team.name}") unless self.project.team.developers.ids.include?(user_id)
    end
end
