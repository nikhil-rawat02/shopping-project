const ammout = document.getElementById("total_ammount").innerText;
let order_id = "";
const user = JSON.parse(localStorage.getItem("currentUser"))
const userName = user.name;
const userEmail = user.userEmail;
const userMobile = user.userMobile;
function getOrderId() {
    
}


const btn = document.getElementById("checkout_button_container");

btn.addEventListener("click", async (e) => {

    // create cart item 
    const alluserCart = JSON.parse(localStorage.getItem("curretUserCart"));
    alluserCart[currentUserEmail] = [];
    localStorage.setItem("curretUserCart", JSON.stringify(alluserCart));
    loadCartUI();
    e.preventDefault();
    // if(ammout == 0){
    //     alert("add item in cart for payment");
    //     return;
    // }

    // create order
    
    fetch('https://api.razorpay.com/v1/orders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer XQKB3kvNAt9bhg9paBc6aqNh'
  },
  body: JSON.stringify({
    amount: 1000,  // Order amount in paise (e.g., Rs. 10.00 = 1000)
    currency: 'INR',  // Currency code
    receipt: 'order_receipt'  // Receipt identifier for your reference
  })
})
.then(response => response.json())
.then(data => {
  const orderId = data.id;
  console.log('Order ID:', orderId);
  // Use the order ID for further processing
})
.catch(error => {
  console.error('Error creating order:', error);
});

    // var instance = new Razorpay({ key_id: 'rzp_test_Ye8PvD7HIK3Mcb', key_secret: 'qo5sM7ASW1dhkffwf5M33Bl3' })
    // console.log("getting orderID from razor pay");
    //  instance.orders.create({
    //     amount: 5000,
    //     currency: "INR",
    //     receipt: "receipt#1",
    //     notes: {
    //         key1: "value3",
    //         key2: "value2"
    //     }
    // })
    // console.log(response);
    // console.log("api hitting");
    // get orderid
    
    // do payment
    // payment.open();
        // console.log("payment done");
   
})