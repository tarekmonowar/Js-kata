// ------------solution num 01 -------------

let isRunning = true;
while (isRunning) {
    let ran = Math.floor(Math.random() * 10 + 1);
    

    if (ran === 5) {
        console.log("Winner Winner you will win 5 lakh");
        isRunning = false;
    }else {console.log("you have" +" " + ran)}
};

// ------------solution num 01 by for loop-------------

for ( ; ; ){
    let ran = Math.floor(Math.random() * 10 + 1);
    

    if (ran === 5) {
        console.log("Winner Winner you will win 5 lakh");
        break;
    }else {console.log("you have" +" " + ran)}
};

// ------------solution num 02 -------------

let arr = [1 , 2, 4, 5, 9, 0, 10, 19, 56 ,]
let find = 10;
let isFound = false;

for(let i = 0; i<arr.length ; i++){
    if(arr[i]===find){
        console.log(find + ' is found at index '+ i)
        isFound = true;
        break;
    } 
}
if(!isFound){
    console.log(find + ' is not found')
}

  // ------------solution num 03 -------------


let arr1 = [22, 63, 4, 2, 4, 6];
let arr2 = [32, 23, 7, 3, 3, 2];
let arr3 = [12, 33, 0, 53, 1, 6];
let arr4 = [2, 43, 1, 20, 0, 9];

function sum(a) {
    let total= 0;
    for(let i =0; i<a.length; i++){
        total+=a[i];
    }
    console.log(total);
}
sum(arr1);
sum(arr2);
sum(arr3);
sum(arr4);


  // ------------solution num 04 -------------

function name1(){
    let max = 0;
    for(let i = 0; i<arguments.length ; i++){
        if(arguments[i]>max){
            max = arguments[i];
        };
    };
//   console.log(max) or
  return max;
};

// name1(1,2,3,4,5,6,7,8,9,23) or
console.log(name1(1,2,3,4,5,6,7,8,9,23))

// other shortcut

function name1(...args) {
    let max = Math.max(...args);
    console.log(max);
}

name1(1, 2, 3, 4, 5, 6, 7, 8, 9, 23);
