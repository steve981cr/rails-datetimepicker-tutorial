class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title
      t.date :held_on
      t.time :start_time
      t.datetime :starts_at
      t.datetime :ends_at

      t.timestamps
    end
  end
end
