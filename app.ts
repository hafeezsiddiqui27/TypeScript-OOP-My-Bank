#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";



//displaying welcome message
console.log(
  chalk.bold.yellow(
    `\n  \t\t <<<================================================>>>`
  )
);
console.log(
  chalk.bold.blue(
    `<<<=========>>>  ${chalk.blueBright.bold(
      "Welcome To 'Hafeez Siddiqui' - OOP My Bank"
    )}  <<<=========>>>`
  
  )
);
console.log(
  chalk.bold.yellow(
    `\t\t <<<===============================================>>>\n`
  )
);




interface ibankaccount {
    credit (amount: number) : void;
    debit (amount: number) : void;

}

//class
class bankaccount implements ibankaccount {
    accountbalance: number;
    constructor(accountbalance: number) {
        this.accountbalance = accountbalance
    }

    // publically credit

    public credit(amount: number) {
        if (amount > 0) {
            this.accountbalance += amount
            console.log(chalk.greenBright(`The amount has been successfully credited to the account, and your new account balance is:` + this.accountbalance));
            
        }
        else {
            console.log(`OOPS! The attempt to credit the amount into the account was unsuccessful.`);
            
        }
        
    }
    // publically debit
    public debit(amount: number) {
        if (amount > 0 && amount < this.accountbalance) {
            this.accountbalance -= amount
            console.log(chalk.green(`The amount was successfully debited from account and the remaining account balance is :` + this.accountbalance));
            
        }
        else {
            console.log(`OOPS! The attempt to debit the amount from this account was unsuccessful..`);
            
        }
        
    }
    
}
class Costumer {
    person: {
        firstname: string
        lastname: string
    }
    age: number;
    gender: string;
    mobile_number: number;
    bank_account: bankaccount;

    constructor(person: { firstname: string, lastname: string }, age: number, gender: string, mobile_number: number, bank_account: bankaccount) {
        //this property utilization
        this.person = person
        this.age = age
        this.gender = gender
        this.mobile_number = mobile_number
        this.bank_account=bank_account
    }
    //public user acess
    public display() {
        console.log(chalk.green("name: " + this.person.firstname + " " + this.person.lastname));
        console.log(chalk.red("age: " + this.age));
        console.log(chalk.yellow("gender: " + this.gender));
        console.log(chalk.cyan("Mobile Number: " + this.mobile_number));
        console.log(chalk.magentaBright("Bank Balance: " + this.bank_account.accountbalance + "/-"));
        
        
    }

}
console.log(
    chalk.bold.magentaBright(
      `\t\t <<<================================>>>`
    )
);
console.log(
    chalk.red(
        `\t\t<<<=========>>>${chalk.green.bold( "Customer 1"
        )}<<<=========>>>`
  
    )
)
;
console.log(
    chalk.bold.magentaBright(
      `\t\t <<<================================>>>`
    )
  );

const a1 = new bankaccount(8000)
const c1 = new Costumer({ firstname: "Hafeez", lastname: "Siddiqui" }, 16, "male", +923217641627, a1)
c1.display()
c1.bank_account.debit(200)
console.log();

console.log(
    chalk.bold.magentaBright(
      `\t\t <<<================================>>>`
    )
);
console.log(
    chalk.red(
        `\t\t<<<=========>>>${chalk.green.bold( "Customer 2"
        )}<<<=========>>>`
  
    )
)
;
console.log(
    chalk.bold.magentaBright(
      `\t\t <<<================================>>>`
    )
  );

const a2 = new bankaccount(9000)
const c2 = new Costumer({ firstname: "Nehal", lastname: "Siddiqui" }, 39, "male", +921234567, a2)
c2.display()
c2.bank_account.credit(20000)
console.log();


    
    
