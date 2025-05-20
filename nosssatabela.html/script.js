let button = document.querySelector("#mensagem")
button.style.background="black"

 button.addEventListener("mouseover", e =>{button.style.background="green";})

    button.addEventListener("mouseout", e =>{button.style.background="blue"});

    function mensagem(){document.getElementById("mensagem").textContent= "JESUS TE AMA"}
  