// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Trigger animations on scroll
window.addEventListener('scroll', function() {
  const contents = document.querySelectorAll('.fade-in');
  contents.forEach(content => {
      const contentPosition = content.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (contentPosition < screenPosition) {
          content.classList.add('active');
      }
  });
});
