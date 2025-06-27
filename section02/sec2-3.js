//section02 - 3. 자료형과 형 변환

// 1) 자료형의 종류
// 원시타입 : 하나의 변수에 하나의 값만 가짐.
//           종류 - 숫자, 문자, Boolean, undefined, null, bigint(빅인트), symbol
// bigint : 매우 큰 정수 / 매우 작은 음수, 숫자 뒤에 n 붙이는 것(1000n), 정수만 가능
// symbol : 유일한 객체 속성 키, 이름 충돌 방지용
//          symbol("심볼") ==! symbol("심볼"); 동일한 문구여도 다른 키로 인식

// 비 원시 타입 : 하나의 변수에 여러개의 값을 가짐
//              종류 - 객체 (object, array, function, )

// typeof 연산자 : 해당하는 변수의 형태를 자료형으로 반환

let num = 10;
console.log(typeof num);

// 1.1) 원시타입 숫자
// 우리가 알고 있는 [기본 정수, 소수, 음수, 양수, 계산식의 결과]를 포함하며
// 그 외에 infinity, NaN 라는 값도 가질 수 있다
// infinity는 숫자형 자료로 사용되며, "100/0" 같이 수학적으로 정의되지 않는 나눗셈(0으로 나누기)에 대해
// 오류를 발생 시키는 대신 infinity 또는 -infinity가 출력되도록 한다

let num1 = Infinity;
let num2 = 100 / 0; //infinity
console.log(typeof num1);

let num3 = NaN; // Not a Number
let num4 = "js" / 10; // NaN, 부정확한 연산을 하는 경우 반환되는 값

// 1.2) 원시타입 Bigint
// 2^53-1 보다 크거나 -(2^53-1)보다 작은 값을 표현
// 숫자 뒤에 n을 붙이거나 BigInt()를 사용하여 표현

let bNum1 = 9999n;
let bNum2 = BigInt("999");
console.log(typeof bNum1);
console.log(typeof bNum2);

// 1.3) 원시타입 문자
// 문자를 표현하는 방법에는 "", '', ``(역따옴표, 백틱)가 있음.
// 그 중 ``(백틱, backtick)을 이용해 문자열을 쓰면, 그 안에 다른 변수를 가져오는 작업이 가능함

let str1 = "js";
let backtick = `My Name is ${str1}! Nice to meet you!`;
console.log(backtick);
// 템플릿 리터럴 : backtick으로 문자열을 쓰고 ${다른 변수}이용해 다른 변수의 값을 가져오는 것

// 1.4) 나머지 원시타입
// boolean : True, false 두가지 값 중 하나를 가짐
// Null : 존재하지 않음, 알 수 없는 값으로 "null"이라는 값이 할당된 거긴 함.
// Undefinde : 변수 자체에 값이 할달되지 않음. 애초에 아무것도 없는 빈 값.

// ===========================================================================================

// 2) 형변환
// Javascript는 자료형이 자유롭게 변환되는 "동적타입언어"
// 그래서 다른 언어들은 변수를 선언할 떄 자료형을 함께 불러와야 하지만
// Javascript는 let 으로 모든 자료형을 선언할 수 있음.

// 묵시적 형 변환 : Javascript가 알아서 형 변환을 시키는 것, 주로 숫자와 문자열을 연산할 때 발생함.
// 명시적 형 변환 : 개발자가 특정 함수를 사용하여 형 변환 후 연산을 시키는 것

let number1 = "15";
let number2 = 5;

console.log(number1 / number2); // 묵시적 형 변환, 결과값 3
console.log(parseInt(number1) + number2); // 명시적 형 변환, 결과값 20
