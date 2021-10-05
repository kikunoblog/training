
  $(function(){
    // 横からスライド
    if (window.matchMedia('(max-width: 1024px) and (min-width:320px)').matches) {
		/* ウィンドウサイズ320以上、以下の処理を記述 */
    $("#p-header__menu").click(function(){
      $(this ).toggleClass("open");
      $(".p-sidebar ").toggleClass("open");
    });

      $("#p-menu-trigger").click(function(){
    //openクラスの要素を削除
    $(".open").remove();
  
    });
  }});

 