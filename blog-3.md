# Topic: How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

## What is Encapsulation ?
Encapsulation is a mechanism to hide the internal data and logic of a class from the outside of the code. It means you hide important data and implementation details while exposing only the necessary parts to the outside of a specific block. This block can be a function, a class, or any other scope defined by curly braces `{}`. You can control this behavior using the `private`, `public`, and `protected` keywords.
#### for example 
```` class BankAccount {
  private balance: number = 0;        // can not acces from the outer side of this block.
  private transactionHistory: string[] = [];

  deposit(amount: number){
    if (amount <= 0){
const error = ("Invalid amount");
return error
}else{
    this.balance += amount;
    this.transactionHistory.push(`Deposited: ${amount}`);
  }
}

  withdraw(amount: number){
    if (amount > this.balance){
const error =("Insufficient funds");
return error
}else{
    this.balance -= amount;
    this.transactionHistory.push(`Withdrawn: ${amount}`);
  }
}

getBalance(): number {
    return this.balance;             // read-only access
  }
}

const account = new BankAccount();
account.deposit(1000);
account.balance = 9999;             // Error: private field
console.log(account.getBalance());  // 1000 
````
### How can it halps in large scale project of application ?
If there is an change in internal implemantation code will not be brack in outside. Data cannot be modify directly it can helps to prevent unspected state. it keeps the code maintainable and predictable.
