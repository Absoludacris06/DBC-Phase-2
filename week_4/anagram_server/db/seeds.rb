File.open(File.expand_path('db/dictionary.txt'), 'r').each do |word|
  new_word = Word.new({:name => word.chomp})
  new_word.save!
end
