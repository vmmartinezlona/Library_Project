$(function() {
    var results = $('.results');
    $(document).ready(function() {
        $.ajax({
          url: 'http://localhost:3000/',
          type: 'get',
          dataType: 'jsonp',
          success: function(data) {
            for (var i=0;i<data.length;i++) {
              $('.a').html('<a href="http://localhost:3000/book/' + data[i].id + '">' + data[i].Title + ', ' + data[i].Author + '</a>');
            }
          },
          error: function(xhr, textStatus, errorThrown) {
            console.log('Error in Operation');
          }
        });
  });
