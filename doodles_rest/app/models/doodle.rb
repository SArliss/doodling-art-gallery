class Doodle < ApplicationRecord
  # model association
  belongs_to :category
  belongs_to :user

  # validations
  validates_presence_of :title, :path
end
