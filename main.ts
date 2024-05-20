#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n \t Welcome to `CodeWithOwaisKhan` - Currency Converter\n"))
console.log("=".repeat(60));

// define the list of currencies and thier exchange rates
let exchange_rate: any = {
    "USD": 1, // Base Currency
    "EUR": 0.9, // European Currency (Euro)
    "JYP": 113, // Japenese Currency (Yen)
    "CAD": 1.3, // Canadian Dollar
    "AUD": 1.65, // Austrailian Dollar
    "PKR": 278.48, // Pakistan Rupees
    // Add more currencies and thier exchange rates
 }

 // prompt the user to select currencies to covert from and to
let userAnswer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert",
    }
]);

// perform currency conversion by using formula
let fromAmount = exchange_rate[userAnswer.from_currency];
let toAmount = exchange_rate[userAnswer.to_currency];
let amount = userAnswer.amount

// formula of conversion
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

// display the converted amount
console.log(`Converted Amount = ${chalk.green(convertedAmount.toFixed(2))}`);