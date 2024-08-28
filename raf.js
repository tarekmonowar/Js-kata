let nam = [1,4,7,9,0];


nam.forEach(function (val,index,nam){
    console.log(index,val,nam);
});

function foreEach(arr,callback){
    for ( let i = 0; i< arr.length ; i++){
        callback(i,arr[i],arr);
    }
};
function test(index,valu,arr1){
          console.log(index,valu,arr1);
}
foreEach(nam,test)


