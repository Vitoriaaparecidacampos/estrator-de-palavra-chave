 const botaoMostraPalavras=document.querySelector("#botao-palavrachave");
 botaoMostraPalavras.addEvenListener("click", mostraPalavrasChave );
 function mostraPalavrasChave(){
    const texto=document.querySelector("#entrada-de-texto").value;
    const campoResultado=document.querySelector(#resultado-palavrachave");
        const palavrasChave=processaTexto(texto);
        campoResultado.textContent=palavrasChave.join(",");
 }