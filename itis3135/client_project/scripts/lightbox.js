document.addEventListener("DOMContentLoaded",() => {
    const lightbox = document.getElementById("lightbox");
    const images = document.querySelectorAll(".portfolio img");
    const lightboxImage = lightbox.querySelector("img");

    if (!lightbox || images.length === 0){
        console.log("lightbox not found");
        return;
    }

    images.forEach((img) => {
        img.addEventListener("click", function(){
            lightbox.classList.add("lightbox-active");
            lightboxImage.src = img.src;
        });
    });

    lightbox.addEventListener("click",function(e){
        if (e.target === lightbox){
            lightbox.classList.remove("lightbox-active");
        }
        console.log("lightbox works");
    });
    
    console.log(images);
});

