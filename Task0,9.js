function vowel_count(string)
{
    //Since the function should be able to identify both upper and lower case letters
   var vowel_list = 'AEIOUaeiou';
   var vcount = 0;

   for(var x = 0; x < string.length ; x++)
   {
       if (vowel_list.indexOf(string[x]) !== -1)
       {
           vcount += 1;
       }    

   }
   return vcount;
}
console.log(vowel_count("I am GUgulethu Dungas Phiri"));