class Manager::TodosController < ApplicationController
  include ResponseHelper

  before_action :authenticate_user!
  before_action :ensure_user_is_project_manager!

  def create
    todo = Todo.new(todo_params)
    developer       = current_user.developers.find_by(email: params[:developer_email])
    project         = current_user.managed_projects.find_by(id: params[:project_id])

    todo.developer  = developer
    todo.project    = project
    if todo.save
      render json: { todo: todo } and return
    else
      render_error(todo.errors.full_messages.join(", "))
    end
  end

  def assign_to_developer    
    todo = Todo.where(project_id: current_user.managed_projects.ids).find_by(id: params[:id])
    if todo
      developer = current_user.developers.find_by(email: params[:developer_email])
      if developer && todo.update(user_id: developer.id)
        render json: { todo: todo } and return
      else
        render_error("Something went wrong")
      end
    else
      render_error("Todo not Found...")
    end
  end

  private
    def todo_params
      params.permit(:name)
    end

end
