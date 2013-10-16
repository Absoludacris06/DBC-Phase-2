get '/' do
	if params[:error]
		@error = "Invalid word.  Please enter another word."
		p @error
	elsif params[:word]
		@word = Word.new(name: params[:word])
		@anagram_list = @word.anagrams
		p @anagram_list
	end
  erb :index
end
 
post '/word' do
  @word = Word.where(name: params[:user_input]).first
  if @word.nil?
  	redirect to '/?error=invalid_word'
  else
  	redirect to "/?word=#{@word.name}"
  end
end