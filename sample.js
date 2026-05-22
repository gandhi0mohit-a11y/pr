function greet(name) {
  return 'Hello, ' + name;
}
function add(a, b) {
  return a + b;
}
const message = greet('World');
const sum = add(2, 3);
console.log(message);
console.log(sum);
Even simpler (one file, few lines):

const price = 100;
const discount = 10;
const finalPrice = price - discount;
console.log('Final price:', finalPrice);
