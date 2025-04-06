const cards = document.querySelectorAll('.card');
    let index = 0;

    function updateCarousel() {
      cards.forEach((card, i) => {
        card.classList.remove('prev', 'next', 'active');

        if (i === index) {
          card.classList.add('active');
        } else if (i === (index - 1 + cards.length) % cards.length) {
          card.classList.add('prev');
        } else if (i === (index + 1) % cards.length) {
          card.classList.add('next');
        }
      });
    }

    updateCarousel();
    setInterval(() => {
      index = (index + 1) % cards.length;
      updateCarousel();
    }, 2500);
    // Touch / Drag support
let startX = 0;
let isDragging = false;

track.addEventListener('mousedown', (e) => {
  startX = e.pageX;
  isDragging = true;
  stopAutoSlide();
});

track.addEventListener('mouseup', (e) => {
  if (!isDragging) return;
  isDragging = false;
  const diff = e.pageX - startX;
  if (diff > 50 && currentIndex > 0) currentIndex--;
  else if (diff < -50 && currentIndex < totalCards - 1) currentIndex++;
  updateCarousel();
  resetAutoSlide();
});

track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  stopAutoSlide();
});

track.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;
  if (diff > 50 && currentIndex > 0) currentIndex--;
  else if (diff < -50 && currentIndex < totalCards - 1) currentIndex++;
  updateCarousel();
  resetAutoSlide();
});

// Init
window.addEventListener('load', () => {
  updateCarousel();
  autoSlide();
});

// Form 
  const openBtn = document.getElementById("openFormBtn");
  const closeBtn = document.getElementById("closeFormBtn");
  const modal = document.getElementById("formModal");

  openBtn.addEventListener("click", () => modal.classList.add("active"));
  closeBtn.addEventListener("click", () => modal.classList.remove("active"));

  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = this.email.value.trim();
    const phone = phoneInput.getNumber();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return alert("Enter a valid email.");
    if (!phoneInput.isValidNumber()) return alert("Enter a valid phone number.");

    alert("Form submitted successfully!");

    modal.classList.remove("active");
    this.reset();
  });

//   USP 

function showOverlay(title, description) {
    document.getElementById('overlay-title').innerText = title;
    document.getElementById('overlay-description').innerText = description;
    document.getElementById('overlay').style.display = 'flex';
  }

  function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
  }

