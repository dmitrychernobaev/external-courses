const PHOTO_ARRAY = ['assets/1.jpg', 'assets/2.jpg', 'assets/3.jpg', 'assets/4.jpg', 'assets/5.jpg', 'assets/6.jpg', 'assets/7.jpg'];
let currentPhoto = 0;
const img = document.getElementById('img-current');

function changePhoto() {
  img.src = PHOTO_ARRAY[currentPhoto];
}

function animationImage() {
  img.classList.toggle('get-animation');
}

function previousPhoto() {
  currentPhoto -= 1;

  if (currentPhoto < 0) {
    currentPhoto = PHOTO_ARRAY.length - 1;
  }

  animationImage();
  setTimeout(changePhoto, 5000);
  setTimeout(animationImage, 10000);
  return null;
}

function nextPhoto() {
  currentPhoto += 1;

  if (currentPhoto === PHOTO_ARRAY.length) {
    currentPhoto = 0;
  }

  animationImage();
  setTimeout(changePhoto, 5000);
  setTimeout(animationImage, 10000);
  return null;
}

console.log(nextPhoto(), previousPhoto());
