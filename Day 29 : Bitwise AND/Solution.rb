def bitwiseAnd(n, k)  
  if (k-1 | k) <= n
    return k-1
  else
    return k-2
  end
end

t = gets.strip.to_i

t.times do |t_itr|
  first_multiple_input = gets.rstrip.split
  count = first_multiple_input[0].to_i
  lim = first_multiple_input[1].to_i
  res = bitwiseAnd count, lim
  puts res
end
