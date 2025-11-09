const lightbox = document.getElementById("lightbox");
const images = document.querySelectorAll(".portfolio img");
const lightboxImage = lightbox.querySelector("img");

images.forEach((img) => {
    img.addEventListener("click", function(){
        lightbox.classList.add("active");
        lightboxImage.src = img.src;
    });
});

lightbox.addEventListener("click",function(){
    lightbox.classList.remove("active");
});
