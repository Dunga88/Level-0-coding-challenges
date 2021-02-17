function max_num(x, y, z)
 {
     max_val = 0;
     if (x > y)
     {
         max_val = x;
     }  else 
     {
         max_val = y;
     }
     if (z > max_val)
     {
         max_val = z;
     }
     return max_val;
 }

 console.log(max_num(89,99,1));