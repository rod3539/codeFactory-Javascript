/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과 한개의 오브젝트 타입이 있다.
 * 
 * 1) Number
 * 2) String
 * 3) Boolean
 * 4) undefined
 * 5) null
 * 6) Symbol
 * 
 * 7) Object -> Function, Array, Object
 */

// Number
const age = 32;
const temperature = -10;
console.log(typeof age);

// Underined
// 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값이다.
let noInit;
console.log(noInit);
console.log(typeof noInit);

// null
// 개발자가 명시적으로 없는 값으로 초기화 할 때 null 사용
let init = null;
console.log(init);
console.log(typeof init);

// Symbol
// 유일무이한 값을 생성할 때 사용
// Symbol 함수를 호출해서 사용해야 한다.
const test1 = '1';
const test2 = '2';
console.log(test1 === test2);
const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);

/**
 * Object 타입
 * 
 * Map
 * 키와 벨류의 쌍으로 이루어져 있다.
 * key:value
 */

const dictionary = {
    red : '빨간색',
    orange : '주황색',
    yellow : '노랑색'
};
console.log(dictionary);
console.log(dictionary.red);

// Array 타입
const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영'
];
console.log(iveMembersArray);