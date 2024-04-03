//1.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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

for(i=1; i< 100; i++){
  let [arr, value] = longestCollatz(i);
  let arrLen = arr.length;
  storeArLength.push({arrLen:arrLen, value:i});

}

let sommm = storeArLength.filter(val =>  val.arrLen ==106)
console.log("hhhhh", sommm);

console.log(storeArLength);

//2.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

function largestSubsequence(a,b){
  let str = "";
  let aArr = a.split('');
 let bArr = b.split('');
 let final ="";



  console.log(aArr);
  console.log(bArr);
  console.log(final);
}

largestSubsequence("ABCBDAB","BDCAB") //BCAB

//3.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

let arr2 = [];
for(i=0; i<20;i++){
  let innerArr = [];
  for(let j=0; j<20; j++){
    let nestedArr = [];
    if(i==j){
      nestedArr.push(i,j)
      innerArr.push(nestedArr);
    }
   
  }
  arr2.push(innerArr);
}

console.log(arr2);