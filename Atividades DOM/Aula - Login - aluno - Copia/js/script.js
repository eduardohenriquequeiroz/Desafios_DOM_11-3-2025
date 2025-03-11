function login() {
    const login = document.getElementById("username").value
    const senha = document.getElementById("password").value

    if (login === "adm" || senha === "123456") {
        window.location = "adm.html";
    } else {
        alert('Login ou senha incorretos');
    }
}