/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var john = {
    name: "john",
    bill : [124, 48, 268, 180, 42],
    tip: [],
    total: [],
    tipCalc: function() {
        var percent;
        for (var i = 0; i< this.bill.length; i++) {
            if(this.bill[i]< 50) {
                percent =.2;
            } else if (this.bill[i] < 200) {
                percent =.15;
            } else {
                percent =.1;
            }
            this.tip[i] = this.bill[i] * percent;
            this.total[i] = this.bill[i] + this.bill[i] * percent;
        }
    }
}

var mark = {
    name: "Mark",
    bill : [77, 375, 110, 45],
    tip: [],
    total: [],
    tipCalc: function() {
        var percent;
        for (var i = 0; i< this.bill.length; i++) {
            if(this.bill[i]< 50) {
                percent =.2;
            } else if (this.bill[i] < 300) {
                percent =.1;
            } else {
                percent =.25;
            }
            this.tip[i] = this.bill[i] * percent;
            this.total[i] = this.bill[i] + this.bill[i] * percent;
        }
    }
}


john.tipCalc();
mark.tipCalc();

function avg(val) {
    var sum = 0;
    for(var i = 0; i < val.length; i++) {
        sum += val[i]; 
    }
    var avg = sum / val.length;
    return avg;
}

john.avgTip = avg(john.tip); 
mark.avgTip = avg(mark.tip); 

if (john.avgTip > mark.avgTip) {
    console.log("John pay higher tips than Mark in average");
} else if (mark.avgTip > john.avgTip) {
    console.log("Mark pay higher tips than John in average");
} else {
    console.log("Both pay same tips");
}