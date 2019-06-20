/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

var arjun = {
    fullname: "Arjun",
    weight : 68,
    height : 1.68,
    calculateBmi: function() {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;
    }
}

var suriya = {
    fullname: "Suriya",
    weight : 62,
    height : 1.68,
    calculateBmi: function() {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;
    }
}

if (arjun.calculateBmi() > suriya.calculateBmi()) {
    console.log(arjun.fullname + " has higher bmi of value " + arjun.bmi);
} else if (suriya.bmi > arjun.bmi ) {
    console.log(suriya.fullname + " has higher bmi of value " + suriya.bmi);
} else  {
    console.log("Both have same bmi");
}