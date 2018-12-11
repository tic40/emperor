class ChangeColumnEidForEntry < ActiveRecord::Migration[5.2]
  def change
    change_column :entries, :eid, :bigint
  end
end
