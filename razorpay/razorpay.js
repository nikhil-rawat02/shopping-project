const ammout = 0;
const order_id = Math.ceil(Math.random()*100).toString();
const user = JSON.parse(localStorage.getItem("currentUser"))
const userName = user.name;
const userEmail = user.userEmail;
const userMobile = user.userMobile;
var options = {
    "key": "rzp_test_Ye8PvD7HIK3Mcb", // Enter the Key ID generated from the Dashboard
    "amount": ammout, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "MeShop.", //your business name
    "description": "Test Transaction",
    "image": "../images/home.png",
    "order_id": order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": userName, //your customer's name
        "email": userEmail,
        "contact": userMobile //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var payment = new Razorpay(options);
const btn = document.getElementById("checkout_button_container");
console.log(btn)
btn.addEventListener("click", (e)=>{
    console.log("api hitting");
    rzp1.open();
    console.log("payment done");
    e.preventDefault();
})