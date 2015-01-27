class Pigatize

  def self.pigatize(text)
    vowels = ['a','e','i','o','u']
    word = text.slice(0)
    if vowels.include? word[0]
      text << 'way'
    else
      text << word << 'ay'
    end
  end
end

puts Pigatize.pigatize('tacos')