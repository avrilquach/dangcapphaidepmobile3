$(document).ready(function() {
  $('._result').hide();
});
$('.menu_thuonghieu .search_alphabet ul._top li').click(function(e){
  $('._result').show();
});
$('.menu_thuonghieu .search_alphabet .clear').click(function(e){
  $('._result').hide();
});
$('.search-item input[type=text]').keyup(function(){
  $('._result').show();
});