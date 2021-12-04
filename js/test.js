$(function(){
$(".js-menu").on("click", function(){
$(".side").toggleClass("is-open");
});
$(".js-menu").on("click", function(){
$(".l-container").toggleClass("is-open2");
});
$(".js-cross").on("click", function(){
$(".side").removeClass("is-open");
$(".l-container").removeClass("is-open2");
});
});