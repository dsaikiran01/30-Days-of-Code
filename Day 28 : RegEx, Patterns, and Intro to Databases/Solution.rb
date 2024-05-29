N = gets.strip.to_i
names = Array.new

N.times do
  first_multiple_input = gets.rstrip.split

  firstName = first_multiple_input[0]

  emailID = first_multiple_input[1]
  
  regex = /(\@gmail\.com)$/
  
  if regex.match(emailID)
    names.push firstName
  end 
end

puts names.sort
