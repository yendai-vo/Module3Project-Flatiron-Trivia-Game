# Rails.application.routes.draw do
#   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
# end

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :create, :search]
      resources :questions, only: [:index]
      resources :choices, only: [:index]
    end
  end
end
