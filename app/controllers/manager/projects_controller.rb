class Manager::ProjectsController < ApplicationController
  include ResponseHelper

  before_action :authenticate_user!
  before_action :ensure_user_is_project_manager!

  def index
    render json: { projects: current_user.managed_projects }
  end

  def developer_todos
    data = current_user.developers_todos_report
    render json: { developers_todos: data }
  end

  def project_todos
    data = current_user.projects_todos_report
    render json: { projects_todos: data }
  end

  def new_todos
    render json: { todos: Todo.where(project_id: current_user.managed_projects.ids, status: "pending")}
  end

  def create
    project = Project.new(project_params)
    team = current_user.teams.find_by(name: params[:team])

    project.team_id = team.try(:id)

    if project.save
      render json: { project: project }
    else
      render_error(project.errors.full_messages.join(", "))
    end
  end

  def developers
    render json: { developers: current_user.developers } 
  end

  def assign_developer
    project   = current_user.managed_projects.find_by(id: params[:id])
    if project
      developer = current_user.developers.find_by(email: params[:developer_email])
      if developer && DeveloperProject.create(user_id: developer.id, project_id: project.id)
        render json: { project: project }
      else
        render_error("Something went wrong")
      end
    else
      render_error("Project not found.")
    end
  end

  private
    def project_params
      params.permit(:name)
    end

end
