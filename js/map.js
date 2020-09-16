(function () {
  $( "#datepicker" ).datepicker();
// Google Map
let map;
document.addEventListener("DOMContentLoaded",() => {
  let s = document.createElement("script");
  document.head.appendChild(s);
  s.addEventListener("load",() => {
    var myposition = {lat: -34.397, lng: 150.644};
    map = new google.maps.Map(document.getElementById('block-map'), {
    center: myposition,
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP 
    });
    var contentString = '<div class="content_map"><h3>HUỲNH VĂN BÁNH</h3><p>'+
      'Điện thoại : 0904567843'+
      '</p></div>';
     var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    var marker = new google.maps.Marker({
      position: myposition,
      map: map,
      title: 'TheoDore'
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  });	 
  s.src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCQQ_JBNIzJv_au-RLszU12TYMmNN36LZM';
});
}());