class Todo < ApplicationRecord
  belongs_to :developer, class_name: "User", foreign_key: :user_id
  belongs_to :project

  STATUS = ["pending", "in_progress", "done"]
  validate  :valid_status

  # def initialize
  #   status ||= "pending"
  # end

  private
    def valid_status
      errors.add(:status, "Invalid status") unless STATUS.include?(status)
    end

end
