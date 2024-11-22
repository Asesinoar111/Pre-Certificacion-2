const headerH1 = document.getElementById("headerH1")
const btnLikes = document.querySelectorAll(".votaciones-btn")
const filtrosBtn = document.getElementById("filtros-btn")

headerH1.addEventListener("click", () => {
    headerH1.style.color
})

filtrosBtn.addEventListener("click", () => {
    alert("Aplicando Filtros...")
})

btnLikes.forEach(button => {
    button.addEventListener("click", () => {
        const LikesCount = button.parentElement.querySelector(".votaciones-count")
        LikesCount.textContent = parseInt(LikesCount.textContent) + 1;
    })
});