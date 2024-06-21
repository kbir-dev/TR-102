
   // 1)display star pattern

        for(let i=1;i<=5;i++){
           var str="* "
           let st="X"
           document.write(st.repeat((5-i)) +str.repeat(i))
           document.write(" <br>  ")
        }
        document.write(" <br>  ")

    // 2) 1 01 101 pattern
      var i, j;
        for( i=1; i<=5; i++){
            for( j=i; j>=1; j--)
                document.write(j % 2);
            
            document.write("<br>")
        }
        document.write("<br>")

     // 3) 1 23 456 pattern
        var a=1
        for(let i=1; i<=4; i++){
            for(let j=1; j<=i; j++)
                document.write( " ",a++ ); 
            document.write("<br>")

             }
             document.write("<br>")

     // 4) 1 12 123 1234 pattern  

        for(let i=1; i<=5; i++){
            for(let j=1; j<=i; j++)
                document.write("\t", j); 
            document.write("<br>")

             }
             document.write("<br>")

































    