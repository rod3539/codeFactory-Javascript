class IdolModel {
    // property
    name;
    year;

    constructor(name, year) {
        // this.name의 name은 class 내부의 name이고, 그냥 name은 contsructor의 name이다.
        this.name = name;
        this.year = year;
    }

    // method
    sayName() {
        return `안녕하세요! ${this.name}입니다.`
    }
}

// constructor - 생성자

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);
console.log(yuJin.sayName());