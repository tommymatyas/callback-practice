const arr = ["one", "two", "three", "four", "five"];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element, i);
}

for (const element of arr) {
  console.log(element);
}

// callback

//           "one"    0    ["one", "two", "three", "four", "five"];
arr.forEach((value, index) => {
  console.log(value, index);
});

// rahuzva az egeret a callbackre, megmutatja melyik parameter hol van

/* function myFunc(param1, param2) {
  return param1 - param2;
}

console.log(myFunc(10, 2));
console.log(myFunc(2, 10));
 */

function doSomething(value, something) {
  if (typeof something !== "function")
    return console.log("függvényt írj be hülyegyerek");

  const reverseValue = value.split("").reverse().join("");
  return something(reverseValue);
}

function doubleTheString(string) {
  return string + string;
}

console.log(doSomething("kismacska", doubleTheString));
console.log(
  doSomething("kismacska", (string) => {
    return string + string;
  })
);
