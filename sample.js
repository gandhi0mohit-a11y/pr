function greet(name) {
  // changed: add exclamation and handle empty name poorly (for review testing)
  if (!name) {
    return 'Hello, Guest';
  }
  return 'Hello, ' + name + '!';
}
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
const message = greet('World');
const total = add(5, multiply(2, 3));
console.log(message);
console.log('Total:', total);
