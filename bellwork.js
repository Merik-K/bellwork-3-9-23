/*1. Complete the solution so that it reverses the string passed into it.
For example: 'world'  =>  'dlrow' OR 'word'   =>  'drow'*/

// reverse the words
function solution(str) {
  let word = '';
  // for loop is to scan through each character
  for (let i = str.length - 1; i >= 0; i--) {
    word += str[i];
  }
  return word;
}
console.log(solution('world'));
console.log(solution('word'));
/*2. it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres You will need
to drink, rounded to the smallest value.*/

function litres(time) {
  return Math.floor(time * 0.5);
}
console.log(litres(2));

/*3. Create a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
For example:
arrayDiff([1,2],[1]) == [2]*/
function diff(a, b) {
  const result = [];
  for (const value of a) {
    if (!b.includes(value)) {
      result.push(value);
    }
  }
  return result;
}
console.log(diff[(1, 2)], [1]);
/*If a value is present in b, all of its occurrences must be removed from the other:
For example:
arrayDiff([1,2,2,2,3],[2]) == [1,3]*/

function arrayDiff(a, b) {}
