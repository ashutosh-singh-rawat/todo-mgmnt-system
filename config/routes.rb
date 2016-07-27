Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }


  root to: 'application#angular'

  namespace :admin do
  end
  namespace :manager do
    resources :projects, only: [] do
      collection do
        get :developer_todos
        get :project_todos
      end
    end

    resources :todos, only: [] do
    end
  end
  namespace :developer do
  end
end
