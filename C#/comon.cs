using System;

namespace Saint
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine(ReverseString("hello"));
        }

        public static bool IsPalindrome(string s)
        {
            string reversed = new string(s.Reverse().ToArray());
            return s.Equals(reversed, StringComparison.OrdinalIgnoreCase);
        }

        public static string substr(string s, int start, int end)
        {
            return s.Substring(start, end);
        }

        public static string ContainSubstring(string s, string sub)
        {
            return s.Contains(sub) ? "Yes" : "No";
        }

    }
}