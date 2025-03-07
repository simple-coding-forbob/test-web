// TODO : 02_slide_img.js
var swiper = new Swiper(".mySwiper", {
    // TODO : 여기 옵션 넣기
    // TODO: 자동 회전: autoplay: {delay: 밀리초(1/1000초)}
    autoplay: {delay: 3000},
    // TODO: 페이지기호 넣기
    // TODO: 사용법: pagination: {el: "클래스명"}
    pagination: {
        el: ".swiper-pagination",
    },
});