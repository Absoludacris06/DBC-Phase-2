class CreateWords < ActiveRecord::Migration
  def change 
    create_table :words do |t|
      t.string :name
      t.string :sorted
    end
  end
end