// enter 발생시 searchForm 가져오기
document.querySelector("[name='keyword']").addEventListener("keyup", (e) => {
    if (e.keycode == 13) {
        // 폼 가져오기
        const searchForm = document.querySelector("#searchForm");
        // 폼 서브밋
        searchForm.submit();
    }
});