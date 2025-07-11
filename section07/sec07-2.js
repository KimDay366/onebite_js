// section 07-2 . 모듈 시스템

// ES6부터 ECMA Script Module System 제공

// 모듈은 하나의 파일을 의미하고, 각각의 스코프를 가지고 있음
// 따라서 기본적으로 자신의 파일 안에서만 움직일 수 있고, 외부로 전달이 불가능함
// 이 말은, 모듈 내부에 선언된 식별자들은 외부에서 봤을때 비공개 처리 된 것으로 확인 됨

// 하지만 export 키워드를 통해 외부에 식별자들을 공개 할 수 있음
export const num = 10; // 다른 파일에서 사용 가능한 변수가 선언 됨

// 다른 모듈에서 공개된 식별자를 사용하기 위해선 import 키워드를 사용
// [다른 파일]
// import{num} form './modules.js'

// ============================================================

// 1) 자바스크립트 파일 모듈화 작업

// 자바스크립트의 파일을 그냥 사용할 경우
// 전체를 하나의 스코프로 인식하여 동일한 식별자 명칭 사용이 불가능함

// 따라서 스크립트 파일을 불러올 때 type = "Module" 을 써 주어 모듈화를 진행 함
// 추가로 파일이 모듈임을 명시하기 위해 확장자도 .js -> .mjs로 변환하여 사용
// <script type="Module" src="src/index.mjs"></script>
// <script type="Module" src="src/test.mjs"></script>

// ================================================================

// 2) 모듈화 된 파일 내에 키워드 작업

// 2.1) 각 식별자 마다 export 붙여서 내보내기
//      불러오는 파일에서는 import {식별자, 식별자..} form './파일명.mjs'로 불러오기

// 2.2) 내보낼 식별자 한번에 선언하기 = export {식별자, 식별자..}
//      불러오는 파일도 한번에 import * as [식별자 배열명] form './파일명.mjs' 선언하기

// 2.3) 내보낼 식별자가 함수 1가지인 경우 = export default (함수명)
//      불러오는 파일에서는 새로운 변수로 선언하여 import (새로운 함수명) form './파일명.mjs' 으로 사용

// ===================================================================

// 3) 모듈화 하여 사용하기 때문에 모든 스크립트 파일을 불러오지 않고
//    모든 식별자가 모이는 파일 1개만 불러와도 js는 가동 됨

// <script type="Module" src="src/index.mjs"></script> => 유지
// <script type="Module" src="src/test.mjs"></script> => 삭제
