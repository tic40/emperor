Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    namespace :v1 do
      get 'entries/:id' => 'entries#show'
    end
  end
end
