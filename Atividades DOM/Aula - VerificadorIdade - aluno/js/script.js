function testaIdade() {
    const idade = document.getElementById("idade").value

    if (idade <= 12) {
        alert('Você é criança');
    }

    else if (idade > 12 && idade <= 18) {
        alert('Você é adolescente');
    }

    else if (idade < 60 && idade > 18) {
        alert('Você é adulto');
    }

    else {
        alert('Você é idoso');
    }
}
