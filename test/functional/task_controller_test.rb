require 'test_helper'

class TasksControllerTest < ActionController::TestCase
  def test_it
    post :create, :task => { :title => "hi"}
    assert_equal Task.last.title, "hi"
  end
end
