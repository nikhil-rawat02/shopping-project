const ammout = document.getElementById("total_ammount").innerText;
let order_id = "";
const user = JSON.parse(localStorage.getItem("currentUser"))
const userName = user.name;
const userEmail = user.userEmail;
const userMobile = user.userMobile;
function getOrderId() {
    
}
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

btn.addEventListener("click", async (e) => {

    // create cart item 
    const alluserCart = JSON.parse(localStorage.getItem("curretUserCart"));
    alluserCart[currentUserEmail] = [];
    localStorage.setItem("curretUserCart", JSON.stringify(alluserCart));
    loadCartUI();
    e.preventDefault();
    if(ammout == 0){
        alert("add item in cart for payment");
        return;
    }
    var instance = new Razorpay({ key_id: 'rzp_test_Ye8PvD7HIK3Mcb', key_secret: 'qo5sM7ASW1dhkffwf5M33Bl3' })
    console.log("getting orderID from razor pay");
    const response = await instance.orders.create({
        amount: ammout,
        currency: "INR",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        }
    })
    console.log(response);
    console.log("api hitting");
    // get orderid
    
    // do payment
    // payment.open();
        // console.log("payment done");
   
})