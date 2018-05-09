class AddEidToEntry < ActiveRecord::Migration[5.2]
  def change
    add_column :entries, :eid, :integer, after: :feed_id
  end
end
