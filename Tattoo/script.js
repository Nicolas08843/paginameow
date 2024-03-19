document.querySelectorAll('.zoomable-image').forEach(function(image) {
    image.addEventListener('click', function() {
        this.focus(); // Enfoca la imagen al hacer clic en ella
    });
});
