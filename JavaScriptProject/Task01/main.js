function myMove() {
    var id = null;
    var elem = document.getElementById("animate");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.bottom = pos + 'px';
      }
    }
  }