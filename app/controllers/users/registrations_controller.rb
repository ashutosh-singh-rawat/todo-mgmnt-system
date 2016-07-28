class Users::RegistrationsController < Devise::RegistrationsController
  # before_action :configure_sign_up_params, only: [:create]
  # before_action :configure_account_update_params, only: [:update]
  include ResponseHelper
  respond_to :json

  def create
    user = User.new(sign_up_params)
    user.teams.build(name: params[:user][:team_name]) if user.manager?
    if user.save
      sign_in user
      render json: user and return
    else
      render_error(user.errors.full_messages.join(", ")) and return
    end
  end

end
