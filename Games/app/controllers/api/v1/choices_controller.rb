class Api::V1::ChoicesController < ApplicationController
  # before_action :find_choice
  def index
    @choices = Choice.all
    render json: @choices
  end

  def create
    choice = Choice.new(choice_params)
    if choice.save
      render json: choice
    else
      render json: choice.errors
    end
  end

  def show
    @choice = Choice.find(params[:id])
    render json: @choice
  end



  private
  def choice_params
    params.require(:choice).permit(:question_id, :answer_choice, :is_correct)
  end

  def find_choice
    @choice = Choice.find(params[:id])
  end

end
