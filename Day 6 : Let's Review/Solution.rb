T = gets.to_i

T.times do 
  str = gets.chomp
  even = Array.new
  odd = Array.new
  
  str.split("").to_a.each_with_index do |x,i|
      i % 2 == 0 ? even.push(x) : odd.push(x)
  end

  puts "#{even.join} #{odd.join}" 
end
