function openImage(imagePath) {
    document.getElementById('myImage').src = imagePath;

    document.getElementById('image-container').style.display = 'block';
}

function closeImage() {
    document.getElementById('image-container').style.display = 'none';
}