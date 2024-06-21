
  //  1) Display first 10 natural numbers

  // let num = Number(prompt("Enter How many Natural numbers want to print : "))
  for(let i=1;i<=10;i++) document.write(" ", i)

  // 2) sum of first ten natural numbers
  document.write("<br>")
  let sum=0
  for(let i=1;i<=10;i++) sum+=i
  document.write("Sum is: ", sum)

  // 3) Display Multiplication Table
  document.write("<br>")

  // let n = Number(prompt("Enter the number : "))
  for(let i=1;i<=10;i++){
  document.write(5," *",i," = ",5*i)
  document.write("<br>")

  }

  // 4) Display n terms of odd natural numbers & their sum
document.write("<br>");
function print(limit) {
    let sum = 0;

    document.write("Odd numbers up to " + limit + " :");
    for (let i = 1; i <= limit; i++) {
        if (i % 2 !== 0) {
            document.write(" ",i);
            sum += i;
        }
    }
    document.write("<br>");

    document.write("Sum of odd numbers: " + sum);
}

const limit = 10; 
print(limit);

  