window.onload = () => {
    let product_desc = document.getElementById("product-description-2");
    product_desc.classList.add("active");
}

function showSlides(n) {
    let slides = document.getElementsByClassName("product-card");
    let descriptions = document.getElementsByClassName("description");
    for (let i = 0; i < slides.length; i++) {
        if (i == n) {
            slides[i].style.width = "70%";
            descriptions[i].classList.add("active");
            descriptions[i].style.display = "block";  
        } else {
            slides[i].style.width = "10%";
            descriptions[i].classList.remove("active");
            descriptions[i].style.display = "none";
        }
    }
}