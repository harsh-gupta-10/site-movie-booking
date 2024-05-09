const slides = document.querySelectorAll(".slide")
var counter = 0;
console.log(slides)
slides.forEach(
    (slides, index) => {
        slides.style.left = `${index * 100}%`
    }
)

// const slideimg = () => {
//     slides.forEach(
//         (slide) => {
//             slide.style.transform = `translateX(-${counter * 100}%)`
//         }
//     )
// }

var img = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.webp', 'img/img6.jpg'];

var i = 0;

function slideShow() {
    document.getElementById("img").src = img[i];
    if (i < img.length - 1) {
        i++;
    } else(i = 0)
    setTimeout("slideShow()", 2000);
}
window.onload = slideShow;