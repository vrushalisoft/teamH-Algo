// 











































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































//Find nth Fibonacci number

let n1 = 0 , n2 = 1;
cl(n1)
cl(n2)

for(i = 1; i <= 10; i++){
    num = n1 + n2;
    cl(num);
    n1 = n2;
    n2 = num;
}

//////



const fib = (n) =>{
  const fibarray =[0,1];

  for(var i= 2; i<=n; i++){
    fibarray.push(fibarray[i-2]+(fibarray[i-1]));
  }
  return fibarray ;
}
 cl(fib(10));