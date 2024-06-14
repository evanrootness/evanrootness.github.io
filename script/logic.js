function adjustLayout() {
    const container = document.getElementById('art-container');
    const items = container.querySelectorAll('.art-item');
  
    // Determine the number of items per row based on viewport width
    let itemsPerRow;
    if (window.innerWidth > 1000) {
      itemsPerRow = 3;
    } else if (window.innerWidth > 600) {
      itemsPerRow = 2;
    } else {
      itemsPerRow = 1;
    }
  
    // Calculate width for each item based on the number of items per row
    const itemWidth = (100 / itemsPerRow) - 2; // Subtracting 2% for margin
  
    // Apply width to each item
    items.forEach(item => {
      item.style.width = `${itemWidth}%`;
    });
}



const ratingContainers = document.querySelectorAll('.rating-container');

ratingContainers.forEach(container => {
  const rating = parseInt(container.getAttribute('data-rating'));

  for (let i = 0; i < rating; i++) {
    const star = document.createElement('div');
    star.classList.add('star', 'filled');
    container.appendChild(star);
  }

  for (let i = rating; i < 5; i++) {
    const star = document.createElement('div');
    star.classList.add('star', 'emptystar');
    container.appendChild(star);
  }
});
  

function getPics() {}

// const imgs = document.querySelectorAll('.research-img img');
// const fullPage = document.querySelector('#fullpage');

// imgs.forEach(img => {
//   img.addEventListener('click', function() {
//     fullPage.style.backgroundImage = 'url(' + img.src + ')';
//     fullPage.style.display = 'block';
//   });
// });

document.addEventListener('DOMContentLoaded', (event) => {
  const imgs = document.querySelectorAll('.research-img img');
  const fullPage = document.querySelector('#fullpage');

  imgs.forEach(img => {
      img.addEventListener('click', function() {
          fullPage.style.backgroundImage = 'url(' + img.src + ')';
          fullPage.style.display = 'block';
      });
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  const imgs = document.querySelectorAll('.art-column img');
  const fullPage = document.querySelector('#fullpage-art');
  

  imgs.forEach(img => {
      img.addEventListener('click', function() {
        fullPage.style.backgroundImage = 'url(' + img.src + ')';
        fullPage.style.display = 'block';
      });
  });
});



var images = ['pictures/goldcloudsnew.JPG', 'pictures/blueclouds.jpeg', 'pictures/blueandgold.jpeg'];

// const backgroundImage = document.querySelectorAll('.background-image-container');

const backgroundImage1 = document.getElementById('backgroundimage');
const backgroundImage2 = document.getElementById('backgroundimage2');

var img1 = backgroundImage1.src
var img2 = backgroundImage1.src

let currentImageIndex = 0;

function changeBackground() {
    const nextImageIndex = (currentImageIndex + 1) % images.length;
    const nextImagePath = images[nextImageIndex];

    // load in the new one
    backgroundImage2.src = nextImagePath;
    img2 = nextImagePath

    // fade out first
    backgroundImage1.classList.add('hidden');

    setTimeout(() => {
        [img1, img2] = [img2, img1]
        backgroundImage1.src = img2
        backgroundImage2.src = img1

        // Reset opacity and remove 'hidden' class for next image
        backgroundImage1.style.opacity = 1;
        backgroundImage1.classList.remove('hidden');
    
        currentImageIndex = nextImageIndex;
    }, 1000);

    // backgroundImage.style.opacity = 0;
  
    // setTimeout(() => {
    //   backgroundImage.src = imagePath;
    //   backgroundImage.style.opacity = 1;
    // }, 1000);
}

changeBackground();

setInterval(changeBackground, 6000);









window.addEventListener('resize', adjustLayout);
adjustLayout();