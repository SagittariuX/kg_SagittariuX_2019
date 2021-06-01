## Internship Assessment

Written in JavaScript ES6

The assessment does not given too much detail regarding the environment this code will run in,
so I decided to use ``` process.argv ``` which should not present any problems.

Since I used ``` process.argv ``` all arguments are coverted to strings by default and in order to preserve the integrity of the question I manually converted all arguments back to integers.
```javascript
const args = process.argv.slice(2).map((arg) => parseInt(arg, 10));
```

The main function doing the conversion is:
```javascript
const numbersToStrings = (nums) => {
  const strings = nums.map((num) => {
    const stringNum = num.toString();
    return stringNum
      .split("")
      .map((digit) => dict[digit])
      .join("");
  });

  return strings;
};
```
According to the assessment, this function will be given an array of integers and returns an array of strings. I am not sure if the assessment want me directly stdout the final string inside of the function or not, the example is a bit ambiguous, but I decided to follow the question prompt and implement the function it stated.

Hence I have a follow up stdout command:
```javascript
console.log(numbersToStrings(args).join(","));
```
