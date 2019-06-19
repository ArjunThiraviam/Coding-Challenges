var bill = [124, 48, 268];
var percent;

function tipCalculator(bill) {
    if(bill < 50) {
        percent = .2;
    }
    if(bill > 50 && bill < 200 ) {
        percent = .15;
    }    
    if(bill > 200 ) {
        percent = .1;
    }
    return bill * percent;
}

var tip = [tipCalculator(bill[0]), tipCalculator(bill[1]), tipCalculator(bill[2])];
var total = [tip[0] + bill[0], tip[1] + bill[1], tip[2] + bill[2]];


console.log(tip);
console.log(total);