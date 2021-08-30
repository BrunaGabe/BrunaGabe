const tabuleiro = document.querySelector ("#Tabuleiro")
const linhas = tabuleiro.querySelectorAll ("tr")


linhas.forEach((linha)=>{
    const colunas = linha.querySelector("td")

    colunas.forEach((td, indiceC)=>{
    const campo = td.querySelectorAll(".campo")[0]

    campo.addEventListener("click", ()=>{
        alert("cliquei com o botão esquerdo")
    })
    
    campo.addEventListener("contextmenu", ()=>{
        alert("cliquei com o botão direito")
    })

    })
})
