const topBtn = document.querySelector(".sticky-close-btn");
const topBar = document.querySelector(".sticky-top");

topBtn.addEventListener("click", () => {
  topBar.classList.add("close-sticky-top");
});

// Navigation button event listeners
const track = document.querySelector(".track");
const carouselItems = document.querySelectorAll(".card-container-carousel");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const dotsContainer = document.querySelector(".carousel-dots");

const startIndex = 1; // Define the starting index

let currentIndex = startIndex;

// ...

// Add click event listeners to the navigation buttons
prevButton.addEventListener("click", () => {
  scrollToItem(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
  scrollToItem(currentIndex + 1);
});

// Create dot indicators
for (let i = 0; i < carouselItems.length; i++) {
  const dot = document.createElement("button");
  dot.addEventListener("click", () => {
    scrollToItem(i);
  });
  dotsContainer.appendChild(dot);
}

const dots = dotsContainer.querySelectorAll("button");

// Scroll to the specified item
function scrollToItem(index) {
  currentIndex = index;

  // Handle infinite loop
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
    track.style.transform = `translateX(calc(-${
      carouselItems.length * 20
    }% + 20%))`;
  } else if (currentIndex >= 6) {
    currentIndex = 0;
    track.style.transform = "translateX(0)";
  } else if (currentIndex === carouselItems.length - 3) {
    currentIndex = 2;
    track.style.transform = "translateX(0)";
  } else {
    track.style.transform = `translateX(-${1 * 20}%)`;
  }
  // Adjust index for starting index

  track.style.transform = `translateX(-${currentIndex * 20}%)`;

  // Update active dot indicator
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex + 4);
  });
}
