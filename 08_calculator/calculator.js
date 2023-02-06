const add = function(a, b) {
  let value = a + b;
  return value;
};

const subtract = function(a, b) {
  let value = a - b;
  return value;
};

const sum = function(nums) {
  let value = 0;
  for (let i = 0; i < nums.length; i++) {
    value += nums[i];
  }
  return value;
};

const multiply = function(nums) {
  let value = nums[0];
  for (let i = 1; i < nums.length; i++) {
    value *= nums[i];
  }
  return value;
};

const power = function(a, b) {
  value = a;
	for (let i = 1; i < b; i++) {
    value *= a;
  }
  return value;
};

const factorial = function(num) {
  let value = 1;
	if (num <= 1) {
    return value;
  }
  
  else {
    value = num;
    for (let i = 1; i < num; i++) {
      value *= (num - i); 
    }
    return value;
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
