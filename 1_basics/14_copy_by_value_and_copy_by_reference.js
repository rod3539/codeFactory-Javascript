/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value이다.
 * 2) 객체는 copy by reference이다.
 */

let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.';
console.log(original);
console.log(clone);

let originalObj = {
    name: '안유진',
    group: '아이브'
};
let cloneObj = originalObj;
console.log(originalObj);
console.log(cloneObj);

originalObj['group'] = '영훈';
console.log(cloneObj);

/**
 * spread operator를 쓰면 copy by reference가 된다.
 */
const yujin3 = {
    name: '안유진',
    group: '아이브'
};
const yuJin4 = {
    ...yujin3
};
console.log(yuJin4 === yujin3);
const yuJin5 = {
    ...yujin3,
    year: 2003
};
console.log(yuJin5)
const yuJin6 = {
    name: '영훈',
    ...yujin3
}
console.log(yuJin6)