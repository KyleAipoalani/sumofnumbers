// for-loop
function sumFor(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// while-loop
function sumWhile(arr: number[]): number {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

// recursion
function sumRecursion(arr: number[]): number {
  if (arr.length === 0) return 0;
  return arr[0] + sumRecursion(arr.slice(1));
}

// array functional programming (reduce)
function sumTheFunctionalWay(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// test array
const numbers: number[] = [1, 2, 3, 4];

// calling functions
const total1 = sumFor(numbers);
const total2 = sumWhile(numbers);
const total3 = sumRecursion(numbers);
const total4 = sumTheFunctionalWay(numbers);

// outputs
console.log('Sums: ');
console.log(`using for-loop: ${total1}`);
console.log(`using while-loop: ${total2}`);
console.log(`using recursion: ${total3}`);
console.log(`using array functional programming: ${total4}`);
