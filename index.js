#! /usr/bin/cnv node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "a" },
    { message: "enter second number", type: "number", name: "b" },
    {
        message: "Select any one operator to perform action", type: "list", name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    }
]);
// Conditional Statement
if (answer.operator === "Addition") {
    console.log(answer.a + answer.b);
}
else if (answer.operator === "Substraction") {
    console.log(answer.a - answer.b);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.a * answer.b);
}
else if (answer.operator === "Division") {
    console.log(answer.a / answer.b);
}
else {
    console.log("please enter valid operator");
}
