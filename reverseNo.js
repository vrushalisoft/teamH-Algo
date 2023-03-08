//Reverse number put on same index number.

let cl = console.log;

 const revNum = (num) => {
     let newNum = num.toString().split('').reverse().join('');

      cl([newNum])
  }
  revNum([12,53,10,20])