class DoodlesController < ApplicationController
  before_action :set_category, only: [:index, :show, :create, :destroy]
  before_action :set_category_doodle, only: [:show, :update, :destroy]

  # GET /categories/:category_id/doodles
  def index
    @doodles = current_user.doodles
    json_response(@doodles)
  end

  def public_doodles
    @doodles = Doodle.all
    json_response(@doodles)
  end

  # GET /categories/:category_id/doodles/:id
  def show
    json_response(@doodle)
  end

  # POST /categories/:category_id/doodles
  def create
    @category = current_user.doodles.create!(doodle_params)
    json_response(status: "SUCCESS", message: 'doodle created successfully.')
  end

  # PUT /categories/:category_id/doodles/:id
  def update
    @doodle.update(doodle_params)
    json_response(status: 'SUCCESS', message: 'doodle updated successfully.')
  end

  # DELETE /categories/:category_id/doodles/:id
  def destroy
    @doodle.destroy
    json_response(status: 'SUCCESS', message: 'doodle deleted successfully.')
  end

  private

  def doodle_params
    params.permit(:title, :path,  :category_id, :doodle, :current_user)
  end

  def set_category
    @category = Category.find(params[:category_id])
  end

  def set_category_doodle
    if @category
      @doodle = @category.doodles.find_by!(id: params[:id])
    end

    @doodles = current_user.doodles
  end
end