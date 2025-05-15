// 삭제 클릭시 removeForm 전송
document.querySelector(".move").addEventListener("click", (e) => {
    //e 태그 기능 중지
    e.preventDefault();

    document.querySelector("#removeForm").submit();
})