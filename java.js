const enviar = () => {
    let nome = (document.getElementById("nome").value)

    if (Number(document.getElementById("escolha").value) === 10){
        alert("Seu cadastro foi efetuado com sucesso " + nome)
    }
    else if(Number(document.getElementById("escolha").value) === 7){
        alert("Seu cadastro foi efetuado com sucesso " + nome)
    }
    else if(Number(document.getElementById("escolha").value) === 5){
        alert("Seu cadastro foi efetuado com sucesso " + nome)
        alert("Tentaremos melhorar a sua experiência no site")
    }
    else if(Number(document.getElementById("escolha").value) === 0){
        alert("Seu cadastro foi efetuado com sucesso " + nome)
        prompt("O que poderíamos melhorar?")
        alert("Obrigado.")
    }
}