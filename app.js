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

for(i=1; i< 1000000; i++){
  let [arr, value] = longestCollatz(i);
  let arrLen = arr.length;
  storeArLength.push({arrLen:arrLen, value:i});

}

let sommm = storeArLength.reduce((acc,val) =>val["arrLen"] > acc["arrLen"]?val:acc);


// console.log("All array>>>",storeArLength);
console.log("hhhhh", sommm);

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


const str = "AGGTAB";
const str2 = "GXTXAYB";
const allMatch = []

function getAllIndexes(arr, val) {
    var indexes = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            indexes.push(i);
        }
    }
    return indexes;
}


function getNewValue(str1, str2) {
  let finalArr = [];
  
  let arr2 = str2.split("");

  for (let i = 0; i < str1.length; i++) {
    const arr1 = str1.substr(i).split("");
    let targetIndex = -1;
    arr1.forEach((el, index) => {
        let arr2Copy = [...arr2]
        const allPossibleIndex = getAllIndexes(arr2Copy, el)
      for (let j = 0; j < allPossibleIndex.length; j++ ){
          
          if (allPossibleIndex[j] > -1 && allPossibleIndex[j] > targetIndex || allPossibleIndex[j] == 0 && targetIndex != allPossibleIndex[j] && targetIndex < 1) {
              finalArr.push(el);
             targetIndex = allPossibleIndex[j];
             break;
      }
      }
    });
    
    allMatch.push(finalArr.join(""))
    targetIndex = 0; 
    finalArr = []
  }
}

getNewValue(str, str2);

console.log(allMatch)

let longestMatchStr = ""

allMatch.forEach(targetStr => {
    if (targetStr.length > longestMatchStr.length) {
        longestMatchStr = targetStr
    }
})

console.log({longestMatchStr})