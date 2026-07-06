export function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 === 0);
}


export function reverseString(text: string): string {
  return text.split("").reverse().join("");
}



type StringOrNumber = string | number;

export function checkType(value: StringOrNumber): string {
  return typeof value === "string" ? "String" : "Number";
}


export function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}



export interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

export function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}




class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}



export function getIntersection(firstArray: number[], secondArray: number[]): number[] {
  return firstArray.filter((number) => secondArray.includes(number));
}

