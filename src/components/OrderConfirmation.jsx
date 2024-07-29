import React, { useContext , useEffect , useState } from 'react'
import AppContext from '../context/AppContext'
import ShowOrderProduct from './ShowOrderProduct';

const OrderConfirmation = () => {
  const { userOrder } = useContext(AppContext);
  const [latestOrder, setLatestOrder] = useState({});
  
  useEffect(()=>{
    if(userOrder){
      setLatestOrder(userOrder[0]);
    }

  } , [userOrder])

  console.log("Latest Order is : ",latestOrder)

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center">Your Order have Been Confirm</h1>
        <h2 className="text-center">It will diliver Soon</h2>

      </div>




      <div className="container">
        <table className="table table-bordered border-primary bg-dark">
          <thead className="bg-dark">
            <tr>
              <th scope="col" className="bg-dark text-light text-center">Order Items</th>
              <th scope="col" className="bg-dark text-light text-center">Order Details & Shipping Address</th>
            </tr>
          </thead>
          <tbody className="bg-dark">
            <tr>

              <td className="bg-dark text-light">
                {/* <TableProduct cart={cart} /> */}
                <ShowOrderProduct items = {latestOrder?.orderItems} />
                    
              </td>
              <td className="bg-dark text-light">
                <ul style={{fontWeight:'bold'}}> 
                  <li>OrderID : {" "}{latestOrder?.orderId}</li>
                  <li>PaymentId : {" "}{latestOrder?.paymentId}  </li>
                  <li>Payment Status : {" "}{latestOrder?.payStatus} </li>
                  <li>State : {" "}{latestOrder?.userAddress?.state} </li>
                  <li>PinCode : {" "}{latestOrder?.userAddress?.pincode} </li>
                  <li>Near By :{" "} {latestOrder?.userAddress?.address}</li>

                </ul>
              </td>

            </tr>
          </tbody>
        </table>
      </div>
       


       {/* <div className="container text-center my-5">
         <button className="btn btn-secondary btn-lg" style={{fontWeight:'bold'}} 
          >Procced to Pay</button>
       </div>   */}




    </>
  )
}

export default OrderConfirmation
