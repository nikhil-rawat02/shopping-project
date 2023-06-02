const ammount = document.getElementById("total_ammount").innerText;
let order_id = "";
const user = JSON.parse(localStorage.getItem("currentUser"))
const userName = user.name;
const userEmail = user.userEmail;
const userMobile = user.userMobile;

const btn = document.getElementById("checkout_button_container");

btn.addEventListener("click", async (e) => {

    e.preventDefault();
    if(ammount == 0){
        alert("add item in cart for payment");
    }else{
        const alluserCart = JSON.parse(localStorage.getItem("curretUserCart"));
        alluserCart[currentUserEmail] = [];
        localStorage.setItem("curretUserCart", JSON.stringify(alluserCart));
        loadCartUI();
        loadSummary();
        document.getElementById("total_ammount").innerText = 0;
        alert("your order has been placed! Thankyou for shopping with us")
        window.location.href = "https://nikhil-rawat02.github.io/shopping-project/cart/cart.html";
        
    }
 // create razorpay order
        
    // fetch('https://api.razorpay.com/v1/orders', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Bearer XQKB3kvNAt9bhg9paBc6aqNh'
    //     },
    //     body: JSON.stringify({
    //       amount: amount,  // Order amount in paise (e.g., Rs. 10.00 = 1000)
    //       currency: 'INR',  // Currency code
    //       receipt: 'order_receipt'  // Receipt identifier for your reference
    //     })
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     var options = {
    //         "key": "XQKB3kvNAt9bhg9paBc6aqNh", // Enter the Key ID generated from the Dashboard
    //         "amount": ammount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    //         "currency": "INR",
    //         "name": "meShop", //your business name
    //         "description": "Test Transaction",
    //         "image": "../images/home.png",
    //         "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    //         "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    //         "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
    //             "name": userName, //your customer's name
    //             "email": userEmail,
    //             "contact": userMobile //Provide the customer's phone number for better conversion rates 
    //         },
    //         "notes": {
    //             "address": "Razorpay Corporate Office"
    //         },
    //         "theme": {
    //             "color": "#3399cc"
    //         }
    //     };
    //   })
    //   .catch(error => {
    //     console.error('Error creating order:', error);
        
    //     window.location.href("https://nikhil-rawat02.github.io/shopping-project/cart/cart.html")
    //   });
    // }

   
    

   
})