#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
//displaying welcome message
console.log(chalk_1.default.bold.yellow(`\n  \t\t <<<================================================>>>`));
console.log(chalk_1.default.bold.blue(`<<<=========>>>  ${chalk_1.default.blueBright.bold("Welcome To 'Hafeez Siddiqui' - OOP My Bank")}  <<<=========>>>`));
console.log(chalk_1.default.bold.yellow(`\t\t <<<===============================================>>>\n`));
//class
class bankaccount {
    constructor(accountbalance) {
        this.accountbalance = accountbalance;
    }
    // publically credit
    credit(amount) {
        if (amount > 0) {
            this.accountbalance += amount;
            console.log(chalk_1.default.greenBright(`The amount has been successfully credited to the account, and your new account balance is:` + this.accountbalance));
        }
        else {
            console.log(`OOPS! The attempt to credit the amount into the account was unsuccessful.`);
        }
    }
    // publically debit
    debit(amount) {
        if (amount > 0 && amount < this.accountbalance) {
            this.accountbalance -= amount;
            console.log(chalk_1.default.green(`The amount was successfully debited from account and the remaining account balance is :` + this.accountbalance));
        }
        else {
            console.log(`OOPS! The attempt to debit the amount from this account was unsuccessful..`);
        }
    }
}
class Costumer {
    constructor(person, age, gender, mobile_number, bank_account) {
        //this property utilization
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bank_account = bank_account;
    }
    //public user acess
    display() {
        console.log(chalk_1.default.green("name: " + this.person.firstname + " " + this.person.lastname));
        console.log(chalk_1.default.red("age: " + this.age));
        console.log(chalk_1.default.yellow("gender: " + this.gender));
        console.log(chalk_1.default.cyan("Mobile Number: " + this.mobile_number));
        console.log(chalk_1.default.magentaBright("Bank Balance: " + this.bank_account.accountbalance + "/-"));
    }
}
console.log(chalk_1.default.bold.magentaBright(`\t\t <<<================================>>>`));
console.log(chalk_1.default.red(`\t\t<<<=========>>>${chalk_1.default.green.bold("Customer 1")}<<<=========>>>`));
console.log(chalk_1.default.bold.magentaBright(`\t\t <<<================================>>>`));
const a1 = new bankaccount(8000);
const c1 = new Costumer({ firstname: "Hafeez", lastname: "Siddiqui" }, 16, "male", +923217641627, a1);
c1.display();
c1.bank_account.debit(200);
console.log();
console.log(chalk_1.default.bold.magentaBright(`\t\t <<<================================>>>`));
console.log(chalk_1.default.red(`\t\t<<<=========>>>${chalk_1.default.green.bold("Customer 2")}<<<=========>>>`));
console.log(chalk_1.default.bold.magentaBright(`\t\t <<<================================>>>`));
const a2 = new bankaccount(9000);
const c2 = new Costumer({ firstname: "Nehal", lastname: "Siddiqui" }, 39, "male", +921234567, a2);
c2.display();
c2.bank_account.credit(20000);
console.log();
