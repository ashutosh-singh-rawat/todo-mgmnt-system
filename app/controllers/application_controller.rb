class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  protect_from_forgery prepend: true
  before_action :configure_permitted_parameters, if: :devise_controller?
  # before_action :authenticate_user!
  after_action :set_csrf_cookie_for_ng

  # rescue_from ActionController::InvalidAuthenticityToken do |exception|
  #   # sign_out(current_user)
  #   cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  #   render error:'invalid token', {status: :unprocessable_entity}
  # end
  

  def angular
    render 'layouts/application'
  end


  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  protected
    def verified_request?
      super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
    end

  private

    # def configure_permitted_parameters
    #   devise_parameter_sanitizer.for(:sign_up) << :username
    # end
    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    end 
end
