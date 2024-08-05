public class fibbo {
    public static void main(String[] args) {
        int n = 10; // Example size
        int[] sequence = fib(n);
        
        // Print the Fibonacci sequence
        for (int num : sequence) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    public static int[] fib(int n) {
        if (n <= 0) return new int[0];
        if (n == 1) return new int[]{0};

        int[] fib = new int[n];
        fib[0] = 0;
        if (n > 1) {
            fib[1] = 1;
        }

        for (int i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib;
    }
}
