json.array!(@tutors) do |tutor|
  json.extract! tutor, :id, :name, :description
  json.url tutor_url(tutor, format: :json)
end
