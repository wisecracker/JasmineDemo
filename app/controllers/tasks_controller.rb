class TasksController < ApplicationController

  def create
    task = Task.create(params[:task])
    render :json => task
  end

end
