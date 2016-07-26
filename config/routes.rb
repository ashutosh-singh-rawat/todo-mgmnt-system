Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }


  root to: 'application#angular'
  
  # resources :posts, only: [:create, :index, :show] do
  #   resources :comments, only: [:show, :create] do
  #     member do
  #       put '/upvote' => 'comments#upvote'
  #     end
  #   end

  #   member do
  #     put '/upvote' => 'posts#upvote'
  #   end
  # end
end
