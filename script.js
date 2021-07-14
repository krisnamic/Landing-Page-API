let click = 0;

document.getElementById("tombol-hiu").addEventListener("click", (event) => {
  const sharkImages = document.querySelectorAll('img[alt="shark"]');
  click++;
  console.log(click);

  if (click === 8) {
    for (let i = 0; i <= sharkImages.length; i++) {
      sharkImages[i].style.display = "block";
    }
  }
});
