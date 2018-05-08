class Api::V1::EntriesController < ApplicationController
  def show
    entries = Entry.where(feed_id: params[:id])
    render json: entries, include: :comments
  end
end
