// 중간 미션 강의 1-2
// 3. 동물에 맞게 이미지 출력하기

const IMG_URL_API = "https://animal-api-two.vercel.app/";

let innerImgUrl = "";

let $content = document.querySelector("div.content");

// 3-1. url 마지막에 동물 키워드가 있으므로 그걸 사용해서 URL을 가져오기 위해 매게변수 name을 전달 해 줌
const imgDate = async (name) => {
  // 3-2. 전달받은 매게변수 name을 기존 URL에 붙임
  let imgList = await fetch(`${IMG_URL_API}${name}`);

  try {
    if (imgList) {
      let data = await imgList.json();
      data.photos.forEach((ele) => {
        innerImgUrl += `<img src = ${ele.url}>`;
      });

      $content.innerHTML = innerImgUrl;
    }
  } catch (err) {
    console.log(err);
  }
};

imgDate("koala");
// 3-3. 알맞은 동물 이름을 작성
