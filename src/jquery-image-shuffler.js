
$.fn.extend({
  startShuffling: function(images, time) {
    images.forEach((e, i) => {
      let img = document.createElement('img');
      img.src = e;
      img.style.display = "none";
      $(this).append(img);
    });
    
    let showImage = function(index = 0, time = 500) {
      if(index >= images.length) index = 0;
      $('.images>img').fadeOut(500);
      setTimeout(() => {
        $('.images>img').eq(index).fadeIn();
        setTimeout(function() { showImage(index+1); }, time);
      }, 500);
    };
    showImage(0, time);
  }
});