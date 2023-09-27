const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3500,
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const anchors = document.querySelectorAll('a[href*="#"]');

  anchors.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
          e.preventDefault();
          
      const blockId = anchor.getAttribute('href').replace('#', '');
  
          const element = document.getElementById(blockId);
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
          window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
          });
          })
  })