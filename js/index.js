var numSlide = 0;
var next = document.getElementById('Next')
var prev = document.getElementById('Prev')
var image = document.getElementById('Image')
var arrayImages = ["./imagenes/header_1.jpg", "./imagenes/header_2.jpg", "./imagenes/header_3.jpg", "./imagenes/header_4.jpg"]

/* RETROCEDER EN EL SLIDER */
prev.addEventListener("click", function() {
    changeImagePrev(numSlide)
    numSlide--
})

/* AVANZAR EN EL SLIDER */
next.addEventListener("click", function() {
    changeImageNext(numSlide)
    numSlide++
})

function changeImagePrev(num)
{
    image.style.opacity = '0'
    setTimeout(function()
    {
        var position = (num - 1) % arrayImages.length
        image.src = arrayImages[position]
    }, 500)
    setTimeout(function()
    {
        image.style.opacity = '0.5'
    }, 700)
}


function changeImageNext(num)
{
    image.style.opacity = '0'
    setTimeout(function()
    {
        var position = (num + 1) % arrayImages.length
        image.src = arrayImages[position]
    }, 500)
    setTimeout(function()
    {
        image.style.opacity = '0.5'
    }, 700)
}