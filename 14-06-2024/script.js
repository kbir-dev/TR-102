
        // 1) check positive or negative number
        let a = -10;
        
        if(a>0){
            console.log("a is positive")
        }else{
            console.log("a is negative")
        }

        // 2) even or odd
        let b = 10;
        
        if(a%2==0){
            console.log("b is even")
        }else{
            console.log("b is odd")
        }

        // 3) leap year
        let c = 2003;
        
        if(((c%4==0)&&((c%400==0)||(c%100!==0)))){
            console.log("2003 is leap")
        }else{
            console.log("2003 is not leap")
        }
        // 4) three numbers greater
        if(a>b &&  a>c){
            console.log("a is greater")
        }
        else if(b>a &&  b>c){
            console.log("b is greater")
        }
        else{
            console.log("c is greater")
        }

        // 5) profit or loss

        // let amount = Number(prompt("enter the amount :"))
        let amount =80
        // console.log(amount)
        let sell = 90 

        if(amount>sell) console.log("Loss")
        else if (amount<sell) console.log("Profit")
        else console.log("error")

        // 6) triangle checking
        
        // let x=y=z=1
        let x= 1 ; let y=2; let z=3;
         if(x==y==z) console.log("equilateral ")
         else if (x==y || y==z ||z==x) console.log("Isosceles")
         else console.log("scalene")

        //  7) 90to100 => A, 80to90 => B, 70-to80 => C,40to70 =>D ,else fail

        let m = 30;
        if(m>90) console.log("A grade ")
         else if (m>80 && m<=90) console.log("B grade")
         else if (m>70 && m<=80) console.log("C grade")
         else if (m>=40 && m<=70) console.log("D grade")
         else console.log("Fail")

         // 8) Quadrant belongs

         let p = 1
         let q = -2

         if (p>0 && q>0) console.log("1st Quadrant")
         else if (p<0 && q>0 ) console.log(" 2nd Quadrant")
         else if (p<0 && q<0 ) console.log(" 3rd Quadrant")
         else console.log(" 4th Quadrant")

        // 9) Read day number & display the word
        let days =4
        
        switch (days){
            case 1 : 
               console.log("Monday")
               break
               
            case 2 : 
               console.log("Tuesday")
               break   
            case 3 : 
               console.log("Wednesday")
               break  
            case 4 : 
               console.log("Thursday")
               break
            case 5 : 
               console.log("Friday")
               break
            case 6: 
               console.log("Saturday")
               break
            case 7 : 
               console.log("Sunday")
               break
            default: 
               console.log("Invalid")
               break

        }

        // 10) Read the month & display the number of the days in the month

       function yr(month,year){

        month = month.toLowerCase()

        let days;

        switch(month){
            case "january":
            case "march":
            case "may":
            case "july":
            case "august":
            case "october":
            case "december":
                days = 31;
                console.log(days)
                break;

            case "april":
            case "june":
            case "september":
            case "november":
                days = 30;
                console.log(days)

                break;

            case "february":
                days = ((year%4==0)&&((year%400==0)||(year%100!==0))) ? 29 : 28
                console.log(days)

                break
            
            default :
               console.log("Invalid")
               break

        }

       }
         let month = "February"
         let year = 2023

        days = yr(month,year)

    
    

                                        







   