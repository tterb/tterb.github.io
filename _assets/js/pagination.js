$(document).ready(function() {
  /* The Post Navigator */
  $('.read-next-item section').each(function(){
    var _this = $(this),
        n = _this.height(),
        rn = $('.read-next-item').height();
    _this.css('margin-top', (rn-n)/2 + 'px');
    _this.fadeIn();
  });

  $('.read-next-item img').each(function(){
    var _this = $(this);
    postCover(_this, $('.read-next-item'));
  });
  
  /* Pagination */
  function pagination() {
    var total = parseInt($('#total_pages').val()),
      current = parseInt($('#current_pages').val()),
      //baseUrl = $('#base_url').val(),
      baseUrl = '/',
      limit = 3;
    var link_html = '';
    for (var i = current - limit; i < current; i++) {
      if (i > 0 && i !== 1) {
        link_html += '<a href="' + baseUrl + 'blog3/page' + i + '" class="page-link page-num">' + i + '</a>';
      } else if (i === 1) {
        link_html += '<a href="' + baseUrl + 'blog3" class="page-link page-num">' + i + '</a>';
      }
    }
    link_html += '<span class="page-link page-num active">' + current + '</span>';
    
    for (var j = current + 1; j <= current + limit; j++) {
      if (j <= total) {
        link_html += '<a href="' + baseUrl + 'blog3/page' + j + '" class="page-link page-num">' + j + '</a>';
      }
    }
    $('#page-link-container').html(link_html);
  }
  pagination();
});
