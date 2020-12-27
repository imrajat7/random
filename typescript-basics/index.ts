// Variable dec with name
var firstName: string = "Rajat Sharma";
const ageOfMyParents: number = 10;

const increment = (counterVal: number) => {
  return counterVal + 1;
};

const counter: number = increment(10);

let programmingLanguages: String[] = ["java", "typescript", "python"];
programmingLanguages.push("nobody");

console.log(programmingLanguages);

// Interface example

interface IUser {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
}

// Function returning Promise

const fetchData = (apiUrl: string): Promise<IUser> => {
  return fetch(apiUrl).then((res) => res.json());
};

const user: IUser = fetchData("apiurl.com/api");

// Interface examples

interface IProgrammingLanguage {
  name: String;
  awesome: boolean;
  age?: number;
}

const typeScript: IProgrammingLanguage = {
  name: "typescript",
  awesome: true,
};

const java: IProgrammingLanguage = {
  name: "java",
  awesome: true,
};

//enum example
enum cheese {
  cheddar = "cheddar",
  gouda = "gouda",
  goat = "goat",
  blueMould = "blueMould",
}

// No return type
const serveCheese = (cheeseType: cheese, servings: number): void=> {
  console.log(`You want ${servings} of type ${cheeseType}`);
};

serveCheese(cheese.cheddar,3);
