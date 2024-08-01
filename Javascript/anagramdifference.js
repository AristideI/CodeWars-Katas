function anagramDifference(word1,word2){
    // Convert words to lowercase
   word1 = word1.toLowerCase();
   word2 = word2.toLowerCase();
 
   // Create a frequency array with initial count of 0 for each letter
   const freq = Array(26).fill(0);
 
   // Count occurrences of letters in word1
   for (let i = 0; i < word1.length; i++) {
     const charCode = word1.charCodeAt(i) - 97; // Get character code and map to 0-25
     freq[charCode]++;
   }
 
   // Count occurrences of letters in word2 and subtract frequencies
   for (let i = 0; i < word2.length; i++) {
     const charCode = word2.charCodeAt(i) - 97; // Get character code and map to 0-25
     freq[charCode]--;
   }
 
   // Calculate the total count of letters to remove
   let count = 0;
   for (let i = 0; i < freq.length; i++) {
     count += Math.abs(freq[i]);
   }
 
   // Return the total count of letters to remove
   console.log(count)
   return count;
 }