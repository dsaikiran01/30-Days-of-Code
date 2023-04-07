class Solution:
    
    def __init__(self):
        self.stack = []
        self.queue = []
    
    def pushCharacter(self, ch):
        self.stack.append(ch)
    
    def popCharacter(self):
        return self.stack.pop()
    
    def enqueueCharacter(self, ch):
        self.queue.append(ch)
    
    def dequeueCharacter(self):
        return self.queue.pop(0)
    

if __name__ == "__main__" :
    s=input()
    obj=Solution()   

    l=len(s)

    for i in range(l):
        obj.pushCharacter(s[i])
        obj.enqueueCharacter(s[i])
        
    isPalindrome=True
    
    '''
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters
    ''' 
    for i in range(l // 2):
        if obj.popCharacter()!=obj.dequeueCharacter():
            isPalindrome=False
            break
    
    if isPalindrome:
        print("The word, "+s+", is a palindrome.")
    else:
        print("The word, "+s+", is not a palindrome.")
