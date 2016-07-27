class CreateDeveloperProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :developer_projects do |t|
      t.references :user
      t.references :project
      t.timestamps
    end
  end
end
