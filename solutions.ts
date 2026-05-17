// Problem - 1

const nums: number[] = [1, 2, 3, 4, 5, 6];

const filterEvenNumbers = (arr: number[]): number[] => {
  const evenNums = arr.filter((num) => num % 2 === 0);
  return evenNums;
};

const even = filterEvenNumbers(nums);

// Problem - 2

const reverseString = (str: string) => {
  const newArr = str.split("").toReversed().join("");
  return newArr;
};

// reverseString("hello my name is hridoy");

// Problem - 3
const str: string = "hello";
const num: number = 222;

const checkType = (input: string | number): string => {
  if (typeof input === "string") {
    const itsType = "string";
    return itsType;
  } else if (typeof input === "number") {
    const itsType = "number";
    return itsType;
  } else {
    return "wrong input.";
  }
};

// Problem - 4

const user = { id: 1, name: "John Doe", age: 21 };

const getProperty = <T, K extends keyof T>(user: T, key: K) => {
  return user[key];
};

const getUser = getProperty(user, "name");
// console.log(getUser);

// Problem - 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
  return {
    ...book,
    isRead: true,
  };
};

const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
const readBook = toggleReadStatus(myBook);

// console.log(readBook);

// Problem - 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    const details = `"Name : ${this.name}, Age : ${this.age}, Grade : ${this.grade}"`;
    return details;
  }
}



// Problem - 7

const arr1: number[] = [3, 4, 5, 6, 7];
const arr2: number[] = [1, 2, 3, 4, 5];
const getIntersection = (arr1: number[], arr2: number[]) => {
  const setArry = new Set(arr2);
  const intersection = arr1.filter((item) => setArry.has(item));
  return intersection;
};

const integration = getIntersection(arr1, arr2);
// console.log(integration);
