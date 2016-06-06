class Tutor < ActiveRecord::Base
	validates :name, :presence => true, :uniqueness => true
	validates :description, :presence => true,
		:length => {:maximum => 2000}
end
