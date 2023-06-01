
function validateAndCreateUser(firstName, lastname, email,password, confirmPassword) {
    
    if(!firstName || !lastname || !email || !password || !confirmPassword){
        alert("Filds cannot be empty fill all details!");
        return;
    }else if(!email.includes('@')){
        alert("Enter a valid email id!");
        return;
    }else if(confirmPassword !== password){
        alert("Password and confirm Password does not match!");
        return;
    }

    const newUser = {
        "name" : firstName + lastname,
        "email" : email,
        "password": password
    }
    if(localStorage.getItem("user")){
        const users = localStorage.getItem("user");
        const usersObj = JSON.parse(users);
         usersObj[0].push(newUser)
         localStorage.setItem("user", JSON.stringify(usersObj))
    }else{
        const usersObj = {
            "0" : [newUser,]
        }

        localStorage.setItem("user",JSON.stringify(usersObj));
    }
    
    window.location.href = "./login.html"
    alert("Signup Successfull, try Login");
}

document.getElementById("signup_user").addEventListener("click",(e) => {
    e.preventDefault();

    const firstName = document.getElementById("signup_firstname").value;
    const lastname = document.getElementById("signup_lastname").value;
    const email = document.getElementById("signup_email").value;
    const password = document.getElementById("signup_password").value;
    const confirmPassword = document.getElementById("signup_confirm_password").value;

    validateAndCreateUser(firstName, lastname, email,password, confirmPassword);
})
