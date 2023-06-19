/**
 * function -> 함수
 */

function calculate(index) {
    console.log((index * 10 / 2 % 3).toString());
}

calculate(3);

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다.
 * 
 * 실제 입력하는 값은 Argument라고 한다.
 */

function multiply(x, y) {
    console.log(x * y);
}

multiply(2, 3);

function multiply(x, y = 10) {
    console.log(x * y);
}

multiply(2);

/**
 * return 받기
 */
function multiply(x, y) {
    return x * y;
}
const result1 = multiply(2, 5);
console.log(result1);
const result2 = multiply(3, 6);
console.log(result2);

/**
 * Arrow 함수
 */

const multiply2 = (x, y) => {
    return x * y;
}
console.log(multiply2(3, 4));

const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));

const multiplyThree = (x, y) => {
    return x * y;
}
console.log(multiplyThree(4, 5));

const multiplyAll = (...arguments) => {
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}
console.log(multiplyAll(3, 4, 5 ,6))

console.log(typeof multiply);
console.log(multiply instanceof Object);