
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var homeLink = document.querySelector('.nav-item[data-section="home"]');
  var aboutLink = document.querySelector('.nav-item[data-section="about"]');
  var servicesLink = document.querySelector('.nav-item[data-section="services"]');
  var contactLink = document.querySelector('.nav-item[data-section="contact"]');

  if (homeLink) {
    homeLink.addEventListener('click', function() {
      scrollToSection('home');
    });
  }

  if (aboutLink) {
    aboutLink.addEventListener('click', function() {
      scrollToSection('about');
    });
  }

  if (servicesLink) {
    servicesLink.addEventListener('click', function() {
      scrollToSection('services');
    });
  }

  if (contactLink) {
    contactLink.addEventListener('click', function() {
      scrollToSection('contact');
    });
  }
});
