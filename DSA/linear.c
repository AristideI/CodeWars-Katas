#include <stdio.h>

int linear(int n)
{
          int sum = 0;
          for (int i = 0; i < n; i++)
          {
                    sum += i;
          }
          return sum;
}

int main()
{
          int sum = linear(5);
          printf("%d\n", sum);
          return 0;
}
