function copyEmail(event) {
  event.preventDefault();
  const email = 'amitayab@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    const popup = document.createElement('div');
    popup.className = 'email-popup';
    popup.textContent = 'Email copied to clipboard!';
    document.body.appendChild(popup);

    setTimeout(() => {
      popup.classList.add('show');
    }, 100);

    setTimeout(() => {
      popup.classList.remove('show');
      setTimeout(() => {
        popup.remove();
      }, 300);
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy email:', err);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Form submission handler
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    
    fetch('/send_email', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        const popup = document.createElement('div');
        popup.className = 'email-popup';
        popup.textContent = 'Thank you, email sent!';
        document.body.appendChild(popup);

        setTimeout(() => {
          popup.classList.add('show');
        }, 100);

        setTimeout(() => {
          popup.classList.remove('show');
          setTimeout(() => {
            popup.remove();
          }, 300);
        }, 2000);

        form.reset();
      } else {
        throw new Error('Failed to send email');
      }
    })
    .catch(error => {
      const popup = document.createElement('div');
      popup.className = 'email-popup';
      popup.style.backgroundColor = '#ff4444';
      popup.textContent = 'Failed to send email. Please try again.';
      document.body.appendChild(popup);

      setTimeout(() => {
        popup.classList.add('show');
      }, 100);

      setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => {
          popup.remove();
        }, 300);
      }, 2000);
    });
  });
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  
  // Update message count
  fetch('/api/stats')
    .then(response => response.json())
    .then(data => {
      document.getElementById('message-count').textContent = `Total messages sent: ${data.total_messages}`;
    })
    .catch(err => console.error('Failed to fetch stats:', err));
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const icon = themeToggle.querySelector('i');

  // Menu toggle
  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.icons-container')) {
      navMenu.classList.remove('active');
    }
  });

  // Theme toggle
  themeToggle.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });
});