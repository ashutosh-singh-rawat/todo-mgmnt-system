Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }


  root to: 'application#angular'

  namespace :admin do
  end

  namespace :manager do
    resources :projects, only: [:index, :create] do
      collection do
        get :developer_todos
        get :project_todos
        get :developers
        get :new_todos
      end
      member do
        post :assign_developer
      end
    end

    resources :todos, only: [:create] do
      member do
        post :assign_to_developer
      end
    end

    resources :teams, only: [:index]
  end

  namespace :developer do
    resources :todos, only: [:index] do
      member do
        patch :mark_todo
      end
    end
  end
end
