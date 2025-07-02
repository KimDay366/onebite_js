// 미션1. 자바스크립트의 this
// 다음 코드에서 regularFunction과 arrowFunction이 있습니다.

// 두 함수 모두 this가 어떻게 작동하는지 확인하기 위해 각각 this.value를 출력하려고 합니다.

// 각 함수의 this가 무엇을 가리키는지 확인하고, 각 함수가 정상적으로 this.value를 출력할 수 있도록 코드를 수정하세요.
// (주석으로 작성된 질문에 대한 답도 주석으로 남겨주세요!!)

const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this.value);
    // Q) 여기서 this는 무엇을 가리키나요?
    // A) 객체 자체의 this 이므로, 바로 윗줄에 있는 42를 출력합니다
  },
  arrowFunction: () => {
    console.log(this.value);
    // Q) 여기서 this는 무엇을 가리키나요?
    // A) 화살표 함수의 this 이므로, 선언된 obj의 위쪽 전역을 참조하는데, 전역에는 value가 없네보네요 허허
    //    (함께 첨부한 콘솔창 확인에 의하면 undefined가 출력되서, 이를 그대로 가져온 것 같습니다.)
  },

  arrowFunctionRe: function () {
    console.log(this.value);
  },
};

obj.regularFunction(); // 출력: 42
obj.arrowFunction(); // 출력: undefined (이유를 설명해보세요)

obj.arrowFunctionRe(); // 선언형 함수로 변형하여 '42' 출력
