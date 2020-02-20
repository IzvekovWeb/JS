const fs = require("fs");
 
// let input = fs.readFileSync('hello.txt', 'utf8');
//     mas = input.split(" ");
//     sum = 0;

let input2 = fs.readFile('hello.txt', 'utf8', (error,data) => {
  
    if(error) throw error; // если возникла ошибка

    let mas = data.split(" ");
        sum = 0;

    mas.forEach((val)=>{
      sum += parseInt(val);  
    });
    output(data +' '+ sum);
})


let output = (text) => {
  fs.writeFileSync('hello.txt', text);
}