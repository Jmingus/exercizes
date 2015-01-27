class Fizzbuzz
  def self.run
    (1..100).map do |number|
    case
      when number % 3 == 0
        'fizz'
      when number % 5 == 0
        'buzz'
      when number % 15 == 0
        'fizzbuzz'
      else
        number
    end
  end
end
end
Fizzbuzz.run