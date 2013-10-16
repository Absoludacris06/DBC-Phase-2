class Word < ActiveRecord::Base
	before_save :record_sorted

  def anagrams
    sorted_input = self.name.downcase.split('').sort.join
    ana_array = Word.where(sorted: sorted_input) - Word.where(name: self.name)
  end

  private

  def record_sorted
  	self.sorted = self.name.downcase.split('').sort.join
	end

end
