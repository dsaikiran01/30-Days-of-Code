T = gets.to_i

T.times do
  ele = gets.to_i
  t = Math.sqrt(ele).round(0)

  if ele <= 1
    puts "Not prime"
  else
    d = 1
    for j in 2..t
      if ele % j == 0
        puts "Not prime"
        d += 1
        break
      end
    end
    if d == 1
      puts "Prime"
    end
  end
end
