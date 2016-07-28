class Developer::TodosController < ApplicationController
  include ResponseHelper

  before_action :authenticate_user!
  before_action :ensure_user_is_developer!

  def index
    render json: {todos: current_user.todos}
  end

  def mark_todo
    todo = current_user.todos.find_by(id: params[:id])
    if todo and todo.update(status: params[:status])
      render json: {todo: todo}
    else
      render_error("Todo can't Marked")
    end
  end
end
