class ApplicationController < ActionController::Base
  include ResponseHelper

  protect_from_forgery with: :exception, prepend: true
  before_action :configure_permitted_parameters, if: :devise_controller?
  # before_action :authenticate_user!
  after_filter :set_csrf_headers
  respond_to :json

  def angular
    render 'layouts/application'
  end

  protected
    def ensure_user_is_project_manager!
      binding.pry
      render_error("Your don't have previlege to perform this action..") and return  unless current_user.manager?
    end

    def ensure_user_is_developer!
      render_error("Your don't have previlege to perform this action..") and return  unless current_user.developer?
    end

    def ensure_user_is_admin!
      render_error("Your don't have previlege to perform this action..") and return  unless current_user.super_admin?
    end
  private
    def verified_request?
      super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
    end

    def set_csrf_headers
      cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
    end

    # def configure_permitted_parameters
    #   devise_parameter_sanitizer.for(:sign_up) << :username
    # end

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :role])
    end
end
