// import axios from 'axios';
// import React, { useEffect,useState } from 'react'
// import { useParams } from 'react-router-dom'
// import RelatedProduct from './RelatedProduct';

// const ProductDetail = () => {
//        const [product,setProduct] = useState();
//       const {id} = useParams();
//       const url = "http://localhost:1000/api";
  
    
//     useEffect(() =>{
//       const fetchProduct = async ()=>{
//            const api = await axios.get(`${url}/product/${id}`,{
//             headers:{
//               "Content-Type":"Application/json",
//             },
//             withCredentials:true
  
//             })
//             // console.log(api.data.product)
//             setProduct(api.data.product)
//             //setProducts(api.data.products)
//       }
//       fetchProduct();
  
//     }, [id]);
//   return (
//     <>
//        <div className="container text-center my-5" style={{
//          display:'flex',
//          justifyContent:'space-evenly',
//          alignItems:'center'
//        }}>
//         <div className="left">
//             <img src={product?.imgSrc} alt="" style={{width:'250px',height:'250px', borderRadius:'10px',border:"2px solid yellow" }} />
//         </div>
//         <div className="right">
//             <h1>{product?.title}</h1>
//             <p>{product?.description}</p>
//             <h1>{product?.price} {" Rs."}</h1>
//             {/* <h3>{product.category}</h3> */}

//             <div className='my-5'>   
//                 <button className='btn btn-danger mx-3' style={{fontWeight:'bold'}}>Buy Now</button>
//                 <button className='btn btn-warning' style={{fontWeight:'bold'}}>Add To Cart</button>
//             </div>

//         </div>
//        </div>

//        <RelatedProduct category={product?.category} />
    
//     </>
//   )
// }

// export default ProductDetail;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RelatedProduct from './RelatedProduct';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const url = "http://localhost:1000/api";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const api = await axios.get(`${url}/product/${id}`, {
          headers: {
            "Content-Type": "Application/json",
          },
          withCredentials: true,
        });
        setProduct(api.data.product);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container text-center my-5" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <div className="left">
          <img src={product?.imgSrc} alt="" style={{ width: '250px', height: '250px', borderRadius: '10px', border: "2px solid yellow" }} />
        </div>
        <div className="right">
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <h1>{product?.price} {" Rs."}</h1>
          <div className='my-5'>
            <button className='btn btn-danger mx-3' style={{ fontWeight: 'bold' }}>Buy Now</button>
            <button className='btn btn-warning' style={{ fontWeight: 'bold' }}>Add To Cart</button>
          </div>
        </div>
      </div>

      {product && <RelatedProduct category={product.category} currentProductId={product._id} />}
    </>
  );
}

export default ProductDetail;
