// Select the element
const noHelloElement = document.querySelector('.no-hello');


noHelloElement.addEventListener('mouseenter', runaway);

function runaway() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const elementWidth = noHelloElement.offsetWidth;
  const elementHeight = noHelloElement.offsetHeight;
  
  // Calculate maximum allowable positions without going off-screen
  const maxX = screenWidth - elementWidth;
  const maxY = screenHeight - elementHeight;
  
  // Generate random positions within the visible area
  const randomX = Math.max(0, Math.min(maxX, Math.round(Math.random() * maxX)));
  const randomY = Math.max(0, Math.min(maxY, Math.round(Math.random() * maxY)));
  
  // Set element's position
  noHelloElement.style.top = randomY + 'px';
  noHelloElement.style.left = randomX + 'px';
}
