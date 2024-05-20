let main = document.getElementById('main')
console.log(main);

$(document).ready(function(){
    $('.right').on('click', function(){
        var currentImage = $('.active');
        var nextImage = currentImage.next();
        if(nextImage.length){
            currentImage.removeClass('active');
            nextImage.addClass('active');
        }
        else{
            $('.image:last-child').removeClass('active');
            $('.image:first-child').addClass('active');
        }
    })
    $('.left').on('click', function(){
        var currentImage = $('.active');
        var prevImage = currentImage.prev();
        if(prevImage.length){
            currentImage.removeClass('active');
            prevImage.addClass('active');
        }
        else{
            $('.image:first-child').removeClass('active');
            $('.image:last-child').addClass('active');
        }
    })
})
setInterval(function(){
    var currentImage = $('.active');
    var nextImage = currentImage.next();
    if(nextImage.length){
        currentImage.removeClass('active');
        nextImage.addClass('active');
    }
    else{
        $('.image:last-child').removeClass('active');
        $('.image:first-child').addClass('active');
    }
}, 2000)