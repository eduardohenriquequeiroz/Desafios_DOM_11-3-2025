function calcularCursos() {
    const natureza = document.getElementById('natureza').value;
    const humanas = document.getElementById('natureza').value;
    const linguagens = document.getElementById('natureza').value;
    const matematica = document.getElementById('natureza').value;
    const redacao = document.getElementById('natureza').value;

    media = (parseInt(natureza) + parseInt(humanas) + parseInt(linguagens) + parseInt(matematica) + parseInt(redacao)) / 5;

    if (media >= 750) {
        alert("Você passaria em Medicina, Engenharia Aeronáutica e Direirto");
    }

    else if (media < 750 && media >= 600) {
        alert("Você passaria em Engenharia Civil, Administração e Psicologia");
    }

    else if (media < 600 && media >= 450) {
        alert("Você passaria em Pedagogia, Letras e Ciências Sociais");
    }

    else {
        alert("Infelizmente, sua nota está abaixo da nota mínima.")
    }
}

