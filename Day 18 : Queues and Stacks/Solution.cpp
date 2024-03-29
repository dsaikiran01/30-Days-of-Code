#include <iostream>
using namespace std;

#define MAXSIZE 100

int top = -1;
int front = -1, rear = -1;

class Solution {
    public:
        char stack[MAXSIZE];
        char queue[MAXSIZE];
        
        void pushCharacter(char ch)
        {
            top++;
            stack[top] = ch;
        }
        
        char popCharacter()
        {
            top--;
            return stack[top + 1];
        }
        
        void enqueueCharacter(char ch)
        {
            if(rear == -1)
                front++;
            rear++;
            queue[rear] = ch;
        }
        
        char dequeueCharacter()
        {
            front++;
            return queue[front-1];
        }
};

int main()
{
    // read the string s.
    string s;
    getline(cin, s);
    
  	// create the Solution class object p.
    Solution obj;
    
    // push/enqueue all the characters of string s to stack.
    for (int i = 0; i < s.length(); i++) {
        obj.pushCharacter(s[i]);
        obj.enqueueCharacter(s[i]);
    }
    
    bool isPalindrome = true;
    
    // pop the top character from stack.
    // dequeue the first character from queue.
    // compare both the characters.
    for (int i = 0; i < s.length() / 2; i++) {
        if (obj.popCharacter() != obj.dequeueCharacter()) {
            isPalindrome = false;
            break;
        }
    }
    
    // finally print whether string s is palindrome or not.
    if (isPalindrome) {
        cout << "The word, " << s << ", is a palindrome.";
    } else {
        cout << "The word, " << s << ", is not a palindrome.";
    }
    
    return 0;
}
