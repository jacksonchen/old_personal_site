class AddTypeToTutors < ActiveRecord::Migration
  def change
    add_column :tutors, :category, :string
    add_column :tutors, :cost, :float
  end
end
