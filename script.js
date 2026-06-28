const imagens = document.querySelectorAll(".item img");

imagens.forEach(img => {
    img.addEventListener("click", () => {
        img.classList.toggle("ativa");
    });
});
