#include <stdio.h>

int main(void)
{
          int n;
          int seq[] = fibonacci(10);
          return 0;
}

int fibonacc(int n)
{
            int* seq = new int[n];
          seq[0] = 0;
          seq[1] = 1;
          for (int i = 2; i < n; i++)
          {
                    seq[i] = seq[i - 1] + seq[i - 2];
          }
          return seq;
}