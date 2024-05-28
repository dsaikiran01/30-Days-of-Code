ret_date = gets.chomp.split(" ")

ret_day = ret_date[0].to_i
ret_month = ret_date[1].to_i
ret_year = ret_date[2].to_i

due_date = gets.chomp.split(" ")

due_day = due_date[0].to_i
due_month = due_date[1].to_i
due_year = due_date[2].to_i

fine = 0

if due_year == ret_year
  if due_month == ret_month
    if ret_day > due_day
      fine = 15 * (ret_day - due_day)
      end
    elsif ret_month > due_month
      fine = 500 * (ret_month - due_month)
    end
elsif ret_year > due_year
  fine = 10000
end

puts fine
