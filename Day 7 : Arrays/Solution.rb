n = gets.strip.to_i
arr = gets.rstrip.split.map(&:to_i)
arr.reverse.each do |x|
    print "#{x} "
end
