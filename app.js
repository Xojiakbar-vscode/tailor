 const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');

    // Menu tugmasini bosganda navbarni ko'rsatish
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // body eventini to'xtatadi
      navbar.style.display = 'flex';
      menuToggle.style.display = 'none';
    });

    // Tana (body)da boshqa joy bosilganda navbarni yopish
    document.body.addEventListener('click', () => {
      navbar.style.display = 'none';
      menuToggle.style.display = 'block';
    });

    // Navbarni bosganda yopilib ketmasligi uchun
    navbar.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  const closeButton = document.getElementById('closeButton');
  
  const searchinput = document.querySelectorAll('.search-input');
  menuToggle.addEventListener('click', () => {
    // Menu tugmasini yashirish
    menuToggle.style.display = 'none';

    // Navbarni ko‘rsatish
    navbar.style.display = 'flex';
  });
 
    searchinput.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.width = '200px';
        });
        input.addEventListener('blur', () => {
            input.style.width = '100px';
        });
    });