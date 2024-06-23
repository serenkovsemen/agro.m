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

  document.getElementById('feedback-form').onsubmit = function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    
    var phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,4}$/im;
    if (!phoneRegex.test(phone)) {
      alert('Пожалуйста, введите корректный номер телефона.');
      return;
    }
    
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Пожалуйста, введите корректный e-mail.');
        return;
    }
    
    console.log('Имя:', name);
    console.log('Телефон:', phone);
    console.log('Почта:', email);
    console.log('Сообщение:', message);
    alert('Спасибо за ваше сообщение!');
  };