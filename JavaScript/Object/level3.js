// Q1: Create a function that takes the 'person' object as input and returns the age group based on the age.
// Age groups: 'Child' (0-12), 'Teen' (13-19), 'Adult' (20-59), 'Senior' (60 and above)
// Expected output for person1: 'Adult'
const person1 = { name: 'John', age: 30 };
function check()
{
  if (person1.age > 0 && person1.age <= 12)
    return "Child";
  else if (person1.age >= 13 && person1.age <=19)
    return "Teen";
  else if (person1.age >= 20 && person1.age <= 59)
    return "Adult";
  else 
    return "Senior";
}
check()

// Q2: Create a function that takes the 'inventory' object and returns the total number of items in stock.
// Expected output for inventory2: 23
const inventory2 = { apples: 10, bananas: 5, oranges: 8 };
const arr = Object.values(inventory2);
let total = 0;
arr.forEach((item)=>{
  total += item;
})
console.log(total);

// Q3: Create a function that takes the 'students' object and returns an array of student names.
// Expected output for students3: ['Alice', 'Bob', 'Emma']
const students3 = { student1: 'Alice', student2: 'Bob', student3: 'Emma' };
function name()
{
  const n = Object.values(students3);
  console.log(n);
}
name()

// Q4: Create a function that takes the 'details' object and checks if all properties have values.
// Expected output for details4: true
const details4 = { name: 'John', age: 25, city: 'New York' };
function check(){
  if(details4.name === null && details4.age === null && details4.city === null)
    return false;
  else 
    return true;
}
check()

// Q5: Create a function that takes the 'products' object and returns the average price of all products.
// Expected output for products5: 116.67
const products5 = { product1: { name: 'Laptop', price: 800 }, product2: { name: 'Phone', price: 100 }, product3: { name: 'Tablet', price: 150 } };
function average(){
  let sum = products5.product1.price + products5.product2.price + products5.product3.price;
  let avg = sum/3;
  console.log(avg);
}
average();

// Q6: Create a function that takes the 'scores' object and returns the highest score.
// Expected output for scores6: 95
const scores6 = { math: 85, science: 90, english: 95 };
const sc = Object.values(scores6);
function check(){
let max = Math.max(...sc);
console.log(max)
}
check();

// Q7: Create a function that takes the 'employees' object and returns the average salary.
// Expected output for employees7: 55000
const employees7 = { emp1: { name: 'John', salary: 60000 }, emp2: { name: 'Alice', salary: 50000 }, emp3: { name: 'Bob', salary: 55000 } };
const arr = Object.values(employees7);
let total = 0;
let average = 0;
function avg()
{
  for(let i = 0; i<arr.length;i++)
    {
      total = total + arr[i].salary;
    }
  average = total / arr.length
  console.log(average);
}
avg()

// Q8: Create a function that takes the 'data' object and returns an array of values sorted in ascending order.
// Expected output for data8: [25, 'John', 'New York']
const data8 = { name: 'John', age: 25, city: 'New York' };
const arr = Object.values(data8);
function sort(){
  console.log(arr.sort());
}
sort()

// Q9: Create a function that takes the 'order' object and calculates the total cost based on quantity and price.
// Expected output for order9: 150
const order9 = { item: 'Laptop', quantity: 2, price: 75 };
let total = 0;
function price()
{
  total = order9.quantity*order9.price;
  console.log(total);
}
price();

// Q10: Create a function that takes the 'expenses' object and returns the total amount spent.
// Expected output for expenses10: 500
const expenses10 = { rent: 200, groceries: 150, utilities: 100, entertainment: 50 };
const arr = Object.values(expenses10);
let sum =0;
function sum10(){
  arr.forEach((item)=>{
  sum = sum + item;
})
  console.log(sum);
}
sum10()