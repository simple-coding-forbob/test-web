// TODO : 06_quiz.js
$(function () {
    $('.quiz-box').isotope({
        itemSelector: '.quiz',
        layoutMode: 'fitRows',
      });
    $(".quiz-list li").click(function () {
        // TODO : quiz-list li 를 클릭하면    
        $('.quiz-box').isotope({
            filter: $(this).attr("data-filter")
          });            
    })
})