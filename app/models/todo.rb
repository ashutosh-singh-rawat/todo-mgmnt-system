class Todo < ApplicationRecord
  attribute :status, :string, default: "pending"

  STATUS = ["pending", "in_progress", "done"]

  belongs_to :developer, class_name: "User", foreign_key: :user_id, optional: true
  belongs_to :project

  validates  :name, presence: true
  validates_uniqueness_of :name, scope: [:project_id]
  validate  :valid_status

  private
    def valid_status
      errors.add(:status, "Invalid status") unless STATUS.include?(status)
    end

end
