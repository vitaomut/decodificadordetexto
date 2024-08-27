function copiarTexto() {

    let textoCopiado = document.querySelector(".texto-criptografado p");

    var copiar = document.querySelector("#copiar");
    copiar.addEventListener("click", function () {
        navigator.clipboard.writeText(textoCopiado.innerText);
        location.reload();
    })
}
