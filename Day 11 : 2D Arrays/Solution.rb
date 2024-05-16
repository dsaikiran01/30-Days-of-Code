arr = Array.new(6)
max = -81

6.times do |i|
    arr[i] = gets.rstrip.split.map(&:to_i)
end

for i in 1..4
    for j in 1..4
        sum = arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1] +
         arr[i][j] + 
         arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1]
        
         max = sum if sum > max
    end
end

puts max
