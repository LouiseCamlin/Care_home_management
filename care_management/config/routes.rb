Rails.application.routes.draw do

  scope path: "api" do
      resources :residents
      resources :rooms
      resources :resident_rooms
    end

end
