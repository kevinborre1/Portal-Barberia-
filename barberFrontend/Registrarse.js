document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modalRegistro");
    const btnAbrir = document.getElementById("btnAbrirRegistro");
    const spanCerrar = document.querySelector(".cerrar");

    if (btnAbrir) {
        btnAbrir.onclick = () => { modal.style.display = "flex"; };
    }
    
    if (spanCerrar) {
        spanCerrar.onclick = () => { modal.style.display = "none"; };
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});