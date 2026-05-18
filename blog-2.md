# Topic : Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.
## What is `any` in typeScript ? and it's called the safety hole of ts ? 

`Any` is a data-type of ts which is forced the system to ignore the variable that type of any. that means TypeScript ignore the variable in compile time developer can use any kind of methods in this variable event the method is switable or not and if it's doen't exists.

#### for example 
```
const name : any = 'hridoy'
name.Uppercase() //right.
name.tofix() // wrong but not throwing error.
```

### Why its call the safety hole ?
The main purpose of using TS is catching the error in the compile time. when the variable is type of `any` that means you are codeing in typescript
but your code is unsafe like using javascript. and this is the safety hole of `any`.

## What is the `unknown` type in typeScript? And why it is safer alternate of using `any`? 
`unknown` is acjectly like type of `any`. I mean `unknown` also allows to asign a variable of any type. but there is a catch which is `unkown` do not allow to assign any method in that variable without checking its data type. to use the mathod you want you have to check the the type of this variable first. and It makes `unkown` safer then `any` beacuse TS knows the type of variable before it is used in any method and functions and crashing the program.
#### for example 
````
let x: unknown = "hello";
x.toUpperCase();  // ❌ Error: Object is of type 'unknown'

if (typeof x === "string") {
  x.toUpperCase();  // ✅ এখন safe
}
````
### What is the best case to use `unkown` type.
When you handle unpredictable data.
#### for example
- API response
- User input
- Dynamic data
- JSON data
- Third-party library data
It is most recomanded to use `unkwon` while using unpredicted data will comes. to avoid the unspected things hapends and redus the risk of crashing the whole program.
