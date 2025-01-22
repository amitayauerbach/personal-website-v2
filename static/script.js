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