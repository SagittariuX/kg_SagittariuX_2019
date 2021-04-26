//Not sure what environment this will be run on
//Using the most basic feature of node
const args = process.argv.slice(2).map((arg) => parseInt(arg, 10));

//Dictionary for number to word translation
const dict = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
};

/**
 * Converts an array of nums to an array of strings representing the phonetic equivalent of the integer
 * @param {number[]} nums
 * @returns {string[]}
 */
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

//Final stdout format
console.log(numbersToStrings(args).join(","));
