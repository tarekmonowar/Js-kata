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