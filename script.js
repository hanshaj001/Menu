window.addEventListener('load', () => {
    const butterfly = document.getElementById('butterfly');
    setTimeout(() => {
      butterfly.remove();
    }, 4500); // remove after animation completes
  });
  