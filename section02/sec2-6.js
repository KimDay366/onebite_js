//section02 - 6. 함수

// 반복되는 명령을 하나의 함수로 만들어 사용 가능
// funciton : 함수를 선언하기 위한 문법
//

function add(n1, n2) {
  // 함수 내부의 명령 입력 영역(스코프)
  console.log(n1 + n2);
}

add(1, 2);

function res(n1, n2) {
  // return : 함수가 마치면서 결과값을 내보냄,
  //          따라서, 함수를 사용할 때는 해당 값을 받기 위한 변수가 필요함
  return n1 + n2;
  // return이 실행되면, 그 이후에 설정된 명령은 실행되지 않음
  // 전역변수를 이용하지 않는 함수에서 return 마저 없이 종료되면 'undefined'가 반환 됨,
  //  = 아무일도 일어나지 않는 함수가 되어버림
}

let result = res(5, 5);

console.log(result);
console.log(`두 숫자의 합은 ${result}입니다.`);

// Early return pattern : 조건에 맞지 않으면 해당 함수를 빨리 끝낸다 = 명령어를 실행하지 않고 끝내서 효율적
function compare(num) {
  if (num === 0) {
    console.log("num = 0");
  } else if (num < 0) {
    console.log("num < 0");
  } else {
    console.log("num >= 0");
    if (num >= 10) {
      console.log("num >= 10");
    } else {
      console.log("0 <= num < 10");
    }
  }
}

function earlyCompare(num) {
  if (num === 0) {
    return "num = 0";
  }
  if (num < 0) {
    return "num < 0";
  }
  if (num >= 10) {
    return "num >= 10";
  }
  return "0 <= num < 10";
}
console.log(earlyCompare(1));
