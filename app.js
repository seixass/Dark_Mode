function darkMode () {
    const pagina = document.body

    pagina.classList.toggle("dark-mode")

    const isDarkMode = document.body.classList.contains("dark-mode")

    let textoBotao = isDarkMode ? "Clear Mode" : "Dark Mode";
    document.querySelector("button").textContent = textoBotao;
}