function longestCollatz(n) {
    let arr = [];
    let value = n;
    while(n!=1){
      if(n%2==0){
          n = n/2
          arr.push(n);
      }else{
          n = (n*3) + 1;
          arr.push(n);
      }
    }
    return [arr,value];
  }
  let [arr, value] = longestCollatz(13);
  console.log(`the value is ${value} and the all chaiing numbers are ${arr} and the length of the chaining number is ${arr.length}`);
  
  let storeArLength = [];
  
  for(i=1; i< 1000000; i++){
    let [arr, value] = longestCollatz(i);
    let arrLen = arr.length;
    storeArLength.push({arrLen:arrLen, value:i});
  
  }
  
  let sommm = storeArLength.reduce((acc,val) =>val["arrLen"] > acc["arrLen"]?val:acc);
  document.write("<h4>The longest Collatz value from 1 to 1millon is: </h4>", sommm.value , "<br>");
  console.log("The longest Collatz value from 1 to 1millon is: ", sommm.value );