// TODO : 06_isotope.js
$(function () {
    // TODO : 1) isotope 대상 태그(부모) 선택: .product-box
    // TODO : 2) 자식 박스(이미지) 선택      : .product
    // TODO : 3) filter: ".클래스명"        : 해당 클래스만 화면에 보임
    $('.product-box').isotope({
        // TODO : 자식박스(.product)
        itemSelector: '.product',
        // TODO : 옵션
        layoutMode: 'fitRows',
      });

    // TODO : 목록(li) 을 클릭하면
    $(".product-list li").click(function () {
        // TODO : product-list 를 클릭하면
        $('.product-box').isotope({
            // TODO :  태그속성 값 바꾸기/가져오기
            // TODO : attr("data-filter")
            // TODO ; this : li 태그 3개 중 클릭한 것
            filter: $(this).attr("data-filter")
        });
    })
})