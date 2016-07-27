class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  VALID_ROLES = ["super_admin", "manager", "developer"]

  validates :email, :password, :role, presence: true
  validates :team_id, presence: true, if: :developer?
  validates :email, uniqueness: true
  validate  :valid_role

  belongs_to  :development_team, class_name: "Team", foreign_key: :team_id
  has_many    :teams
  has_many    :todos
  has_many    :developers, through: :teams
  has_many    :managed_projects, through: :teams, source: :projects
  has_many    :developer_projects
  has_many    :projects, through: :developer_projects


  VALID_ROLES.each do |role|
    define_method "#{role}?" do
      self.role == role
    end
  end

  def developers_todos_report
    # developers = teams.

    # teams.joins(:developers).select("teams.id, users.email as username").size

    # teams.joins("LEFT OUTER JOIN users ON users.team_id = teams.id" ).select("teams.id, users.email as username")
    data = []
    User.includes(:development_team).where("teams.id IN (?)", teams.ids).references(:teams).each{ |u|
      h = {}
      h[:email] = u.email
      h[:todos] = u.todos
      data << h
    }

    data

  end
  def projects_todos_report
    data = []
    Project.where(team_id: teams.ids).each{ |p|
      h = {}
      h[:name] = p.name
      h[:todos] = p.todos
      data << h
    }
    data
  end

  private
    def valid_role
      errors.add(:role, "Invalid role") unless VALID_ROLES.include?(role)
    end
end
