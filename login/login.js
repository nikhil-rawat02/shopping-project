function updatedUserCartInLocalStorage(email){
    const currentUserCart = localStorage.getItem("curretUserCart");
    if(currentUserCart === null){
        localStorage.setItem("curretUserCart", JSON.stringify({ [email]: [] }));
    }else{
        const userCartObject = JSON.parse(currentUserCart);
        userCartObject = {...userCartObject, [email]:[]};
        localStorage.setItem("curretUserCart", JSON.stringify(userCartObject));
    }
}
function loginToShopPage() {
    return new Promise((resolve, reject) => {
        const email = document.getElementById("login_form_input_email").value;
        const password = document.getElementById("login_form_input_password").value;
        const usersDetails = JSON.parse(localStorage.getItem("user"));
        if (usersDetails) {
            usersDetails[0].map((user) => {
                if (user.email === email && user.password === password) {
                    const currentUser = {
                        "name" : user.name,
                        "email": email,
                        "password": password,
                    }
                    localStorage.setItem("currentUser", JSON.stringify(currentUser));
                    updatedUserCartInLocalStorage(email);
                    resolve(true);
                }
            })
        }
        reject(false);
    });
}

document.getElementById("login_form_btn").addEventListener("click", async (e) => {
    e.preventDefault();
    const userloggedIn = loginToShopPage();
    userloggedIn
        .then(() => {
            window.location.href = "https://nikhil-rawat02.github.io/shopping-project/loading.html"
        })
        .catch(() => {
            alert("Wrong Credentials");
        })
})
