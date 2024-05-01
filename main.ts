#! /usr/bin/env node
import inquirer from "inquirer"

console.log("\n\t Welcome to my simple calculator :)\n")

const answer = await inquirer.prompt(
    [
        {
            name: "firstnumber",
            message: "Enter your first number",
            type: "number",

        },

        {
            name: "secondnumber",
            message: "Enter your second number",
            type: "number"
        },

        {
            name: "operater",
            message: "select one of the operaters to perform action",
            type: "list",
            choices: ["addition", "subtraction","multiplication","division"]
        }
    ]
    
);
// console.log(answer);

if ( answer.operater==="addition")
   { console.log( + answer.firstnumber + answer.secondnumber)
   }
   else if ( answer.operater==="subtraction"){

    console.log( + answer.firstnumber - answer.secondnumber)
   }

else if (answer.operater==="multiplication"){

    console.log( + answer.firstnumber * answer.secondnumber)
}
    else if ( answer.operater==="division"){

        console.log( + answer.firstnumber / answer.secondnumber)
    }
else {

    console.log("please select valid operater") 
    
};
 console.log("\n\t Thank you for using my tool\n")