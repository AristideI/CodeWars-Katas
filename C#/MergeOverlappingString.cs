using System;
using System.Collections.Generic;
using System.Linq;
namespace Saint
{
	public class MergeOverlappingString
	{
		public string MergeOverlapping(string first, string second)
		{
			string mergedString = "";
			int commonPartLength = 0;

			for (int i = 0; i < first.Length; i++)
			{
				int length = first.Length - i;
				if (length <= second.Length && first.Substring(i) == second.Substring(0, length))
				{
					commonPartLength = length;
					break;
				}
			}

			mergedString = first + second.Substring(commonPartLength);

			return mergedString; // Return the merged string
		}
	}

}