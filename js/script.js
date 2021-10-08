
  $(function(){
    // 横からスライド

    $("#p-menu").click(function(){
      $(this ).toggleClass("open");
      $(".p-sidebar").toggleClass("open");
    });

      $("#p-menu-trigger").click(function(){
    //openクラスの要素を削除
    $(".open").remove();
  
    });
  });

 