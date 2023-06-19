/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

let test = age + '';
console.log(typeof test, test);

// 숫자 타입으로 변환
console.log(parseInt('0'))

/**
 * Boolean 타입으로의 변환
 */

console.log(!'x');
console.log(!!'false');
console.log(!!false);
// object는 boolean값으로 바꿨을 때 무조건 true
console.log(!!{});

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 */