class ApplicationController < ActionController::Base
  before_filter :set_access

  def set_access
    headers["Access-Control-Allow-Origin"] = "*"
  end
end
