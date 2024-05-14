def factorial(n)
   return 1 if n == 1
   return n * factorial(n-1)
end

n = gets.strip.to_i
result = factorial n
puts result
