// api.js : api 호출 후 데이터 반환

const IMG_URL_API = "https://animal-api-two.vercel.app/";

// let innerImgUrl = "";
// let $content = document.querySelector("div.content");
// => api 호출만 진행 할 예정이므로, 필요 없느 부분은 제거

export const imgDate = async () => {
  let imgList = await fetch(IMG_URL_API);

  try {
    if (imgList) {
      let data = await imgList.json();

      return data.photos;
      // api로 호출 한 데이터를 반환 해 주기 위해 return 문 작성

      //   data.photos.forEach((ele) => {
      //     innerImgUrl += `<img src = ${ele.url}>`;
      //   });

      //   $content.innerHTML = innerImgUrl;
      // => api 호출만 진행 할 예정이므로, 필요 없느 부분은 제거
    }
  } catch (err) {
    console.log(err);
  }
};

imgDate();
