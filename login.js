
function loginToShopPage() {

    return new Promise((resolve, reject) => {
        const email = document.getElementById("login_form_input_email").value;
        const password = document.getElementById("login_form_input_password").value;
        const usersDetails = JSON.parse(localStorage.getItem("user"));
        if (usersDetails) {
            usersDetails[0].map((user) => {
                if (user.email === email && user.password === password) {
                    const currentUser = {
                        "email" : email,
                        "password" : password,
                    }
                    localStorage.setItem("currentUser", JSON.stringify(currentUser));
                    localStorage.setItem("curretUserCart", JSON.stringify({"item" : []}));

                    
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
            window.location.href = "./loading.html"
            setTimeout(()=>{
                console.log('resolve')
                window.location.href = "./shop.html"
            },2000)
        })
        .catch(() => {
            alert("Wrong Credentials");
        })
})
