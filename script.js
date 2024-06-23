document.addEventListener('DOMContentLoaded', function() {
    var typedText = 'крупнейший агрохолдинг в России';
    var typingDelay = 80;
    var currentCharIndex = 0;
    var textElement = document.getElementById('typing-text');
  
    function typeChar() {
      if (currentCharIndex < typedText.length) {
        textElement.textContent += typedText.charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(typeChar, typingDelay);
      }
    }
    typeChar(); 
  });

function isElementInView(element, fullyInView) {
    var pageTop = window.scrollY;
    var pageBottom = pageTop + window.innerHeight;
    var elementTop = element.offsetTop;
    var elementBottom = elementTop + element.offsetHeight;
  
    if (fullyInView) {
      return ((pageTop < elementTop) && (pageBottom > elementBottom));
    } else {
      return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
    }
  }
  
  window.addEventListener('scroll', function() {
    var blocks = document.querySelectorAll('.card');
    blocks.forEach(function(block) {
      if (isElementInView(block, false)) {
        block.style.opacity = '1';
        block.style.transform = 'translateX(0)';
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    function changeTextColor(event) {
      event.target.style.color = 'rgb(105, 0, 0)';
    }

    function resetTextColor(event) {
      event.target.style.color = '';
    }

    const textElements = document.querySelectorAll('a');
  
    textElements.forEach(function(element) {
      element.addEventListener('mouseenter', changeTextColor);
      element.addEventListener('mouseleave', resetTextColor);
    });
  });