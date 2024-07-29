import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import TableProduct from "./TableProduct";
import axios from 'axios'
import {useNavigate}  from 'react-router-dom'

const Checkout = () => {
  const { cart , userAddress , url, user, clearCart } = useContext(AppContext);
  
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    let qty = 0;
    let price = 0;
    if (cart?.items) {
      for (let i = 0; i < cart.items?.length; i++) {
        qty += cart.items[i].qty;
        price += cart.items[i].price;
      }
    }
    setPrice(price);
    setQty(qty);
  }, [cart]);

  const handlePayment = async() =>{
    try{
        const orderRepons = await axios.post(`${url}/payment/checkout`,{
           amount : price,
           qty:qty,
           cartItems : cart?.items,
           userShipping : userAddress,
           userId : user._id,

        });

        // console.log("Order Response : ",orderRepons );
     
      const {orderId , amount:orderAmount } = orderRepons.data 
      const options = {
      key: "rzp_test_7wIbCVZ1XnAgtI", 
      amount: orderAmount*100, 
      currency: "INR",
      name: "Kitabay",  // It's an Name which will display on razorpay 
      description: "Reads a lot of Book",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        
        handler: async function (response){
        const paymentData = {
          orderId : response.razorpay_order_id ,
          paymentId : response.razorpay_payment_id ,
          signature : response.razorpay_signature,
          amount : orderAmount,
          orderItems : cart?.items,
          userId : user._id,
          userShipping : userAddress,
        };

        const api = await axios.post(`${url}/payment/verify-payment`,paymentData)

      if(api.data.success){
        clearCart();
        navigate('/orderconfirmation')
      }
        },
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
    }
    catch(error){
      console.log(error);
    }
  };

  return (
    <>
      <div className="container text-center my-3">
        <h1 className="text-center">Order Summary</h1>

        <table className="table table-bordered border-primary bg-dark">
          <thead className="bg-dark">
            <tr>
              <th scope="col" className="bg-dark text-light text-center">Product Details</th>
              <th scope="col" className="bg-dark text-light text-center">Shipping Address</th>
            </tr>
          </thead>
          <tbody className="bg-dark">
            <tr>

              <td className="bg-dark text-light">
                <TableProduct cart={cart} />
                    
              </td>
              <td className="bg-dark text-light">
                <ul style={{fontWeight:'bold'}}> 
                  <li>Name : {" "}{userAddress?.fullName} </li>
                  <li>Phone : {" "}{userAddress?.phoneNumber}  </li>
                  <li>Country : {" "}{userAddress?.country} </li>
                  <li>State : {" "}{userAddress?.state} </li>
                  <li>PinCode : {" "}{userAddress?.pincode} </li>
                  <li>Near By :{" "} {userAddress?.address}</li>

                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
       
       <div className="container text-center my-5">
         {/* <button className="btn btn-secondary btn-lg" style={{fontWeight:'bold'}}  onClick={{handlePayment}} */}
          {/* //  onClick={confirm("Payment is Confirmed ....")} */}
          {/* >Procced Here</button> */}


          <button className="btn btn-secondary btn-lg" style={{fontWeight:'bold'}} onClick={handlePayment}>Procced Here</button>

       </div>
    </>
  );
};

export default Checkout;
