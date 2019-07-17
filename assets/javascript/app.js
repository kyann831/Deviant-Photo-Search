$(document).ready(function() {
  var client_id = 'c6cf9c093594dd1a3b5d159dabfdecfe4ed573dcf3e18261ebf77fe50378c85e';
  var limit = 25;
  var page = 1;


  function unsplash(){
    inpObj = document.getElementById("id1");

    $.ajax({
      url:'https://api.unsplash.com/search/photos',
      type:'GET',
      dataType:'json',
      data:{
        client_id:client_id,
        page:page,
        per_page:limit,
        query: $("#id1").val(),
      }
    }).done(function(response) {
      var photos = [];

      for (i = 0; i < response.results.length; i++) { 
        var photo = { 
          small: response.results[i].urls.small,
          thumb: response.results[i].urls.thumb,
        };
        photos.push(photo);
      }

      for (var i = 0; i < photos.length; i++) {
        var listItem = $(
          '<li data-thumb="'+ photos[i].thumb + '">' +
            '<a href="#">' +
            '<img src="' + photos[i].small + '" /> ' +
            '</a> ' +
          '</li>'
        );
        // var thumbNail = $('<li ')

        $('#lightSlider').append(listItem);
      }

      $('#lightSlider').lightSlider({
        gallery:true,
        minSlide:1,
        maxSlide:1,
        auto:true,
        slideMove:1,
        
        }); 
        
    });
  }
      
  // $("#button").click(unsplash);
  // $(document).ready(function(){
    $("button").click(function(){
      $(".lSSlideOuter").replaceWith('<ul id="lightSlider" class="gallery"></ul>');
      unsplash();
    });
  // });

});



