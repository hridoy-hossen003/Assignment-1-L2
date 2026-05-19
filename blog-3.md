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
### How it can halps in large a scale project of application ?
If there is an change in internal implemantation code will not be brack in outside. Data cannot be modify directly it can helps to prevent unspected state. it keeps the code maintainable and predictable.

## What is Inheritance ?
Inheritance means inherit methods and propartys of other class. Inheritance is a system to use method and proprty of another class as a sub-class or child class of it. there are used `extends` keyword to inherit the proparty and method of another class. which class is inherited is called parent class and which one is inherit the proparty and methods is called chiled class or sub-class.

````
class Animal {
  constructor( name: string,  age: number) {}

  move(distance: number) {
    console.log(`${this.name} moved ${distance}m`);
  }

   describe(): string {
    return `${this.name}, age: ${this.age}`;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number,  breed: string) {
    super(name, age);               // parent constructor call
  }

   bark(): void {
    console.log(`${this.name} says: Woof!`);
  }
}

class Cat extends Animal {
  purr(): {
    console.log(`${this.name} says: Purr...`);
  }
}

const dog = new Dog("Rex", 3, "Labrador");
dog.move(10);      
dog.bark();         
dog.describe();
````
## How can it helps in a large scale project.
- it help to prevent code duplicancy
- it make code more readable and developer don't need to write same code multiple time and some common logic and propary can be sheard trought the other sub-classes. 
- new feature can be added by creating a new sub-class. no need to retouch the code you wrote before.
