Rails.application.routes.draw do
  root :to => 'application#home'

  resources :product, only: [:index, :show, :create, :update, :destroy]

end
