class Api::V1::EntriesController < ApplicationController

  def index
    entries = Rails.cache.fetch("api/v1/entries", expires_in: 5.minutes) do
      Entry.all
    end
    render json: entries, include: [:comments, :feed]
  end

  def show
    entries = Rails.cache.fetch("api/v1/entryes/#{params[:id]}", expires_in: 5.minutes) do
      Entry.where(feed_id: params[:id])
    end
    render json: entries, include: [:comments, :feed]
  end
end
