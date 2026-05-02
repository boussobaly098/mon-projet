// Attend que toute la page soit chargée
document.addEventListener('DOMContentLoaded', function() {

  
  // EFFET NAVBAR AU SCROLL
  
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('#navbar');
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 2px 20px rgba(124, 58, 237, 0.4)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  
  // ANIMATIONS AU SCROLL
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(function(element) {
    observer.observe(element);
  });

  
  // FILTRE DES PROJETS
  
  const boutonsFiltres = document.querySelectorAll('.filter-btn');
  const cartesProjet = document.querySelectorAll('.projet-card');

  boutonsFiltres.forEach(function(btn) {
    btn.addEventListener('click', function() {
      boutonsFiltres.forEach(function(b) {
        b.classList.remove('active');
      });
      this.classList.add('active');
      const categorie = this.dataset.filter;
      cartesProjet.forEach(function(carte) {
        if (categorie === 'all' || carte.dataset.category === categorie) {
          carte.style.display = 'block';
        } else {
          carte.style.display = 'none';
        }
      });
    });
  });

  
  // VALIDATION FORMULAIRE
  
  const btnEnvoyer = document.querySelector('#btn-envoyer');

  if (btnEnvoyer) {
    btnEnvoyer.addEventListener('click', function() {
      const nom = document.querySelector('#nom').value.trim();
      const email = document.querySelector('#email').value.trim();
      const sujet = document.querySelector('#sujet').value.trim();
      const message = document.querySelector('#message').value.trim();
      const msgSucces = document.querySelector('#message-succes');
      const msgErreur = document.querySelector('#message-erreur');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      msgSucces.classList.add('d-none');
      msgErreur.classList.add('d-none');

      if (!nom || !email || !sujet || !message) {
        msgErreur.classList.remove('d-none');
        return;
      }

      if (!emailRegex.test(email)) {
        msgErreur.classList.remove('d-none');
        return;
      }

      msgSucces.classList.remove('d-none');
      document.querySelector('#nom').value = '';
      document.querySelector('#email').value = '';
      document.querySelector('#sujet').value = '';
      document.querySelector('#message').value = '';
    });
  }

  
  // DARK MODE / LIGHT MODE
  
  const toggleTheme = document.querySelector('#toggle-theme');

  if (toggleTheme) {
    toggleTheme.addEventListener('click', function() {
      document.body.classList.toggle('light-mode');
      const icone = this.querySelector('i');
      if (document.body.classList.contains('light-mode')) {
        icone.className = 'bi bi-sun-fill';
      } else {
        icone.className = 'bi bi-moon-fill';
      }
    });
  }

});
