// 미션1.
//sumAndDouble이라는 함수를 작성하세요. 이 함수는 여러 개의 숫자를 인자로 받아요.

// 1. Rest 연산자를 사용하여 모든 인자를 하나의 배열로 받습니다.
// 2 .받은 숫자들을 모두 더합니다.
// 3 . 배열의 모든 숫자에 2를 곱한 새로운 배열을 반환합니다. (배열 메서드 map을 사용하세요.)
// 호출 예시

function sumAndDouble(...numrest) {
  // 초기 작성 코드 : 모든 수 더하고 거기에 곱하기 2 하라는 걸로 이해함.. ㅎ
  //   return (sumDob =
  //     numrest.reduce((acc, cur, idx) => {
  //       return acc + cur;
  //     }, 0) * 2);    // 20 출력

  let sumAll = numrest.reduce((acc, cur, idx) => {
    return acc + cur;
  }, 0);
  let Double = numrest.map((el) => el * 2);
  return console.log(sumAll, Double);
}

sumAndDouble(1, 2, 3, 4);
sumAndDouble(2, 4, 6, 8);
