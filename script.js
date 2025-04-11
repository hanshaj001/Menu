// Future enhancement: highlight clicked card
document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('click', () => {
      alert(`${card.querySelector('h3').innerText} clicked!`);
    });
  });
  