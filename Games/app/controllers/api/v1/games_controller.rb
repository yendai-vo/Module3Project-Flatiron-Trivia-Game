class Api::V1::GamesController < ApplicationController
  # before_action :find_game
  def index
    @games = Game.all

    render json: @games
  end

  def show; end

  def create
    @game = Game.new(game_params)
    if @game.valid?
      @game.save
      render json: @game, status: :accepted
    else
      render json: @game.errors
      # { errors: @game.errors.full_messages }, status: :unprocessible_entity
    end
  end

    private
  def game_params
    params.require(:game).permit(:username, :score)
  end

  def find_game
    @game = Game.find(params[:id, :username, :score])
  end
end
