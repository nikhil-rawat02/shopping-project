document.getElementById("user-logout").addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("currentUser");
    localStorage.removeItem("curretUserCart");
    window.location.href = "./index.html"
})
document.getElementById("profile_saveinfo_btn").addEventListener("click", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("profile_input_firstname").value;
    const lastName = document.getElementById("profile_input_lastname").value;

    const usersDetails = JSON.parse(localStorage.getItem("user"));
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    
        usersDetails[0].map((user) => {
            if (user.email === currentUser.email) {
                console.log("before => " ,user.name)
                user.name = `${firstName} ${lastName}`
                console.log("after => ",user.name)
            }
        })
        localStorage.setItem("user", JSON.stringify(usersDetails))
    
})

document.getElementById("profile_change_password_btn").addEventListener("click", (e) => {
    e.preventDefault();

    const oldPassword = document.getElementById("profile_input_old_password").value;
    const newPassword = document.getElementById("profile_input_new_password").value;
    const confirmNewPassword = document.getElementById("profile_input_cofirm_password").value;

    if(newPassword !== confirmNewPassword){
        alert("Confirm Password does not match")
        return;
     }

    const usersDetails = JSON.parse(localStorage.getItem("user"));
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))

    let isPasswordUpdated = false;
        usersDetails[0].map((user) => {
            if (user.password === oldPassword) {
                console.log("before => " ,user.password)
                user.password = newPassword;
                currentUser.password = newPassword;
                localStorage.setItem("user", JSON.stringify(usersDetails))
                localStorage.setItem("currentUser", JSON.stringify(currentUser));
                isPasswordUpdated = true;
                console.log("after => " ,user.password)
            }
        })
        if(!isPasswordUpdated){
            alert("Old password is wrong!");
        }
        
    
})

const currentUser = localStorage.getItem("currentUser");

if(currentUser === null){
    console.log(currentUser)
    window.location.href = "./index.html";
}

const linkTag = document.querySelectorAll(".navbar_right_container a");
for(let i =1; i < 3 ; i++){
    linkTag[i].removeAttribute("href");
}