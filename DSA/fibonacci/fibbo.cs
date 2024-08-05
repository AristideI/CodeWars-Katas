namespace DSA
{
          public static class Main
          {
                    public static void Main(string[] args)
                    {
                              int n = 10;
                              Console.WriteLine(Fibonacci(n));
                    }
                    public static int Fibonacci(int n)
                    {
                              int[] series = new int[n + 1];
                              series[0] = 0;
                              series[1] = 1;
                              for (int i = 2; i <= n; i++)
                              {
                                        series[i] = series[i - 1] + series[i - 2];
                              }
                              return series[n];
                    }
          }
}