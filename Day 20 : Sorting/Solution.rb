n = gets.strip.to_i
a = gets.rstrip.split.map(&:to_i)

no_of_swaps = 0

n.times do
  (n-1).times do |j|
    if a[j] > a[j+1]
        temp = a[j]
        a[j] = a[j+1]
        a[j+1] = temp
        no_of_swaps += 1
    end
  end
end

puts "Array is sorted in #{no_of_swaps} swaps."
puts "First Element: #{a.first}"
puts "Last Element: #{a.last}"
