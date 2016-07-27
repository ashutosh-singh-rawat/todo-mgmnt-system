class Manager::ProjectsController < ApplicationController
  include ResponseHelper

  before_action :authenticate_user!
  before_action :ensure_user_is_project_manager!

  def developer_todos
    data = current_user.developers_todos_report
    render json: { developer_todos: data } and return
    # else
    #   render_error("There was an error. please try again.")
    # end
  end
  def project_todos
    data = current_user.projects_todos_report
    render json: { developer_todos: data } and return
  end

end
