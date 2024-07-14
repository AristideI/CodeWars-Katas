using System;
using System.Collections.Generic;
using System.Linq;

namespace Saint
{
  public int DifSquares(int n)
  {
    int[] numbersList = Enumerable.Range(1, n).ToArray();
    int sumOfSquares = numbersList.Select(x => x * x).Sum();
    int squareOfSum = (int)Math.Pow(numbersList.Sum(), 2);
    return squareOfSum - sumOfSquares;
  }
}