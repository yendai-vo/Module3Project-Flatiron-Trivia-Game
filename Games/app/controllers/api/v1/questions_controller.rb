class Api::V1::QuestionsController < ApplicationController
  # before_action :find_question
  def index
    @questions = Question.all
    render json: @questions, include: ['choices']
  
  end

  def show; end

  private
  def questions_params
    params.require(:question).permit(:question)
  end

  def find_question
    @question = Question.find(params[:id])
  end
end
