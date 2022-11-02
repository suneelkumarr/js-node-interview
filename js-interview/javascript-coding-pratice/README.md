**# JavaScript Coding Practice

## Q. Write a function to accept argument like `sum(num1)(num2);` or `sum(num1,num2);`

**Example 1:**

```js
Input: sum(10)(20);
Output: 30
Explanation: 10 + 20 = 30
```

**Example 2:**

```js
Input: sum(10, 20);
Output: 30
Explanation: 10 + 20 = 30
```

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function (y) {
      return x + y;
    };
  }
}

console.log(sum(10, 20));
console.log(sum(10)(20));
```

**⚝ [Try this example on CodeSandbox](https://codesandbox.io/s/js-cp-1-ypmjhl?file=/src/index.js)**

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a function to get the difference between two arrays?

**Example:**

```js
Input:
var a1 = ['a', 'b'];
var a2 = ['a', 'b', 'c', 'd'];

Output:
["c", "d"]
```

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
let arr1 = ['a', 'b'];
let arr2 = ['a', 'b', 'c', 'd'];

let difference = arr2.filter(x => !arr1.includes(x));
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a function to accept argument like `[array1].diff([array2]);`

**Example:**

```js
Input: [1, 2, 3, 4, 5, 6].diff([3, 4, 5]);
Output: [1, 2, 6];
```

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
Array.prototype.diff = function (a) {
  return this.filter(function (i) {
    return a.indexOf(i) < 0;
  });
};

const dif1 = [1, 2, 3, 4, 5, 6].diff([3, 4, 5]);
console.log(dif1); // => [1, 2, 6]
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Validate file size and extension before file upload in JavaScript?

<details open=""><summary><b>Answer<b></b></b></summary>

---

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript File Upload Example</title>
  <script type="text/javascript">
    function showFileSize() {
      var input, file, extension;

      input = document.getElementById("fileinput");
      file = input.files[0];
      extension = file.name.substring(file.name.lastIndexOf(".") + 1);

      console.log("File Name: " + file.name);
      console.log("File Size: " + file.size + " bytes");
      console.log("File Extension: " + extension);
    }
  </script>
</head>

<body>
  <form action="#" onsubmit="return false;">
    <input type="file" id="fileinput" />
    <input type="button" id="btnLoad" value="Load" onclick="showFileSize();" />
  </form>
</body>
</html>

<!-- Output -->

File Name: pic.jpg 
File Size: 1159168 bytes 
File Extension: jpg 
```

**⚝ [Try this example on CodeSandbox](https://codesandbox.io/s/js-cp-file-upload-fj17kh?file=/index.html)**

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Create a captcha using javascript?

<details open=""><summary><b>Answer<b></b></b></summary>

---

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Captcha Example</title>
  </head>
  <script>
    var captcha;

    function generateCaptcha() {
      captcha = Math.floor(Math.random() * 1000000);
      document.getElementById("captcha").value = captcha;
    }
  </script>

  <body onload="generateCaptcha()">
    <input type="text" id="captcha" disabled /><br /><br />
    <button onclick="generateCaptcha()">Refresh</button>
  </body>
</html>
```

**⚝ [Try this example on CodeSandbox](https://codesandbox.io/s/js-cp-captcha-mzyi2n?file=/index.html)**

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Create a stopwatch in javascript?

<details open=""><summary><b>Answer<b></b></b></summary>

---

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Stopwatch Example</title>
  </head>

  <body>
    <h4>Time: <span id="time">00:00:00</span><h4> <br /><br />
    <button id="start" onclick="start()">Start</button>
    <button id="stop" onclick="stop()">Stop</button>
    <button id="reset" onclick="reset()">Reset</button>

    <script type="text/javascript">
      const time = document.getElementById("time");
      const startBtn = document.getElementById("start");

      let timer;
      let seconds = 0;
      let hours = 0;
      let minutes = 0;
      let MINUTES_IN_HOUR = 60;
      let SECONDS_IN_MINUTE = 60;

      function updateTimer() {
        seconds++;
        if (seconds >= SECONDS_IN_MINUTE) {
          seconds = 0;
          minutes++;
          if (minutes >= MINUTES_IN_HOUR) {
            minutes = 0;
            hours++;
          }
        }

        time.textContent =
          (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
          ":" +
          (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds);

        // start timer again
        start();
      }

      function start() {
        timer = setTimeout(updateTimer, 1000);
        startBtn.disabled = true;
      }

      function stop() {
        clearTimeout(timer);
        startBtn.disabled = false;
      }

      function reset() {
        time.textContent = "00:00:00";
        seconds = 0;
        minutes = 0;
        hours = 0;
        startBtn.disabled = false;
      }

      window.start = start;
      window.reset = reset;
      window.stop = stop;
    </script>
  </body>
</html>
```

**⚝ [Try this example on CodeSandbox](https://codesandbox.io/s/js-cp-stopwatch-j6in1i?file=/index.html)**

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a program to reverse a string?

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function reverseString(str) {
  let stringRev = "";
  for (let i = str.length; i >= 0; i--) {
    stringRev = stringRev + str.charAt(i);
  }
  return stringRev;
}
console.log(reverseString("Hello"));
```

**⚝ [Try this example on CodeSandbox](https://codesandbox.io/s/js-cp-reversestring-sgm1ip?file=/src/index.js)**

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Create a Promise to accept car names as argument and send response once the argument matches with Maruti?

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
async function myCars(name) {
  const promise = new Promise((resolve, reject) => {
    name === "Maruti" ? resolve(name) : reject(name);
  });

  const result = await promise;
  console.log(result); // "resolved!"
}

myCars("Maruti");
```

**⚝ [Try this example on CodeSandbox](https://codesandbox.io/s/js-promise-1tmrnp?file=/src/index.js)**

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a function to merge two JavaScript Object dynamically?

**Example:**

```js
Input:

const person = {
  name: "Tanvi",
  age: 28
};

const address = {
  addressLine1: "Some Location x",
  addressLine2: "Some Location y",
  city: "Bangalore"
};

Output:

// Now person should have 5 properties 
name, age, addressLine1, addressLine2, city
```

<details open=""><summary><b>Answer<b></b></b></summary>

****Write merge function which will take two object and add all the own property of second object into first object.

**Method 1: Using ES6, Object.assign method:**

```js
const merge = (toObj, fromObj) => Object.assign(toObj, fromObj);

console.log(merge(person, address));
// {name: "Tanvi", age: 28, addressLine1: "Some Location x", addressLine2: "Some Location y", city: "Bangalore"}
```

**Method 2: Without using built-in function:**

```js
function mergeObject(toObj, fromObj) {
  // Make sure both of the parameter is an object
  if (typeof toObj === "object" && typeof fromObj === "object") {
    for (var pro in fromObj) {
      // Assign only own properties not inherited properties
      if (fromObj.hasOwnProperty(pro)) {
        toObj[pro] = fromObj[pro];
      }
    }
  } else {
    throw "Merge function can apply only on object";
  }
}

console.log(mergeObject(person, address));
// {name: "Tanvi", age: 28, addressLine1: "Some Location x", addressLine2: "Some Location y", city: "Bangalore"}
```

**⚝ [Try this example on CodeSandbox](https://codesandbox.io/s/js-shallow-vs-deep-copy-ik5b7h?file=/src/index.js)**

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time?

**Example:**

```js
Input:
array = [2, 5, 1, 4, 9, 6, 3, 7];
upperBound = 9;
lowerBound = 1;

Output:
8
```

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
/**
 *  Find theoretical sum of the consecutive numbers using a variation of Gauss Sum.
 *  Formula: [(Max * (Max + 1)) / 2] - [(Min * (Min - 1)) / 2];
 *  Max is the upper bound and Min is the lower bound
 */
function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
  
  var sumOfIntegers = 0;
  for (var i = 0; i < arrayOfIntegers.length; i++) {
    sumOfIntegers += arrayOfIntegers[i];
  }

  upperLimitSum = (upperBound * (upperBound + 1)) / 2;
  lowerLimitSum = (lowerBound * (lowerBound - 1)) / 2;

  theoreticalSum = upperLimitSum - lowerLimitSum;

  return theoreticalSum - sumOfIntegers;
}
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a function to remove duplicates from an array in JavaScript?

<details open=""><summary><b>Answer<b></b></b></summary>

******1. Using set():**

```js
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

let unique = [...new Set(names)];
console.log(unique); // 'John', 'Paul', 'George', 'Ringo'
```

**2. Using filter():**

```js
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

let x = (names) => names.filter((v,i) => names.indexOf(v) === i)
x(names); // 'John', 'Paul', 'George', 'Ringo'
```

**3. Using forEach():**

```js
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

function removeDups(names) {
  let unique = {};
  names.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}

removeDups(names); // // 'John', 'Paul', 'George', 'Ringo'
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Given a string, reverse each word in the sentence

**Example:**

```js
Input: "Hello World";
Output: "olleH dlroW";
```

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
const str = "Hello World";

let reverseEntireSentence = reverseBySeparator(str, "");

console.log(reverseBySeparator(reverseEntireSentence, " "));

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Implement enqueue and dequeue using only two stacks

Enqueue means to add an element, dequeue to remove an element.

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
var inputStack = []; // First stack
var outputStack = []; // Second stack

// For enqueue, just push the item into the first stack
function enqueue(stackInput, item) {
  return stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
  // Reverse the stack such that the first element of the output stack is the
  // last element of the input stack. After that, pop the top of the output to
  // get the first element that was ever pushed into the input stack
  if (stackOutput.length <= 0) {
    while(stackInput.length > 0) {
      var elementToOutput = stackInput.pop();
      stackOutput.push(elementToOutput);
    }
  }

  return stackOutput.pop();
}
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Use a closure to create a private counter?

**Example:**

You can create a function within an outer function (a closure) that allows you to update a private variable but the variable wouldn't be accessible from outside the function without the use of a helper function.

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function (increment) {
      _counter += increment;
    },
    retrieve: function () {
      return "The counter is currently at: " + _counter;
    },
  };
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.add(5);
c.add(9);

// now we can access the private variable in the following way
c.retrieve(); // => The counter is currently at: 14
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a function to divide an array into multiple equal parts?

**Example:**

```js
Input: [10, 20, 30, 40, 50];
Length: 3
Output: 
[10, 20, 30]
[40, 50]
```

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
const arr = [10, 20, 30, 40, 50];
let lenth = 3;

function split(len) {
  while (arr.length > 0) {
    console.log(arr.splice(0, len));
  }
}
split(lenth);
```

**⚝ [Try this example on CodeSandbox](https://codesandbox.io/s/split-array-5od3rz)**

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a random integers function to print integers with in a range?

**Example:**

```js
Input: 1, 100
Output: 63
```

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
/**
 * function to return a random number 
 * between min and max range
 */
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

randomInteger(1, 100); // returns a random integer from 1 to 100
```

**⚝ [Try this example on CodeSandbox](https://codesandbox.io/s/js-random-integers-yd1cy8?file=/src/index.js)**

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a function to convert decimal number to binary number?

**Example 01:**

```js
Input: 10
Output: 1010
```

**Example 02:**

```js
Input: 7
Output: 111
```

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function DecimalToBinary(number) {
  let bin = 0;
  let rem,
    i = 1;
  while (number !== 0) {
    rem = number % 2;
    number = parseInt(number / 2);
    bin = bin + rem * i;
    i = i * 10;
  }
  console.log(`Binary: ${bin}`);
}

DecimalToBinary(10);
```

**Example 02:** Convert Decimal to Binary Using `toString()`

```js
let val = 10;

console.log(val.toString(2)); // 1010  ==> Binary Conversion
console.log(val.toString(8)); // 12  ==> Octal Conversion
console.log(val.toString(16)); // A  ==> Hexadecimal Conversion
```

**⚝ [Try this example on CodeSandbox](https://codesandbox.io/s/js-decimal-to-binary-uhyi8t?file=/src/index.js)**

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a function make first letter of the string in an uppercase?

**Example:**

```js
Input: hello world
Output: Hello World
```

<details open=""><summary><b>Answer<b></b></b></summary>

****You can create a function which uses chain of string methods such as charAt, toUpperCase and slice methods to generate a string with first letter in uppercase.

```js
function capitalizeFirstLetter(string) {
  let arr = string.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}

console.log(capitalizeFirstLetter("hello world")); // Hello World
```

**⚝ [Try this example on CodeSandbox](https://codesandbox.io/s/js-capitalizefirstletter-dpjhky?file=/src/index.js)**

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a function which will test string as a literal and as an object?

**Example 01:**

```js
Input:  const ltrlStr = "Hi I am string literal";
Output: It is a string literal
```

**Example 02:**

```js
Input:  const objStr = new String("Hi I am string object");
Output: It is an object of string
```

<details open=""><summary><b>Answer<b></b></b></summary>

****The `typeof` operator can be use to test string literal and `instanceof` operator to test String object.

```js
function check(str) {
  if (str instanceof String) {
    return "It is an object of string";
  } else {
    if (typeof str === "string") {
      return "It is a string literal";
    } else {
      return "another type";
    }
  }
}

var ltrlStr = "Hi I am string literal";
var objStr = new String("Hi I am string object");

console.log(check(ltrlStr)); // It is a string literal
console.log(check(objStr)); // It is an object of string
```

**⚝ [Try this example on CodeSandbox](https://codesandbox.io/s/js-literal-vs-object-978dqw?file=/src/index.js)**

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. How do you reversing an array?

<details open=""><summary><b>Answer<b></b></b></summary>

****You can use reverse() method is used reverse the elements in an array. This method is useful to sort an array in descending order. Let us see the usage of reverse() method in an example,

```js
const fruits = ["Apple", "Banana", "Mango", "Orange"];

const reversed = fruits.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["Orange", "Mango", "Banana", "Apple"]
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. How do you find min and max value in an array?

**Example:**

```js
Input: [50, 20, 70, 60, 45, 30];
Output:
Min: 20
Max: 70
```

<details open=""><summary><b>Answer<b></b></b></summary>

****You can use `Math.min` and `Math.max` methods on array variable to find the minimum and maximum elements with in an array. Let us create two functions to find the min and max value with in an array,

```js
var marks = [50, 20, 70, 60, 45, 30];

function findMin(arr) {
  return Math.min.apply(null, arr);
}
function findMax(arr) {
  return Math.max.apply(null, arr);
}

console.log(findMin(marks));
console.log(findMax(marks));
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. How do you find min and max values without Math functions?

<details open=""><summary><b>Answer<b></b></b></summary>

****You can write functions which loops through an array comparing each value with the lowest value or highest value to find the min and max values. Let us create those functions to find min an max values,

```js
var marks = [50, 20, 70, 60, 45, 30];

function findMin(arr) {
  var length = arr.length;
  var min = Infinity;
  while (length--) {
    if (arr[length] < min) {
      min = arr[length];
    }
  }
  return min;
}

function findMax(arr) {
  var length = arr.length;
  var max = -Infinity;
  while (length--) {
    if (arr[length] > max) {
      max = arr[length];
    }
  }
  return max;
}

console.log(findMin(marks));
console.log(findMax(marks));
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Check if object is empty or not using javaScript?

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const obj = {};
console.log(isEmpty(obj)); 
```

**⚝ [Try this example on CodeSandbox](https://codesandbox.io/s/js-cp-isempty-b7n04b?file=/src/index.js)**

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a function to validate an email using regular expression?

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

console.log(validateEmail("pradeep.vwa@gmail.com")); // true
```

**⚝ [Try this example on CodeSandbox](https://codesandbox.io/s/js-cp-validateemail-wfopym?file=/src/index.js)**

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Use RegEx to test password strength in JavaScript?

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
let newPassword = "Pq5*@a{J";
const regularExpression = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

if (!regularExpression.test(newPassword)) {
  alert("Password should contain atleast one number and one special character !");
} else {
  console.log("PASS");
}

// Output
PASS
```

| RegEx          | Description                                                                                                             |
| -------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ^              | The password string will start this way                                                                                 |
| (?=.*[a-z])    | The string must contain at least 1 lowercase alphabetical character                                                     |
| (?=.*[A-Z])    | The string must contain at least 1 uppercase alphabetical character                                                     |
| (?=.*[0-9])    | The string must contain at least 1 numeric character                                                                    |
| (?=.[!@#$%^&]) | The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict |
| (?=.{8,})      | The string must be eight characters or longer                                                                           |

**⚝ [Try this example on CodeSandbox](https://codesandbox.io/s/js-cp-password-strength-cxl8xy)**

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a script that returns the number of occurrences of character given a string as input

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function countCharacters(str) {
  return str.replace(/ /g, "").toLowerCase().split("").reduce((p, c) => {
      if (c in p) {
        p[c]++;
      } else {
        p[c] = 1;
      }
      return p;
    }, {});
}
console.log(countCharacters("the brown fox jumps over the lazy dog"));
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a function that return the number of occurrences of a character in paragraph?

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function charCount(str, searchChar) {
  let count = 0;
  if (str) {
    let stripStr = str.replace(/ /g, "").toLowerCase(); //remove spaces and covert to lowercase
    for (let chr of stripStr) {
      if (chr === searchChar) {
        count++;
      }
    }
  }
  return count;
}
console.log(charCount("the brown fox jumps over the lazy dog", "o"));
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a recursive and non-recursive Factorial function?

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function recursiveFactorial(n) {
  if (n < 1) {
    throw Error("Value of N has to be greater then 1");
  }
  if (n === 1) {
    return 1;
  } else {
    return n * recursiveFactorial(n - 1);
  }
}

console.log(recursiveFactorial(5));

function factorial(n) {
  if (n < 1) {
    throw Error("Value of N has to be greater then 1");
  }
  if (n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5));
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a recursive and non recursive fibonacci-sequence?

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
// 1, 1, 2, 3, 5, 8, 13, 21, 34

function recursiveFibonacci(num) {
  if (num <= 1) {
    return 1;
  } else {
    return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
  }
}

console.log(recursiveFibonacci(8));

function fibonnaci(num) {
  let a = 1,
    b = 0,
    temp;
  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
}

console.log(fibonnaci(7));

// Memoization fibonnaci

function fibonnaci(num, memo = {}) {
  if (num in memo) {
    return memo[num];
  }
  if (num <= 1) {
    return 1;
  }
  return (memo[num] = fibonnaci(num - 1, memo) + fibonnaci(num - 2, memo));
}

console.log(fibonnaci(5)); // 8
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Generate a random Number between min and max?

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
// 5 to 7
let min = 5;
let max = 7;
console.log(min + Math.floor(Math.random() * (max - min + 1)));
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a function to reverse the number?

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function reverse(num) {
  let result = 0;
  while (num != 0) {
    result = result * 10;
    result = result + (num % 10);
    num = Math.floor(num / 10);
  }
  return result;
}

console.log(reverse(12345));
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. How to perform deep copy of object or clone of object?

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function deepExtend(out = {}) {
  for (let i = 1; i < arguments.length; i++) {
    let obj = arguments[i];
    if (obj == null)
      // skip undefined and null [check with double equal not triple]
      continue;

    obj = Object(obj);

    for (let key in obj) {
      // avoid shadow hasownproperty of parent
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (
          typeof obj[key] === "object" &&
          !Array.isArray(obj[key]) &&
          obj[key] != null
        )
          out[key] = deepExtend(out[key], obj[key]);
        else out[key] = obj[key];
      }
    }
  }
  return out;
}

//Alternative if there are no function
let cloneObj = JSON.parse(JSON.stringify(obj));

console.log(deepExtend({}, { a: 1, b: { c: 2, d: 3 } }, { e: 4, b: { f: 1 } }));
//output : { a: 1, b: {c: 2, d: 3, f: 1}, e: 4 }
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a function to reverse an array?

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
let a = [10, 20, 30, 40, 50];

//Approach 1:
console.log(a.reverse());

//Approach 2:
let reverse = a.reduce((prev, current) => {
  prev.unshift(current);
  return prev;
}, []);

console.log(reverse);
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Rotate 2D array

**Example:**

```js
Input:
[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12]


Output:
[1, 5, 9]
[2, 6, 10]
[3, 7, 11]
[4, 8, 12]
```

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
const transpose = (arr) => arr[0].map((col, i) => arr.map((row) => row[i]));

console.log(
  transpose([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Get Column from 2D Array

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
const getColumn = (arr, n) => arr.map((x) => x[n]);

const twoDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(getColumn(twoDimensionalArray, 1)); //Result = [2,5,8]
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Get top N from array

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function topN(arr, num) {
  let sorted = arr.sort((a, b) => a - b);
  return sorted.slice(sorted.length - num, sorted.length);
}

console.log(topN([1, 8, 3, 4, 5], 2)); // [5,8]
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Get query params from Object

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function getQueryParams(obj) {
  let parms = "";
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (parms.length > 0) {
        parms += "&";
      }
      parms += encodeURI(`${key}=${obj[key]}`);
    }
  }
  return parms;
}

console.log(
  getQueryParams({
    name: "Umesh",
    tel: "48289",
    add: "3333 emearld st",
  })
);
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Consecutive 1's in binary

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function consecutiveOne(num) {
  let binaryArray = num.toString(2);

  let maxOccurence = 0,
    occurence = 0;
  for (let val of binaryArray) {
    if (val === "1") {
      occurence += 1;
      maxOccurence = Math.max(maxOccurence, occurence);
    } else {
      occurence = 0;
    }
  }
  return maxOccurence;
}
//13 = 1101 = 2
//5 = 101 = 1
console.log(consecutiveOne(5)); //1
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Spiral travesal of matrix

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
var input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

var spiralTraversal = function (matriks) {
  let result = [];
  var goAround = function (matrix) {
    if (matrix.length === 0) {
      return;
    }

    // right
    result = result.concat(matrix.shift());

    // down
    for (var j = 0; j < matrix.length - 1; j++) {
      result.push(matrix[j].pop());
    }

    // bottom
    result = result.concat(matrix.pop().reverse());

    // up
    for (var k = matrix.length - 1; k > 0; k--) {
      result.push(matrix[k].shift());
    }

    return goAround(matrix);
  };

  goAround(matriks);

  return result;
};
console.log(spiralTraversal(input)); // [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Merge Sorted array and sort it.

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function mergeSortedArray(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))].sort((a, b) => a - b);
}

console.log(mergeSortedArray([1, 2, 3, 4, 5, 6], [0, 3, 4, 7])); // [0, 1, 2, 3, 4, 5, 6, 7]
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Anagram of words

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
const alphabetize = (word) => word.split("").sort().join("");

function groupAnagram(wordsArr) {
  return wordsArr.reduce((p, c) => {
    const sortedWord = alphabetize(c);
    if (sortedWord in p) {
      p[sortedWord].push(c);
    } else {
      p[sortedWord] = [c];
    }
    return p;
  }, {});
}

console.log(
  groupAnagram(["map", "art", "how", "rat", "tar", "who", "pam", "shoop"])
);
// result : {
//  amp: ["map", "pam"],
//  art: ["art", "rat", "tar"],
//  hoops: ["shoop"],
//  how: ["how", "who"]
// }
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Print the largest (maximum) hourglass sum found in 2d array.

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
// if arr 6 X 6 then iterate it till 4 X 4  [reduce by two]
// if arr 8 X 8 then iterate it till 6 X 6  [reduce by two]
function main(arr) {
  let maxScore = -999;
  let len = arr.length;
  for (let i = 0; i < len - 2; i++) {
    for (let j = 0; j < len - 2; j++) {
      let total =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];

      maxScore = Math.max(maxScore, total);
    }
  }
  console.log(maxScore);
}
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Transform array of object to array

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
let data = [
  { vid: "aaa", san: 12 },
  { vid: "aaa", san: 18 },
  { vid: "aaa", san: 2 },
  { vid: "bbb", san: 33 },
  { vid: "bbb", san: 44 },
  { vid: "aaa", san: 100 },
];

let newData = data.reduce((acc, item) => {
  acc[item.vid] = acc[item.vid] || { vid: item.vid, san: [] };
  acc[item.vid]["san"].push(item.san);
  return acc;
}, {});

console.log(Object.keys(newData).map((key) => newData[key]));

// Result
// [[object Object] {
//   san: [12, 18, 2, 100],
//   vid: "aaa"
// }, [object Object] {
//   san: [33, 44],
//   vid: "bbb"
// }]
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Create a private variable or private method in object

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
let obj = (function () {
  function getPrivateFunction() {
    console.log("this is private function");
  }
  let p = "You are accessing private variable";
  return {
    getPrivateProperty: () => {
      console.log(p);
    },
    callPrivateFunction: getPrivateFunction,
  };
})();

obj.getPrivateValue(); // You are accessing private variable
console.log("p" in obj); // false
obj.callPrivateFunction(); // this is private function
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Flatten only Array not objects

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function flatten(arr, result = []) {
  arr.forEach((val) => {
    if (Array.isArray(val)) {
      flatten(val, result);
    } else {
      result.push(val);
    }
  });
  return result;
}

let input = [1, { a: [2, [3]] }, 4, [5, [6]], [[7, ["hi"]], 8, 9], 10];
console.log(flatten(input)); // [1, { a: [2, [3]]}, 4, 5, 6, 7, "hi", 8, 9, 10]

function flattenIterative(out) {
  // iteratively
  let result = out;
  while (result.some(Array.isArray)) {
    result = [].concat.apply([], result);
  }
  return result;
}
var list1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];
console.log(flattenIterative(list1)); // [0, 1, 2, 3, 4, 5]

function flattenIterative1(current) {
  let result = [];
  while (current.length) {
    let firstValue = current.shift();
    if (Array.isArray(firstValue)) {
      current = firstValue.concat(current);
    } else {
      result.push(firstValue);
    }
  }
  return result;
}

let input = [1, { a: [2, [3]] }, 4, [5, [6]], [[7, ["hi"]], 8, 9], 10];
console.log(flattenIterative1(input));
var list2 = [0, [1, [2, [3, [4, [5]]]]]];
console.log(flattenIterative1(list2)); // [0, 1, 2, 3, 4, 5]
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Find max difference between two number in Array

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function maxDifference(arr) {
  let maxDiff = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let diff = Math.abs(arr[i] - arr[j]);
      maxDiff = Math.max(maxDiff, diff);
    }
  }
  return maxDiff;
}

console.log(maxDifference([1, 2, 4])); // [1 - 4 ] = 3
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. swap two number in ES6 [destructing]

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
let a = 10, b = 5;

[a, b] = [b, a];
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Panagram ? it means all the 26 letters of alphabet are there

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function panagram(input) {
  if (input == null) {
    // Check for null and undefined
    return false;
  }

  if (input.length < 26) {
    // if length is less then 26 then it is not
    return false;
  }
  input = input.replace(/ /g, "").toLowerCase().split("");
  let obj = input.reduce((prev, current) => {
    if (!(current in prev)) {
      prev[current] = current;
    }
    return prev;
  }, {});
  console.log(Object.keys(obj).length === 26 ? "panagram" : "not pangram");
}
processData("We promptly judged antique ivory buckles for the next prize"); // pangram
processData("We promptly judged antique ivory buckles for the prize"); // Not Pangram
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Given two identical DOM trees (not the same one), and a node from one of them find the node in the other one.

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function indexOf(arrLike, target) {
  return Array.prototype.indexOf.call(arrLike, target);
}

// Given a node and a tree, extract the nodes path
function getPath(root, target) {
  var current = target;
  var path = [];
  while (current !== root) {
    let parentNode = current.parentNode;
    path.unshift(indexOf(parentNode.childNodes, current));
    current = parentNode;
  }
  return path;
}

// Given a tree and a path, let\'s locate a node
function locateNodeFromPath(node, path) {
  return path.reduce((root, index) => root.childNodes[index], node);
}

const rootA = document.querySelector("#root-a");
const rootB = document.querySelector("#root-b");
const target = rootA.querySelector(".person__age");

console.log(locateNodeFromPath(rootB, getPath(rootA, target)));
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Convert a number into a Roman Numeral

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function romanize(num) {
  let lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "";
  for (let i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

console.log(romanize(3)); // III
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. check if parenthesis is malformed or not

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function matchParenthesis(str) {
  let obj = { "{": "}", "(": ")", "[": "]" };
  let result = [];
  for (let s of str) {
    if (s === "{" || s === "(" || s === "[") {
      // All opening brackets
      result.push(s);
    } else {
      if (result.length > 0) {
        let lastValue = result.pop(); //pop the last value and compare with key
        if (obj[lastValue] !== s) {
          // if it is not same then it is not formated properly
          return false;
        }
      } else {
        return false; // empty array, there is nothing to pop. so it is not formated properly
      }
    }
  }
  return result.length === 0;
}

console.log(matchParenthesis("}{{}}"), matchParenthesis("{{[]}}")); // false - true
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Create Custom Event Emitter class

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
class EventEmitter {
  constructor() {
    this.holder = {};
  }

  on(eventName, fn) {
    if (eventName && typeof fn === "function") {
      this.holder[eventName] = this.holder[eventName] || [];
      this.holder[eventName].push(fn);
    }
  }

  emit(eventName, ...args) {
    let eventColl = this.holder[eventName];
    if (eventColl) {
      eventColl.forEach((callback) => callback(args));
    }
  }
}

let e = new EventEmitter();
e.on("callme", function (args) {
  console.log(`you called me ${args}`);
});
e.on("callme", function (args) {
  console.log(`testing`);
});

e.emit("callme", ["a", "b"], { firstName: "umesh", lastName: "gohil" });
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Move all zero's to end

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
const moveZeroToEnd = (arr) => {
  for (let i = 0, j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // swap i and j
      }
      i++;
    }
  }
  return arr;
};

console.log(moveZeroToEnd([1, 8, 2, 0, 0, 0, 3, 4, 0, 5, 0])); // [1, 8, 2, 3, 4, 5, 0, 0, 0, 0, 0]
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Decode message in matrix [diagional down right, diagional up right]

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
const decodeMessage = (mat) => {
  // check if matrix is null or empty
  if (mat == null || mat.length === 0) {
    return "";
  }
  let x = mat.length - 1;
  let y = mat[0].length - 1;
  let message = "";
  let decode = (mat, i = 0, j = 0, direction = "DOWN") => {
    message += mat[i][j];

    if (i === x) {
      direction = "UP";
    }

    if (direction === "DOWN") {
      i++;
    } else {
      i--;
    }

    if (j === y) {
      return;
    }

    j++;
    decode(mat, i, j, direction);
  };
  decode(mat);
  return message;
};

let mat = [
  ["I", "B", "C", "A", "L", "K", "A"],
  ["D", "R", "F", "C", "A", "E", "A"],
  ["G", "H", "O", "E", "L", "A", "D"],
  ["G", "H", "O", "E", "L", "A", "D"],
];

console.log(decodeMessage(mat)); //IROELEA
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. find a pair in array, whose sum is equal to given number?

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
const hasPairSum = (arr, sum) => {
  if (arr == null && arr.length < 2) {
    return false;
  }

  let left = 0;
  let right = arr.length - 1;
  let result = false;

  while (left < right && !result) {
    let pairSum = arr[left] + arr[right];
    if (pairSum < sum) {
      left++;
    } else if (pairSum > sum) {
      right--;
    } else {
      result = true;
    }
  }
  return result;
};

console.log(hasPairSum([1, 2, 4, 5], 8)); // null
console.log(hasPairSum([1, 2, 4, 4], 8)); // [2,3]

const hasPairSum = (arr, sum) => {
  let difference = {};
  let hasPair = false;
  arr.forEach((item) => {
    let diff = sum - item;
    if (!difference[diff]) {
      difference[item] = true;
    } else {
      hasPair = true;
    }
  });
  return hasPair;
};
console.log(hasPairSum([6, 4, 3, 8], 8));

// NOTE: if array is not sorted then subtract the value with sum and store in difference
// then see if that value exist in difference then return true.
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Binary Search [Array should be sorted]

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function binarySearch(arr, val) {
  let startIndex = 0,
    stopIndex = arr.length - 1,
    middleIndex = Math.floor((startIndex + stopIndex) / 2);

  while (arr[middleIndex] !== val && startIndex < stopIndex) {
    if (val < arr[middleIndex]) {
      stopIndex = middleIndex - 1;
    } else if (val > arr[middleIndex]) {
      startIndex = middleIndex + 1;
    }
    middleIndex = Math.floor((startIndex + stopIndex) / 2);
  }

  return arr[middleIndex] === val ? middleIndex : -1;
}

console.log(binarySearch([-1, 10, 22, 35, 48, 56, 67], 22));
console.log(binarySearch([-1, 10, 22, 35, 48, 56, 67], 27));
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a function to generate Pascal triangle?

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
function pascalTriangle(n) {
  let last = [1],
    triangle = [last];
  for (let i = 0; i < n; i++) {
    const ls = [0].concat(last), //[0,1]           // [0,1,1]
      rs = last.concat([0]); //[1,0]           // [1,1,0]
    last = rs.map((r, i) => ls[i] + r); //[1, 1]          // [1,2,1]
    triangle = triangle.concat([last]); // [[1], [1,1]]   // [1], [1, 1], [1, 2, 1]
  }
  return triangle;
}

console.log(pascalTriangle(2));
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Remove array element based on object property?

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
var myArray = [
  { field: "id", operator: "eq" },
  { field: "cStatus", operator: "eq" },
  { field: "money", operator: "eq" },
];

myArray = myArray.filter(function (obj) {
  return obj.field !== "money";
});

Console.log(myArray);
```

Output

```js
myArray = [
    {field: "id", operator: "eq"}
    {field: "cStatus", operator: "eq"}
]
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a program to get the value of an object from a specific path?

**Example:**

```js
Input:

const data = {
    user: {
        username: 'Navin Chauhan',
        password: 'Secret'
    },
    rapot: {
        title: 'Storage usage raport',
        goal: 'Remove unused data.'
    }
};

Output:
console.log(getObjectProperty(data, 'user.username')); // Navin Chauhan
```

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
const getObjectProperty = (object, path) => {
  const parts = path.split('.');

  for (let i = 0; i < parts.length; ++i) {
      const key = parts[i];
      object = object[key];
    }
  return object;
};
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Find the unique number in given array?

**Example:**

```js
Input: [1, 1, 3, 2, 3]
Output: 2
```

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
const arr = [1, 1, 3, 2, 3];
const count = {};

for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count); // {1: 2, 2: 1, 3: 2}
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JS code?

```js
const arr = [10, 20, 30];
arr.push(40);  
console.log(arr)

const arr1 = [10, 20, 30];
arr1 = []; 
console.log(arr1) 

const arr2 = [10, 20, 30];
arr2[2] = 50; 
console.log(arr2) 
```

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
[10, 20, 30, 40]
Error
[10, 20, 50]
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JS code?

```js
var obj = {name: "neha", getName: function() {console.log(this.name);}}

var getName = obj.getName;
var obj2 = {name: "naina", getName};
obj.getName();
obj2.getName();
```

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
Neha
Naina
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JS code?

```js
const person = {name: "neha"};
const array = [person, person, person];

array[1].name = "";
console.log(array[0].name);
```

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
undefined
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JS code?

```js
var a = 1;

function b() {
  a = 10;
  return;

  function a() {}
}

b();
console.log(a);
```

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
1
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following NodeJS code?

```js
console.log('A');

setImmediate(()=>{console.log('setImmediate')});

process.nextTick(()=>{console.log('nextTick')});

setTimeout(()=>{
  console.log('setTimeout');
},0);

console.log('C');
```

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
A
C
nextTick
setTimeout
setImmediate
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following NodeJS code?

```js
console.log(1);

setTimeout(() => { console.log("setTimeout")}, 0);

console.log(2);

new Promise((resolve, reject) => {
   setTimeout(() => {
     console.log("Promise");
     resolve("done")}, 0);
});

console.log(3);
```

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
1
2
3
setTimeout
Promise
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
async function something() {
  console.log("1");

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2");
      resolve("done!");
    }, 100);
  });

  await promise;

  setTimeout(() => {
    console.log("3");
  }, 100);
  console.log("4");
}

something();
console.log("5");
```

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
1
5
2
4
3
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
console.log(+"Hello"); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
var result;
for (var i = 5; i > 0; i--) {
  result = result + i;
}
console.log(result); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
var a = 1.2;
console.log(typeof a); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
var x = 10;
if (x) {
  let x = 4;
}
console.log(x); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
console.log(0.1 + 0.2 == 0.3); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
console.log(1 + -"1" + 2); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
(function (x) {
  return (function (y) {
    console.log(x);
  })(10);
})(20); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
var num = 20;
var getNumber = function () {
  console.log(num);
  var num = 10;
};
getNumber(); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
function f1() {
  num = 10;
}
f1();
console.log("window.num: " + window.num); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
console.log("(null + undefined): " + (null + undefined)); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
(function () {
  var a = (b = 3);
})();

console.log("value of a : " + a); 
console.log("value of b : " + b); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
var k = 1;
if (1) {
  eval(function foo() {});
  k += typeof foo;
}
console.log(k); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
var k = 1;
if (1) {
  function foo() {}
  k += typeof foo;
}
console.log(k); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
console.log("(-1 / 0): " + -1 / 0); 
console.log("(1 / 0): " + 1 / 0); 
console.log("(0 / 0): " + 0 / 0); 
console.log("(0 / 1): " + 0 / 1); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
var a = 4;
var b = "5";
var c = 6;

console.log("(a + b): " + (a + b)); 
console.log("(a - b): " + (a - b)); 
console.log("(a * b): " + a * b); 
console.log("(a / b): " + a / b); 
console.log("(a % b): " + (a % b)); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
console.log("MAX : " + Math.max(10, 2, NaN)); 
console.log("MAX : " + Math.max()); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
(function () {
  var a = (b = 3);
})();

console.log("a defined? " + (typeof a !== "undefined")); 
console.log("b defined? " + (typeof b !== "undefined")); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo); 
    console.log("outer func:  self.foo = " + self.foo); 
    (function () {
      console.log("inner func:  this.foo = " + this.foo); 
      console.log("inner func:  self.foo = " + self.foo); 
    })();
  },
};
myObject.func();
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
console.log(0.1 + 0.2); 
console.log(0.1 + 0.2 == 0.3); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
})();
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
var arr1 = "john".split("");
var arr2 = arr1.reverse();
var arr3 = "jones".split("");

arr2.push(arr3);

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); 
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
console.log(1 + "2" + "2"); 
console.log(1 + +"2" + "2"); 
console.log(1 + -"1" + "2"); 
console.log(+"1" + "1" + "2"); 
console.log("A" - "B" + "2"); 
console.log("A" - "B" + 2); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
for (var i = 0; i < 5; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(x);
    }, x * 1000);
  })(i);
}
//Output:- 0, 1, 2, 3, 4
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
console.log("0 || 1 = " + (0 || 1)); 
console.log("1 || 2 = " + (1 || 2)); 
console.log("0 && 1 = " + (0 && 1)); 
console.log("1 && 2 = " + (1 && 2)); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
console.log(false == "0"); 
console.log(false === "0");
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
var a = {},
  b = { key: "b" },
  c = { key: "c" };

a[b] = 123;
a[c] = 456;
console.log(a[b]); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(10)
);
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
(function (x) {
  return (function (y) {
    console.log(x); //1
  })(2);
})(1);
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
var hero = {
  _name: "John Doe",
  getSecretIdentity: function () {
    return this._name;
  },
};
var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity()); 
console.log(hero.getSecretIdentity()); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  },
};

obj.method(fn, 1);
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
(function () {
  try {
    throw new Error();
  } catch (x) {
    var x = 1,
      y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
var x = 21;
var girl = function () {
  console.log(x); 
  var x = 20;
};
girl();
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
console.log(1 < 2 < 3); 
console.log(3 > 2 > 1); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
console.log(typeof typeof 1); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    var b = 3;
    console.log(b);
  }
  inner();
}
outer();
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
x = 10;
console.log(x);
var x; 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
const arr = [1, 2];
arr.push(3); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
var o = new F();
o.constructor === F;
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
let sum = (a, b) => {
  a + b;
};
console.log(sum(10, 20)); 
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Predict the output of the following JavaScript code?

```js
var arr = ["javascript", "typescript", "es6"];

var searchValue = (value) => {
  return arr.filter((item) => {
    return item.indexOf(value) > -1;
  });
};

console.log(searchValue("script"));
```

**[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. Write a program that prints the numbers from 1 to 15. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”?

**Example:**

```js
Input: 15
Output: 
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```

<details open=""><summary><b>Answer<b></b></b></summary>

******Solution - 01:**

```js
for (var i = 1; i <= 15; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}
```

**Solution - 02:**

```js
for (var i = 1; i <= 15; i++) {
  var f = i % 3 == 0,
    b = i % 5 == 0;
  console.log(f ? (b ? "FizzBuzz" : "Fizz") : b ? "Buzz" : i);
}
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What will be the output of the following code?

```js
var output = (function (x) {
  delete x;
  return x;
})(0);

console.log(output);
```

<details open=""><summary><b>Answer<b></b></b></summary>

****The code above will output `0` as output. `delete` operator is used to delete a property from an object. Here `x` is not an object it's  **local variable** . `delete` operator doesn't affect local variables.

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What will be the output of the following code?

```js
var x = 1;
var output = (function () {
  delete x;
  return x;
})();

console.log(output);
```

<details open=""><summary><b>Answer<b></b></b></summary>

****The code above will output `1` as output. `delete` operator is used to delete a property from an object. Here `x` is not an object it's **global variable** of type `number`.

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What will be the output of the following code?

```js
var x = { foo: 1 };
var output = (function () {
  delete x.foo;
  return x.foo;
})();

console.log(output);
```

<details><summary><b>Answer<b></b></b></summary>

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What will be the output of the following code?

```js
var Employee = {
  company: "xyz",
};
var emp1 = Object.create(Employee);
delete emp1.company;
console.log(emp1.company);
```

<details open=""><summary><b>Answer<b></b></b></summary>

****The code above will output `xyz` as output. Here `emp1` object got company as **prototype** property. delete operator doesn't delete prototype property.

`emp1` object doesn't have **company** as its own property. you can test it `console.log(emp1.hasOwnProperty('company')); //output : false` However, we can delete company property directly from `Employee` object using `delete Employee.company` or we can also delete from `emp1` object using `__proto__` property `delete emp1.__proto__.company`.

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What will be the output of the following code?

```js
var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];
console.log(trees.length);
```

<details open=""><summary><b>Answer<b></b></b></summary>

****The code above will output `5` as output. When we used `delete` operator for deleting an array element then, the array length is not affected by this. This holds even if you deleted all elements of an array using `delete` operator.

So when delete operator removes an array element that deleted element is no longer present in the array. In place of value at deleted index `undefined x 1` in **chrome** and `undefined` is placed at the index. If you do `console.log(trees)` output `["xyz", "xxxx", "test", undefined × 1, "apple"]` in Chrome and in Firefox `["xyz", "xxxx", "test", undefined, "apple"]`.

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What will be the output of the following code?

```js
var bar = true;
console.log(bar + 0);
console.log(bar + "xyz");
console.log(bar + true);
console.log(bar + false);
```

<details open=""><summary><b>Answer<b></b></b></summary>

****The code above will output `1, "truexyz", 2, 1` as output. Here's a general guideline for the plus operator:

* Number + Number -> Addition
* Boolean + Number -> Addition
* Boolean + Boolean -> Addition
* Number + String -> Concatenation
* String + Boolean -> Concatenation
* String + String -> Concatenation

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What will be the output of the following code?

```js
var z = 1,
  y = (z = typeof y);
console.log(y);
```

<details open=""><summary><b>Answer<b></b></b></summary>

****The code above will print string `"undefined"` as output. According to associativity rule operator with the same precedence are processed based on their associativity property of operator. Here associativity of the assignment operator is `Right to Left` so first `typeof y` will evaluate first which is string `"undefined"` and assigned to `z` and then `y` would be assigned the value of z. The overall sequence will look like that:

```js
var z;
z = 1;
var y;
z = typeof y;
y = z;
```

---

</details>

****## Q. What will be the output of the following code?

```js
// NFE (Named Function Expression)
var foo = function bar() {
  return 12;
};
typeof bar();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****The output will be `Reference Error`. To fix the bug we can try to rewrite the code a little bit:

**Sample 1:**

```js
var bar = function () {
  return 12;
};
typeof bar();
```

or

**Sample 2:**

```js
function bar() {
  return 12;
}
typeof bar();
```

The function definition can have only one reference variable as a function name, In **sample 1** `bar` is reference variable which is pointing to `anonymous function` and in **sample 2** we have function statement and `bar` is the function name.

```js
var foo = function bar() {
  // foo is visible here
  // bar is visible here
  console.log(typeof bar()); // Works here :)
};
// foo is visible here
// bar is undefined here
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What is the output of the following?

```js
bar();
(function abc() {
  console.log("something");
})();
function bar() {
  console.log("bar got called");
}
```

<details open=""><summary><b>Answer<b></b></b></summary>

****The output will be :

```js
bar got called
something
```

Since the function is called first and defined during parse time the JS engine will try to find any possible parse time definitions and start the execution loop which will mean function is called first even if the definition is post another function.

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What will be the output of the following code?

```js
var salary = "1000$";

(function () {
  console.log("Original salary was " + salary);

  var salary = "5000$";

  console.log("My New Salary " + salary);
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****The code above will output: `undefined, 5000$` because of hoisting. In the code presented above, you might be expecting `salary` to retain it values from outer scope until the point that `salary` was re-declared in the inner scope. But due to `hoisting` salary value was `undefined` instead. To understand it better have a look of the following code, here `salary` variable is hoisted and declared at the top in function scope. When we print its value using `console.log` the result is `undefined`. Afterwards the variable is redeclared and the new value `"5000$"` is assigned to it.

```js
var salary = "1000$";

(function () {
  var salary = undefined;
  console.log("Original salary was " + salary);

  salary = "5000$";

  console.log("My New Salary " + salary);
})();
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of the following code?

```js
function User(name) {
  this.name = name || "JsGeeks";
}

var person = (new User("xyz")["location"] = "USA");
console.log(person);
```

<details open=""><summary><b>Answer<b></b></b></summary>

****The output of above code would be `"USA"`. Here `new User("xyz")` creates a brand new object and created property `location` on that and `USA` has been assigned to object property location and that has been referenced by the person.

Let say `new User("xyz")` created a object called `foo`. The value `"USA"` will be assigned to `foo["location"]`, but according to [ECMAScript Specification](http://www.ecma-international.org/ecma-262/6.0/#sec-assignment-operators-runtime-semantics-evaluation) , pt 12.14.4 the assignment will itself return the rightmost value: in our case it's `"USA"`. Then it will be assigned to person.

To better understand What is going on here, try to execute this code in console, line by line:

```js
function User(name) {
  this.name = name || "JS";
}

var person;
var foo = new User("xyz");
foo["location"] = "USA";
// the console will show you that the result of this is "USA"
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
var strA = "hi there";
var strB = strA;
strB = "bye there!";
console.log(strA);
```

<details open=""><summary><b>Answer<b></b></b></summary>

****The output will `'hi there'` because we're dealing with strings here. Strings are passed by value, that is, copied.

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
var objA = { prop1: 42 };
var objB = objA;
objB.prop1 = 90;
console.log(objA);
```

<details open=""><summary><b>Answer<b></b></b></summary>

****The output will `{prop1: 90}` because we're dealing with objects here. Objects are passed by reference, that is, `objA` and `objB` point to the same object in memory.

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
var objA = { prop1: 42 };
var objB = objA;
objB = {};
console.log(objA);
```

<details open=""><summary><b>Answer<b></b></b></summary>

****The output will `{prop1: 42}`.

When we assign `objA` to `objB`, the `objB` variable will point to the same object as the `objB` variable.

However, when we reassign `objB` to an empty object, we simply change where `objB` variable references to. This doesn't affect where `objA` variable references to.

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
var arrA = [0, 1, 2, 3, 4, 5];
var arrB = arrA;
arrB[0] = 42;
console.log(arrA);
```

<details open=""><summary><b>Answer<b></b></b></summary>

****The output will be `[42,1,2,3,4,5]`.

Arrays are object in JavaScript and they are passed and assigned by reference. This is why both `arrA` and `arrB` point to the same array `[0,1,2,3,4,5]`. That's why changing the first element of the `arrB` will also modify `arrA`: it's the same array in the memory.

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
var arrA = [0, 1, 2, 3, 4, 5];
var arrB = arrA.slice();
arrB[0] = 42;
console.log(arrA);
```

<details open=""><summary><b>Answer<b></b></b></summary>

****The output will be `[0,1,2,3,4,5]`.

The `slice` function copies all the elements of the array returning the new array. That's why `arrA` and `arrB` reference two completely different arrays.

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
var arrA = [
  { prop1: "value of array A!!" },
  { someProp: "also value of array A!" },
  3,
  4,
  5,
];
var arrB = arrA;
arrB[0].prop1 = 42;
console.log(arrA);
```

<details open=""><summary><b>Answer<b></b></b></summary>

****The output will be `[{prop1: 42}, {someProp: "also value of array A!"}, 3,4,5]`.

Arrays are object in JS, so both varaibles arrA and arrB point to the same array. Changing `arrB[0]` is the same as changing `arrA[0]`

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
var arrA = [
  { prop1: "value of array A!!" },
  { someProp: "also value of array A!" },
  3,
  4,
  5,
];
var arrB = arrA.slice();
arrB[0].prop1 = 42;
arrB[3] = 20;
console.log(arrA);
```

<details open=""><summary><b>Answer<b></b></b></summary>

****The output will be `[{prop1: 42}, {someProp: "also value of array A!"}, 3,4,5]`.

The `slice` function copies all the elements of the array returning the new array. However, it doesn't do deep copying. Instead it does shallow copying. You can imagine slice implemented like this:

```js
function slice(arr) {
  var result = [];
  for (i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}
```

Look at the line with `result.push(arr[i])`. If `arr[i]` happens to be a number or string, it will be passed by value, in other words, copied. If `arr[i]` is an object, it will be passed by reference.

In case of our array `arr[0]` is an object `{prop1: "value of array A!!"}`. Only the reference to this object will be copied. This effectively means that arrays arrA and arrB share first two elements.

This is why changing the property of `arrB[0]` in `arrB` will also change the `arrA[0]`.

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. console.log(employeeId);

<details open=""><summary><b>Answer<b></b></b></summary>

****ReferenceError: employeeId is not defined

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
console.log(employeeId);
var employeeId = "19000";
```

<details open=""><summary><b>Answer<b></b></b></summary>

****undefined

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
var employeeId = "1234abe";
(function () {
  console.log(employeeId);
  var employeeId = "122345";
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****undefined

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
var employeeId = "1234abe";
(function () {
  console.log(employeeId);
  var employeeId = "122345";
  (function () {
    var employeeId = "abc1234";
  })();
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

---

```js
undefined
```

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  console.log(typeof displayFunc);
  var displayFunc = function () {
    console.log("Hi I am inside displayFunc");
  };
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****undefined

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
var employeeId = "abc123";
function foo() {
  employeeId = "123bcd";
  return;
}
foo();
console.log(employeeId);
```

<details open=""><summary><b>Answer<b></b></b></summary>

****'123bcd'

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
var employeeId = "abc123";

function foo() {
  employeeId = "123bcd";
  return;

  function employeeId() {}
}
foo();
console.log(employeeId);
```

<details open=""><summary><b>Answer<b></b></b></summary>

****'abc123'

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
var employeeId = "abc123";

function foo() {
  employeeId();
  return;

  function employeeId() {
    console.log(typeof employeeId);
  }
}
foo();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****'function'

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
function foo() {
  employeeId();
  var product = "Car";
  return;

  function employeeId() {
    console.log(product);
  }
}
foo();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****1. undefined

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function foo() {
  bar();

  function bar() {
    abc();
    console.log(typeof abc);
  }

  function abc() {
    console.log(typeof bar);
  }
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****function function

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  "use strict";

  var person = {
    name: "John",
  };
  person.salary = "10000$";
  person["country"] = "USA";

  Object.defineProperty(person, "phoneNo", {
    value: "8888888888",
    enumerable: true,
  });

  console.log(Object.keys(person));
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****["name", "salary", "country", "phoneNo"]

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  "use strict";

  var person = {
    name: "John",
  };
  person.salary = "10000$";
  person["country"] = "USA";

  Object.defineProperty(person, "phoneNo", {
    value: "8888888888",
    enumerable: false,
  });

  console.log(Object.keys(person));
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****["name", "salary", "country"]

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var objA = {
    foo: "foo",
    bar: "bar",
  };
  var objB = {
    foo: "foo",
    bar: "bar",
  };
  console.log(objA == objB);
  console.log(objA === objB);
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****false false

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var objA = new Object({ foo: "foo" });
  var objB = new Object({ foo: "foo" });
  console.log(objA == objB);
  console.log(objA === objB);
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****false false

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = Object.create({
    foo: "foo",
  });
  console.log(objA == objB);
  console.log(objA === objB);
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****false false

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = Object.create(objA);
  console.log(objA == objB);
  console.log(objA === objB);
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****false false

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = Object.create(objA);
  console.log(objA.toString() == objB.toString());
  console.log(objA.toString() === objB.toString());
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****true true

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = objA;
  console.log(objA == objB);
  console.log(objA === objB);
  console.log(objA.toString() == objB.toString());
  console.log(objA.toString() === objB.toString());
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****true true true true

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = objA;
  objB.foo = "bar";
  console.log(objA.foo);
  console.log(objB.foo);
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****bar bar

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = objA;
  objB.foo = "bar";

  delete objA.foo;
  console.log(objA.foo);
  console.log(objB.foo);
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****foo foo

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var objA = {
    foo: "foo",
  };
  var objB = objA;
  objB.foo = "bar";

  delete objA.foo;
  console.log(objA.foo);
  console.log(objB.foo);
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****undefined undefined

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var array = new Array("100");
  console.log(array);
  console.log(array.length);
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****["100"] 1

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var array1 = [];
  var array2 = new Array(100);
  var array3 = new Array(["1", 2, "3", 4, 5.6]);
  console.log(array1);
  console.log(array2);
  console.log(array3);
  console.log(array3.length);
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****[] [] [Array[5]] 1

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var array = new Array("a", "b", "c", "d", "e");
  array[10] = "f";
  delete array[10];
  console.log(array.length);
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****11

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var animal = ["cow", "horse"];
  animal.push("cat");
  animal.push("dog", "rat", "goat");
  console.log(animal.length);
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****6

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var animal = ["cow", "horse"];
  animal.push("cat");
  animal.unshift("dog", "rat", "goat");
  console.log(animal);
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****[ 'dog', 'rat', 'goat', 'cow', 'horse', 'cat' ]

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var array = [1, 2, 3, 4, 5];
  console.log(array.indexOf(2));
  console.log([{ name: "John" }, { name: "John" }].indexOf({ name: "John" }));
  console.log([[1], [2], [3], [4]].indexOf([3]));
  console.log("abcdefgh".indexOf("e"));
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****1. 1 -1 -1 4

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6];
  console.log(array.indexOf(2));
  console.log(array.indexOf(2, 3));
  console.log(array.indexOf(2, 10));
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****1 6 -1

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var numbers = [2, 3, 4, 8, 9, 11, 13, 12, 16];
  var even = numbers.filter(function (element, index) {
    return element % 2 === 0;
  });
  console.log(even);

  var containsDivisibleby3 = numbers.some(function (element, index) {
    return element % 3 === 0;
  });

  console.log(containsDivisibleby3);
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****[ 2, 4, 8, 12, 16 ] true

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var containers = [2, 0, false, "", "12", true];
  var containers = containers.filter(Boolean);
  console.log(containers);
  var containers = containers.filter(Number);
  console.log(containers);
  var containers = containers.filter(String);
  console.log(containers);
  var containers = containers.filter(Object);
  console.log(containers);
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****[ 2, '12', true ] [ 2, '12', true ] [ 2, '12', true ] [ 2, '12', true ]

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var list = ["foo", "bar", "john", "ritz"];
  console.log(list.slice(1));
  console.log(list.slice(1, 3));
  console.log(list.slice());
  console.log(list.slice(2, 2));
  console.log(list);
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****[ 'bar', 'john', 'ritz' ] [ 'bar', 'john' ] [ 'foo', 'bar', 'john', 'ritz' ] [] [ 'foo', 'bar', 'john', 'ritz' ]

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var list = ["foo", "bar", "john"];
  console.log(list.splice(1));
  console.log(list.splice(1, 2));
  console.log(list);
})();
```

<details open=""><summary><b>Answer<b></b></b></summary>

****[ 'bar', 'john' ] [] [ 'foo' ]

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
(function () {
  var arrayNumb = [2, 8, 15, 16, 23, 42];
  arrayNumb.sort();
  console.log(arrayNumb);
})();
```

<details><summary><b>Answer<b></b></b></summary>

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
function funcA() {
  console.log("funcA ", this);
  (function innerFuncA1() {
    console.log("innerFunc1", this);
    (function innerFunA11() {
      console.log("innerFunA11", this);
    })();
  })();
}

console.log(funcA());
```

<details open=""><summary><b>Answer<b></b></b></summary>

****funcA
innerFunc1 innerFunA11

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
var obj = {
  message: "Hello",
  innerMessage: !(function () {
    console.log(this.message);
  })(),
};

console.log(obj.innerMessage);
```

<details open=""><summary><b>Answer<b></b></b></summary>

****undefined true

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
var obj = {
  message: "Hello",
  innerMessage: function () {
    return this.message;
  },
};

console.log(obj.innerMessage());
```

<details open=""><summary><b>Answer<b></b></b></summary>

****Hello

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
var obj = {
  message: "Hello",
  innerMessage: function () {
    (function () {
      console.log(this.message);
    })();
  },
};
console.log(obj.innerMessage());
```

<details open=""><summary><b>Answer<b></b></b></summary>

****undefined

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
var obj = {
  message: "Hello",
  innerMessage: function () {
    var self = this;
    (function () {
      console.log(self.message);
    })();
  },
};
console.log(obj.innerMessage());
```

<details open=""><summary><b>Answer<b></b></b></summary>

****'Hello'

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
function myFunc() {
  console.log(this.message);
}
myFunc.message = "Hi John";

console.log(myFunc());
```

<details open=""><summary><b>Answer<b></b></b></summary>

****undefined

---

</details>

******[↥ back to top](https://github.com/learning-zone/JavaScript-Coding-Practice#javascript-coding-practice)**

## Q. What would be the output of following code?

```js
function myFunc() {
  console.log(myFunc.message);
}
myFunc.message = "Hi John";

console.log(myFunc());
```

<details open=""><summary><b>Answer<b></b></b></summary>

****'Hi John'

---

</details>

---
