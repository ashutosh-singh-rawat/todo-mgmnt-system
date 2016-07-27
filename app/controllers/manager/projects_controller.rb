class Manager::ProjectsController < ApplicationController
  include ResponseHelper

  before_action :authenticate_user!
  before_action :ensure_user_is_project_manager!

  def developer_todos
    todos = Todo.all
    render json: { developer_todos: todos } and return
    # else
    #   render_error("There was an error. please try again.")
    # end
  end
  def project_todos
    todos = Todo.all
    render json: { developer_todos: todos } and return
    # else
    #   render_error("There was an error. please try again.")
    # end
  end

end
