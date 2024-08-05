namespace DSA
{
          public class Linear
          {
                    public static int Summation(int n)
                    {
                              int sum = 0;
                              for (int i = 1; i <= n; i++)
                              {
                                        sum += i;
                              }
                              return sum;
                    }
          }

          public class Main
          {
                    public static void Main(string[] args)
                    {
                              System.Console.WriteLine(Linear.Summation(5));
                    }
          }
}
