$(document).ready(function() {
    $('#pre_1').stop().fadeIn(1); //Init
    $('#previous1').on('click', function(){
        // Change to the previous image
        $('#pre_' + currentImage).stop().fadeOut(1);
        decreaseImage();
        $('#pre_' + currentImage).stop().fadeIn(1);
    }); 
    $('#next1').on('click', function(){
        // Change to the next image
        $('#pre_' + currentImage).stop().fadeOut(1);
        increaseImage();
        $('#pre_' + currentImage).stop().fadeIn(1);
    }); 

    var currentImage = 1;
    var totalImages = 3;

    function increaseImage() {
        /* Increase currentImage by 1.
        * Resets to 1 if larger than totalImages
        */
        ++currentImage;
        if(currentImage > totalImages) {
        currentImage = 1;
        }
    }
    function decreaseImage() {
        /* Decrease currentImage by 1.
        * Resets to totalImages if smaller than 1
        */
        --currentImage;
        if(currentImage < 1) {
        currentImage = totalImages;
        }
    }
});