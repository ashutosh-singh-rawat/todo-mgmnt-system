class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.string :name
      t.string :status
      t.references :project
      t.references :user

      t.timestamps
    end
  end
end
