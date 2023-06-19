/**
 * Array Functions
 */
let iveMembers =[
    '안유진',
    '레이',
    '가을',
    '장원영',
    '리즈',
    '이서'
]

/**
 * 원래 array를 변경시키는 함수
 * 잘 사용하지 않는다.
 */

// push()
console.log(iveMembers.push('영훈')); // array의 길의 출력
console.log(iveMembers)

// pop() => 끝 값 삭제
console.log(iveMembers.pop());
console.log(iveMembers);

// shift() => 첫 값 삭제
console.log(iveMembers.shift());
console.log(iveMembers);

// unshift() => 첫 번째에 값 추가
console.log(iveMembers.unshift('안유진'))
console.log(iveMembers);

// splice(처음값, 자르고 싶은 길이)
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

/**
 * 새로운 값을 반환하는 함수들
 * 원래 array 변경 X
 */
iveMembers =[
    '안유진',
    '레이',
    '가을',
    '장원영',
    '리즈',
    '이서'
];

// concat() => 새로운 array 만들어서 '영훈 추가'
console.log(iveMembers.concat('영훈'));

// slice(처음 index값, 끝 index값)
console.log(iveMembers.slice(0, 3));

// spread operator
let iveMembers2 = [
    ...iveMembers
];

// join() ,를 기준으로 string으로 합쳐진다.
console.log(iveMembers.join(', '));
console.log(iveMembers.join('/'));

// sort(), reverse()
// 오름차순, 내림차순
iveMembers.sort();
iveMembers.reverse();

let numbers = [
    1,
    9,
    7,
    5,
    3
]
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);
numbers.sort((a, b) => {
    return a > b ? -1 : 1;
})
console.log(numbers);

// map()
console.log(iveMembers.map((x) => x))

console.log(iveMembers.map((x) => {
    if(x === '안유진') {
        return `아이브: ${x}`;
    } else {
        return x;
    }
}));

// filter()
numbers = [1, 2, 4, 6, 7, 9];
console.log(numbers.filter((x) => x % 2 === 0));

// find() => 해당되는 값 즉시 반환
console.log(numbers.find((x) => x % 2 == 0));

// findIndex() => 해당되는 값의 index 즉시 반환
console.log(numbers.find((x) => x % 2 == 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));