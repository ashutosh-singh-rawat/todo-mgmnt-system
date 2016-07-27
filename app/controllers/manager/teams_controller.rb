class Manager::TeamsController < ApplicationController
  include ResponseHelper

  before_action :authenticate_user!
  before_action :ensure_user_is_project_manager!

  def index
    data = current_user.teams
    render json: { teams: data } and return
    # else
    #   render_error("There was an error. please try again.")
    # end
  end
end
