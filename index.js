
    var dodger = document.getElementById('dodger');
	  //dodger.style.backgroundColor = "#000000";
	  dodger.style.backgroundColor = '#FF69B4';
    
    document.addEventListener('keydown', function(e) {
      if (e.which === 37) {
        moveDodgerLeft();
      }else if(e.which === 39){
        moveDodgerRight();
      }  
    });

    function moveDodgerLeft() {
      var leftNumbers = dodger.style.left.replace('px', '')
      var left = parseInt(leftNumbers, 10)
      var rightNumbers = dodger.style.right.replace('px', '')
      var right = parseInt(rightNumbers, 10)

      if (left > 0) {
        dodger.style.left = `${left - 4}px`
        dodger.style.right = `${right + 4}px`
        }
      }

    function moveDodgerRight() {
      var rightNumbers = dodger.style.right.replace('px', '')
      var right = parseInt(rightNumbers, 10)
      var leftNumbers = dodger.style.left.replace('px', '')
      var left = parseInt(leftNumbers, 10)

      if (right > 0) {
        dodger.style.right = `${right - 4}px`
        dodger.style.left = `${left + 4}px`
        }
      }
