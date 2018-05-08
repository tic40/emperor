class AddBookmarkcountToEntries < ActiveRecord::Migration[5.2]
  def change
    add_column :entries, :bookmark_count, :integer, after: :feed_id
  end
end
