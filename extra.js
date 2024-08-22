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



