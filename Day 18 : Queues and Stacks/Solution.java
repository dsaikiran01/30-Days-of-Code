import java.util.*;

public class Solution 
{
    int top = -1, rear = -1, front = -1;
    ArrayList<Character> stack = new ArrayList<Character>();
    ArrayList<Character> queue = new ArrayList<Character>();
    
    void pushCharacter(char ch)
    {
        top++;
        stack.add(ch);
    }
    
    void enqueueCharacter(char ch)
    {
        if(rear == -1)
            front++;
        rear++;
        queue.add(ch);
    }
    
    char popCharacter()
    {
        top--;
        return stack.get(top+1);
    }
    
    char dequeueCharacter()
    {
        front++;
        return queue.get(front-1);
    }

    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        String input = scan.nextLine();
        scan.close();

        // Convert input String to an array of characters:
        char[] s = input.toCharArray();

        // Create a Solution object:
        Solution p = new Solution();

        // Enqueue/Push all chars to their respective data structures:
        for (char c : s)
        {
            p.pushCharacter(c);
            p.enqueueCharacter(c);
        }

        // Pop/Dequeue the chars at the head of both data structures and compare them:
        boolean isPalindrome = true;
        for (int i = 0; i < s.length/2; i++)
        {
            if (p.popCharacter() != p.dequeueCharacter())
            {
                isPalindrome = false;                
                break;
            }
        }

        //Finally, print whether string s is palindrome or not.
        System.out.println( "The word, " + input + ", is " + ( (!isPalindrome) ? "not a palindrome." : "a palindrome." ) );
    }
}
