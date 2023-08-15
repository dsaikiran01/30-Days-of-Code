import java.io.*;
import java.util.*;
import java.util.regex.*;

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(bufferedReader.readLine());
        ArrayList<String> arr = new ArrayList<String>();
        String regString = "[a-zA-z0-9]@gmail.com";
        Pattern p = Pattern.compile(regString);

        for(int i = 0; i < N; i++){
            try {
                String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

                String firstName = firstMultipleInput[0];

                String emailID = firstMultipleInput[1];

                Matcher m = p.matcher(emailID);
                if (m.find()) {
                    arr.add(firstName);
                }
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        };

        Collections.sort(arr);

        for (String name : arr) {
            System.out.println(name);
        }
        
        bufferedReader.close();
    }
}