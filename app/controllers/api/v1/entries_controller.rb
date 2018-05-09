class Api::V1::EntriesController < ApplicationController

  def index
    entries = Entry.all
    render json: entries, include: [:comments, :feed]
  end

  def show
    entries = Entry.where(feed_id: params[:id])
    render json: entries, include: [:comments, :feed]
  end
end
