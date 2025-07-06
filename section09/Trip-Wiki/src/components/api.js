const API_URL = "https://trip-wiki-api.vercel.app/";

export const request = async (startIdx, region, sortBy, searchWord) => {
  try {
    // 1) URL 설정
    let url = `${API_URL}`;

    // 지역을 선택 한 경우, 지역과 함께 처음 출력할 인덱스 번호를 전달
    if (region && region !== "All") {
      url += `${region}?start=${startIdx}`;
    } else {
      url += `?start=${startIdx}`;
    }

    // 정렬과 지역의 경우 값이 있을 때만 URL에 붙임
    if (sortBy) {
      url += `&sort=${sortBy}`;
    }
    if (searchWord) {
      url += `&search=${searchWord}`;
    }

    // 2) API 호출

    let response = await fetch(url);

    if (response) {
      let data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
