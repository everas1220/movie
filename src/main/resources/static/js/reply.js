// 날짜 포맷 함수
const formatDate = (str) => {
  const date = new Date(str);
  return (
    date.getFullYear() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes()
  );
};

// 리뷰 영역 가져오기
const reviewDiv = document.querySelector(".reviewList");

const reviewList = () => {
  //리뷰 가져오기
  axios.get(`/replies/${mno}/all`).then((res) => {
    console.log(res.data);
    const data = res.data;
    let result = "";
    data.forEach((review) => {
      result += `<div class="d-flex justify-content-between py-2 border-bottom review-row" data-rno=${review.rno} data-email=${review.email}>`;
      result += `<div class="flex-grow-1 align-self-center">`;
      result += `<div><span class="font-semibold">${review.text}</span></div>`;
      result += `<div class="small text-muted"><span class="d-inline-block mr-3">${review.nickname}</span>`;
      result += `평점 : <span class="grade">${review.grade}</span><div class="starrr"></div></div>`;
      result += `<div class="text-muted"><span class="small">${formatDate(review.createdDate)}</span></div></div>`;
      result += `<div class="d-flex flex-column align-self-center">`;
      // 로그인 사용자 == 댓글작성자
      //if (loginUser == reply.replyerEmail) {
      result += `<div class="mb-2"><button class="btn btn-outline-danger btn-sm">삭제</button></div>`;
      result += `<div><button class="btn btn-outline-success btn-sm">수정</button></div>`;
      // }
      result += `</div></div>`;
    });

    reviewDiv.innerHTML = result;
  });
};

reviewList();
