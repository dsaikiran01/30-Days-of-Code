class Solution  
  def initialize
    @stack = Array.new
    @queue = Array.new
  end
  
  def push_character(ch)
    @stack.push(ch)
  end
  
  def enqueue_character(ch)
    @queue.push(ch)
  end
  
  def pop_character
    return @stack.pop
  end
  
  def dequeue_character
    return @queue.shift
  end
end

solution = Solution.new
input = gets.chomp
input.split('').each do |c|
  # push the character to stack
  solution.push_character c
  # enqueue the character to queue
  solution.enqueue_character c
end

# To check if input string is palindrome or not
is_palindrome = true

(input.length / 2).times do
  if solution.pop_character != solution.dequeue_character
    is_palindrome = false
    break
  end
end

if is_palindrome
  puts "The word, #{input}, is a palindrome."
else
  puts "The word, #{input}, is not a palindrome."
end
