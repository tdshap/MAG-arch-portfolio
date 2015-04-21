Rails.application.routes.draw do

  root to: "routes#index"
  get "/architecture", to: "routes#architecture"
  get "/urban_design", to: "routes#urban_design"

end
