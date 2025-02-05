public class factorial {
          public static void main(String[] args) {
                    int n = 5;
                    System.out.println("Factorial of " + n + " is " + factoria(n));
          }

          public static int factoria(int n) {
                    int result = 1;
                    for (int i = 1; i <= n; i++) {
                              result *= i;
                    }
                    return result;
          }
}
