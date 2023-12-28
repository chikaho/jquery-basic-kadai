$(function () {
  // class属性のbtn要素がクリックされたら
  $('.btn').on('click', function () {

   
     $('[class="text-box"]').val('クリックされました');
    

  });
});