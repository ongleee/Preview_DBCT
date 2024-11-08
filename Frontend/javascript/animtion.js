const elementToAnimate0 = document.getElementById("animate-1212");
const elementToAnimate1 = document.getElementById("animate-1");
const elementToAnimate3 = document.getElementById("animate-3");


function addShowAnimateClass() {
  const elementPosition0 = elementToAnimate0.getBoundingClientRect();
  if (elementPosition0.top <= window.innerHeight && elementPosition0.bottom >= 0) {
    elementToAnimate0.classList.add("show-animate");
  } else {
    // elementToAnimate0.classList.remove("show-animate");
  };
  const elementPosition1 = elementToAnimate1.getBoundingClientRect();
  if (elementPosition1.top <= window.innerHeight && elementPosition1.bottom >= 0) {
    elementToAnimate1.classList.add("show-animate");
  } else {
    // elementToAnimate1.classList.remove("show-animate");
  }
  const elementPosition3 = elementToAnimate3.getBoundingClientRect();
  if (elementPosition3.top <= window.innerHeight && elementPosition3.bottom >= 0) {
    elementToAnimate3.classList.add("show-animate");
  } else {
    // elementToAnimate3.classList.remove("show-animate");
  }
}


function handleScroll() {
    addShowAnimateClass();
  }
  
  window.addEventListener("scroll", handleScroll);
  

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);

// Initial check in case the element is already in the viewport
addShowAnimateClass();
