document.addEventListener('DOMContentLoaded', () => {
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    const slider = ItcSlider.getOrCreateInstance('.slider', {loop: true});

    btnPrev.onclick = () => {
      slider.prev();
    }
    btnNext.onclick = () => {
      slider.next();
    }
  });