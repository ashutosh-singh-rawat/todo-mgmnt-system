class CreateTeams < ActiveRecord::Migration[5.0]
  def change
    create_table :teams do |t|
      t.string  :name, null: false
      t.references :user
      t.timestamps
    end
  end
end
