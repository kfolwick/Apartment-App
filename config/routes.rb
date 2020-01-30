Rails.application.routes.draw do
  devise_for :users
  get '*path', to: 'pages#root', constraints: ->(request){ request.format.html? }
  root to: 'pages#root'
  
  # get '/listings' => 'listings#root'
  # get '/listings' => 'listings#new'
  # post '/listings' => 'listings#create'
  # get '/listings/:id' => 'listings#show'
  # put '/listings/:id' => 'listings#update'
  # delete '/listings:id' => 'listings#destroy'
  
end
