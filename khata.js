// -----------------   number=8    --------------------
let n = 6;
for(let i = 1; i<=n ; i++){
    let result = "";
    for(let j =1; j<=i ;j++){
       result+=j + " ";
    }
    console.log(result);
}

// -----------------   number=9    --------------------

let x = 10;
for (let l=1; l<=x; l++){
    let res=" ";
    for(let k=1;k<=x;k++){
        res+= "*" + ' ';
    }
    console.log(res);
}

// -----------------   number=10    --------------------


let nam = "i am tarek monopwar";
let length = 0;
while (true) {
    if (nam.charAt(length) === "") {
        break;
    } else {
        length++;
    }
}
console.log(length);
// 20/21/22 ai rokom index a charat korle empty '' ase tai jokon empty asbe tokon off sobe & ai babe length pawa jay


// -----------------   number=11    --------------------


let arr = [1, 2, 3, 4, 5, 6, 7, 8,9];

for(let i = 0; i < arr.length / 2; i++) {
    let tem = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tem;
  
}
console.log(arr);



// -----------------   number=12    --------------------


let arr1 = [2, 4, 7, -2, -45, 69, -11, 100, -99];
function isPositiveNum(x){
    return x>=0
}
                                                               //2nd funtion run howar por atite x ase tar por true return kore,,,x>=0 ati true /false reture kore
function remNegNu(num , callback) {
    let newArr = [];
    for(const x of arr1){                                        //akhane x means 2,3,7 aibabe ase
        if(isPositiveNum(x)){
            newArr.push(x)
        }
    }
   return newArr 
}
let nam1 = remNegNu(arr1);
console.log(nam1);


// -----------------   number=13   --------------------


let nam = [1,4,7,9,0];

// nam.forEach(function (val,index,nam){
//     console.log(index,val,nam);
// });

function foreEach(arr,callback){
    for ( let i = 0; i< arr.length ; i++){
        callback(i,arr[i],arr);
    }
};
function test(index,valu,arr1){
          console.log(index,valu,arr1);
}
foreEach(nam,test)


// -----------------   number=14   --------------------