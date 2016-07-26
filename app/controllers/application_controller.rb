class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception, prepend: true
  before_action :configure_permitted_parameters, if: :devise_controller?
  # before_action :authenticate_user!

  respond_to :json
  
  def angular
    render 'layouts/application'
  end


  protected
    def verified_request?
      super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
    end

  private

    # def configure_permitted_parameters
    #   devise_parameter_sanitizer.for(:sign_up) << :username
    # end
    
    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :role])
    end 
end
