# Enter your code here. Read input from STDIN. Print output to STDOUT
if __name__ == '__main__' :
    no_of_entries = int(input())
    phonebook = {}
    for i in range(no_of_entries):
        details = input()
        details = details.split()
        phonebook[details[0]] = details[1]
    while True:
        try:
            search = input()
            got = 0
            if search in phonebook:
                print(search + '=' + phonebook[search])
            else:
                print("Not found")
        except:
            break
