//1 Stwórz funkcję mergeArrays(array1, array2), która zwróci nową tablicę, będącą połączeniem dwóch przekazanych tablic

const oddNumbers = [1, 3];
const evenNumbers = [2, 4];
const mergeArrays = (array1, array2) => {

    console.log([...array1, ...array2]);

};

mergeArrays(oddNumbers, evenNumbers);

//2 Stwórz funkcję exceptFirst(), która zwróci tablicę ze wszystkimi przekazanymi do niej argumentami oprócz pierwszego

const players = ["Michał", "Franek", "Maciek"];
const exceptFirst = (firstParameter, ...otherParameters) => {
    console.log(`Usunięty ze składu: ${firstParameter}`);
    console.log(otherParameters);
};

exceptFirst(...players);

//3 . Stwórz funkcję last2Parameters(), która zwróci tablicę z dwoma ostatnimi argumentami przekazanymi do funkcji.

const last2Parameters = (array) => {

    console.log(array.slice(-2));
};

last2Parameters(players);

//4 Stwórz funkcję indexOf(element, array), która zwróci indeks podanego elementu w podanej tablicy

const indexOf = (element, array) => {
    console.log(array.indexOf(element));
};

indexOf("Michał", players);

//5 Stwórz funkcję findNonEmptyTask(tasks), która zwróci pierwsze zadanie, które ma treść

const findNonEmptyTask = (array) => {
    console.log(array.find(({ content }) => content.trim() !== ""));
};

const tasks = [
    { content: " " },
    { content: "" },
    { content: "" },
    { content: "Adoptować pieseła" },
];
findNonEmptyTask(tasks);

//6 Stwórz funkcję oddIndex(numbers), która zwróci indeks pierwszej nieparzystej liczby z podanej tablicy.

const numbers = [2, 4, 3, 7, 10, 6];

const oddIndex = (array) => {
    console.log(array.findIndex(number => number % 2 !== 0));
};

oddIndex(numbers);

//7 Stwórz funkcję hasStrawberry(fruits), która sprawdzi, czy w podanych owocach jest truskawka

const fruits = ["banan", "mango", "awokado", "truskawka", "winogrona"];

const hasStrawberry = (array) => {
    console.log(array.includes("truskawka"));
};

hasStrawberry(fruits);

//8 Stwórz funkcję someAdult(people), która sprawdzi, czy wśród podanych osób jest ktoś dorosły

const people = [
    { name: "Michał", age: 18 },
    { name: "Emilka", age: 13 },
    { name: "Albert", age: 3 },
];

const someAdult = (array) => {
    console.log(array.some(({ age }) => age >= 18));
};

someAdult(people);

//9 Stwórz funkcję onlyString(), która sprawdzi, czy wszystkie podane argumenty są tekstowe

arrayOfStrings = ["test", "Michał", "owoce",];

const onlyString = (array) => {
    console.log(array.every(argument => typeof (argument) === "string"));
};

onlyString(arrayOfStrings);

//10 Stwórz funkcję filterPremium(carBrands), która z podanej tablicy marek samochodów zwróci tylko marki premium
// https://stackoverflow.com/questions/47785624/filter-and-includes-to-filter-array-with-array

const carBrands = ["Peugeot", "BMW", "Audi", "", "Fiat", "Skoda"];
const premiumCarBrands = ["BMW", "Audi", "Mercedes"];

const filterPremium = (array) => {
    console.log(array.filter(brand => premiumCarBrands.includes(brand)));
};

filterPremium(carBrands);

//11  Stwórz funkcję getColors(), która zwróci tablicę kolorów samochodów podanych w argumentach.

const cars = [
    { car: "BMW X5", color: "black" },
    { car: "Peugeot 3008", color: "white" },
    { car: "Land Rover", color: "silver" },
    { car: "Fiat Bravo", color: "black" },
];

const getColors = (array) => {
    console.log(array.map(({ color }) => color));
};

getColors(cars);

//12 Stwórz funkcję sortPeople(people), która posortuje osoby od najmłodszych do najstarszych.

const newPeople = [
    { name: "Krzychu", age: 30 },
    { name: "Zbychu", age: 20 },
    { name: "Michu", age: 25 },
    { name: "Zdzichu", age: 40 },
];
const getAges = ({ age }) => `${age}`;
const sortPeople = (array) => {
    console.log(array.sort((person1, person2) => (getAges(person1).localeCompare(getAges(person2)))));
};

sortPeople(newPeople);

