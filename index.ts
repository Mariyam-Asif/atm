#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 20000; //Dollars
let myPin = 1232; 

let pinAnswer = await inquirer.prompt(
    {
    name: "pin",
    type: "number",
    message: "Enter your pin code",
    }
);

if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                type: "list",
                message: "Please select an option",
                choices: ["Withdraw", "Check Balance", "Deposit", "Fast Cash"]
            }
        ]
    );

if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                type: "number",
                message: "Enter your withdrawal amount"
            }
        ]
    );

    if (amountAns.amount > myBalance) {
        console.log("Insufficient balance. Cannot withdraw.")
    } else {
        myBalance -= amountAns.amount;
        console.log(`Withdrawal successful! Your remaining balance is: ${myBalance}`);
    }

} else if (operationAns.operation === "Check Balance") {
    console.log(`Your balance is: ${myBalance}`);

} else if (operationAns.operation === "Deposit") {
    let depositAns = await inquirer.prompt(
        {
            name: "amount",
            type: "number",
            message: "Enter your deposit amount"
        }
    );

    myBalance += depositAns.amount;
    console.log(`Deposit successful! Your new balance is: ${myBalance}`);
} else if (operationAns.operation === "Fast Cash") {
    let fastCashAns = await inquirer.prompt(
        {
            name: "amount",
            type: "list",
            choices: ["500", "1000", "2000", "5000", "10000"],
            message: "Select an amount",
        }
    );

    if (fastCashAns.amount > myBalance) {
        console.log("Insufficient balance. Cannot withdraw.");
    } else {
        myBalance -= fastCashAns.amount;
        console.log(`Witdrawal successful! Your remaining balance is ${myBalance}`);
    }
}
} else {
    console.log("Incorrect pin code!");
}
