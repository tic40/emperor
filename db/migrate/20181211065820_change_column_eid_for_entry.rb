class AddEidToEntry < ActiveRecord::Migration[5.2]
  def up
    change_column :entries, :eid, :bigint
  end
end
