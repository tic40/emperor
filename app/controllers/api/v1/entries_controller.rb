class Api::V1::EntriesController < ApplicationController

  def index
    entries = Rails.cache.fetch("api/v1/entries", expires_in: 5.minutes) do
      Entry.all.includes(:comments, :feed).to_json(include: [:comments, :feed])
    end
    render json: entries
  end

  def show
    entries = Rails.cache.fetch("api/v1/entries/#{params[:id]}", expires_in: 5.minutes) do
      Entry.where(feed_id: params[:id]).includes(:comments, :feed).to_json(include: [:comments, :feed])
    end
    render json: entries
  end
end
