let lastScrollTop = 0;
const header = document.querySelector("header");
let ticking = false;
const threshold = 80; // Minimum scroll before hide/show triggers

window.addEventListener("scroll", function () {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Only trigger if scrolled enough
      if (Math.abs(scrollTop - lastScrollTop) > threshold) {
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          // scrolling down
          header.classList.add("hide");
        } else {
          // scrolling up
          header.classList.remove("hide");
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      }
      ticking = false;
    });
    ticking = true;
  }
});