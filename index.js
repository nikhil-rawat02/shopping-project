document.getElementById("login").addEventListener("click", () => {
    window.location.href = "./login.html"
})

document.getElementById("signup").addEventListener("click", () => {
    window.location.href = "./signup.html"
})

const currentUser = localStorage.getItem("currentUser");

if (currentUser !== null) {
    window.location.href = "./shop.html";
}