document.addEventListener("DOMContentLoaded",() => {
    const lightbox = document.getElementById("lightbox");
    const images = document.querySelectorAll(".portfolio img");
    const lightboxImage = lightbox.querySelector("img");

    if (!lightbox || images.length === 0){
        console.log("lightbox not found");
        return;
    }

    const openLightbox = (imgSrc) => {
        lightboxImage.src = imgSrc;
        lightbox.style.display = "flex";
        setTimeout(() => {
            lightbox.classList.add("lightbox-active");
        }, 20);
    };

    const closeLightbox = () => {
        lightbox.classList.remove("lightbox-active");
        setTimeout(() => {
            lightbox.style.display = "none";
        }, 300);
    };

    images.forEach((i) => {
        i.addEventListener("click", function(){
            openLightbox(i.src);
        });
    });

    lightbox.addEventListener("click", function(e){
        if (e.target === lightbox){
            closeLightbox();
        }
    });
    console.log(images);
});

