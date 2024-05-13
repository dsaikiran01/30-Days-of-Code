n = gets.to_i
phone_book = Hash.new

# insert data into the phonebook
n.times do
   details = gets.chomp.split(" ")
   phone_book[details[0]] = details[1]
end

# intake given input until no input provided
while true
   name = gets
   name ||= ''
   name.chomp!
   if name == ''
    break
   elsif phone_book.include?(name)
        puts "#{name}=#{phone_book[name]}"
   else
    puts "Not found"
   end 
end
