import java.util.*;

public class Solution
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        int T = scan.nextInt();
        scan.nextLine();

        HashMap<String, Integer> phoneBook = new HashMap<String, Integer>();
        
        for(int i = 0; i < T; i++)
        {
            String name = scan.next();
            int number = scan.nextInt();
            
            phoneBook.put(name, number);
        }

        while(scan.hasNext())
        {
            String searchName = scan.next();
            if(searchName.length() == 0)
            {
                break;
            }
            if(phoneBook.get(searchName) == null)
            {
                System.out.println("Not found");
            }
            else
            {
                System.out.println(searchName + '=' + phoneBook.get(searchName));
            }
        }
    }
}
