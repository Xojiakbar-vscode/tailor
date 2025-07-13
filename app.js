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
    document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.getElementById("aboutSection");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("show");
        }
      });
    }, {
      threshold: 0.3 // 30% ko‘rinsa yetarli
    });

    observer.observe(aboutSection);
  });
  document.addEventListener("DOMContentLoaded", function () {
  const sections = [
    document.getElementById("aboutSection"),
    document.getElementById("aboutSection1"),
    document.getElementById("aboutSection2")
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Bir marta qo‘shib bo‘lgach, kuzatishni to‘xtatadi
      }
    });
  }, {
    threshold: 0.3 // Elementning 30% ko‘rinsa yetarli
  });

  sections.forEach(section => {
    if (section) observer.observe(section);
  });
});

      document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.getElementById("aboutSection3");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("show");
        }
      });
    }, {
      threshold: 0.3 // 30% ko‘rinsa yetarli
    });

    observer.observe(aboutSection);
  });
    window.addEventListener("DOMContentLoaded", () => {
    const element = document.querySelector(".fade-in");

    // Dastlab display: block qilib ko‘rsatamiz
    setTimeout(()=>{
    element.style.display = "block";

    },1000)

    // Keyin kichik kechikish bilan animatsiyani boshlaymiz
    setTimeout(() => {
      element.classList.add("show");
    }, 100); // 0.1s kechikish bilan asta chiqadi
  });



  document.addEventListener("DOMContentLoaded", function () {
    const footer = document.getElementById("footer");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          footer.classList.add("show-footer");
        }
      });
    }, {
      threshold: 0.1, // 30% ko‘rinsa yetarli
    });

    observer.observe(footer);
  });
  const locationBox = document.getElementById('locationBox');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          locationBox.classList.add('show');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(locationBox);

