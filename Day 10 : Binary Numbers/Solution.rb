n = gets.strip.to_i

# count of the or bits
max = 0
count = 0

# divide and store the remainder as bit, quotient as n
while n > 0
    bit = n % 2
    if bit == 1
        count += 1
        if count > max
            max = count
        end
    else
        count = 0
    end
    n = (n / 2).floor() 
end

puts max
