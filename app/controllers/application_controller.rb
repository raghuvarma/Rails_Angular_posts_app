class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  # Resque form for invalid authentificitytoken
  #rescue_from ActionController::InvalidAuthenticityToken, :with => :bad_token

  #protect_from_forgery with: :exception

  protect_from_forgery # Same as above

  respond_to :json

  def angular
    render 'layouts/application'
  end

  # def bad_token
  #   flash[:warning] = "Session expired"
  #   redirect_to root_path
  # end
  
end
