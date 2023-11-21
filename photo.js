// Array of image sources
var images = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg" , "p5.jpg","p6.jpg"];
var currentImageIndex = 0;

// Function to update the displayed image
function updateImage() {
    var galleryImg = document.getElementById("galleryImg");
    galleryImg.src = images[currentImageIndex];
}

// Function to show the previous image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

// Function to show the next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

// Initial image update
updateImage();
