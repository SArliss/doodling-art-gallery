class Doodle < ApplicationRecord
  # model association
  belongs_to :category

  # validations
  validates_presence_of :title, :path, :created_by
end
