document.getElementById("login").addEventListener("click", () => {
    window.location.href = "https://nikhil-rawat02.github.io/shopping-project/login/login.html"
})

document.getElementById("signup").addEventListener("click", () => {
    window.location.href = "https://nikhil-rawat02.github.io/shopping-project/signup/signup.html"
})

const currentUser = localStorage.getItem("currentUser");

if (currentUser !== null) {
    window.location.href = "https://nikhil-rawat02.github.io/shopping-project/shop/shop.html";
}
console.log("object")