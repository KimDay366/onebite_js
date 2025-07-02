// 중간 미션 강의 1-1
// 1. 이미지 데이터를 받아오기 = API, async, await 사용
// 2. 받아온 데이터를 div.content에 삽입하기

const IMG_URL_API = "https://animal-api-two.vercel.app/";

// 2-1. 받아온 데이터를 담아 둘 배열 만들기 -> 배열로 하면 콤마가 삽입 되므로 그냥 선언
//      -> 그냥 선언하면 최초 값 undefined 출력됨, 문자열 선언 필요
let innerImgUrl = ""; //

// 2-3. 이미지 데이터를 넣을 div.content 불러오기
let $content = document.querySelector("div.content");

const imgDate = async () => {
  let imgList = await fetch(IMG_URL_API);
  // 1-1. 이미지 리스트와 접속 시도

  try {
    // 1-2. 접속 성공 시
    if (imgList) {
      // 1-2-1. 접속 성공해서, 이미지 리스트의 데이터가 존재 한다면

      let data = await imgList.json();
      // 1-2-2. 해당 데이터를 json 해서 사용 가능하도록 수정

      // 2-2. 받아온 데이터를 img 태그에 삽입하기 위하여 forEach문 사용하기
      data.photos.forEach((ele) => {
        // innerImgUrl.push(`<img src = ${ele.url}>`); 배열로 사용하면 콤마가 함께 출력 됨
        innerImgUrl += `<img src = ${ele.url}>`; // 기존에 있는 데이터를 유지하고 추가 해야하므로, +(플러스)가 필요
      });

      // 2-4. div.content에 이미지 링크 넣어주기
      $content.innerHTML = innerImgUrl;
    }
  } catch (err) {
    // 1-2. 접속 실패 시
    console.log(err);
  }
};

imgDate();
