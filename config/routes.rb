JasmineDemo::Application.routes.draw do
  resource :tasks, :only => :create
end
