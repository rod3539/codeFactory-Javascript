/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

for(let i = 0; i < 10; i++){
    console.log(i);
};

for(let i = 0; i > -10; i--) {
    console.log(i);
}

for(let i = 0; i < 3; i++) {
    for(let j = 3; j > 0; j--) {
        console.log(i, j);
    }
}

let square = '';
let side = 6;
// *을 이용하여 6 by 6 정사각형 만들어라
for (let i = 0; i < side; i ++) {
    for (let j = 0; j < side; j ++) {
        square += '*';
    }
    square += '\n';
};
console.log(square);

/**
 * for ... in
 * index 값을 가져올 때
 */

const yuJin = {
    name: '안유진',
    year: 2003,
    group: '아이브'
}

for (let key in yuJin) {
    console.log(key);
}

const iveMembers = ['안유진', '장원영', '가을', '이서']

for (let key in iveMembers) {
    console.log(key);
    console.log(`${key}: ${iveMembers[key]}`)
}

/**
 * for ... of
 * 값을 가져올 때
 */

for (let value of iveMembers) {
    console.log(value);
}

/**
 * While
 */

let number = 0;

while (number < 10) {
    number ++;
    console.log(number)
}