document.querySelectorAll("img").forEach(img=>{
    img.addEventListener("click",()=>{
        img.classList.toggle("ativa");
    });
});
