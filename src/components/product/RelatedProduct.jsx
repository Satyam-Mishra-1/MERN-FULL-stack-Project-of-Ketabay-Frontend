//  import React, { useContext, useEffect, useState } from 'react'
//  import AppContext from '../../context/AppContext'
//  import { Link } from 'react-router-dom';

//  const RelatedProduct = ({category}) => {
//      const {products} = useContext(AppContext);
//      const [relatedProduct,setRelatedProduct] = useState([]) ;
//      useEffect(() =>{
//           setRelatedProduct(products.filter((data)=>data.category.toLowerCase() == category.toLowerCase()))
//      },[category,products])

//   return (
//     <>
//     <div className="container text-center">
//         <h1>Related Products</h1>

//         <div className="container d-flex justify-content-center align-items-center">
//      <div className="row container d-flex justify-content-center align-items-center my-5">
//       {relatedProduct?.map((product) => (
//         <div key={product._id} className="my-3 col-md-4 d-flex justify-content-center align-items-center">
//           <div className="card bg-dark text-light text-center" style={{ width: "18rem" }} >
//             <Link to={`/product/${product._id}`} 
//              className="d-flex justify-content-center align-items-center p-3">
//               <img src={product.imgSrc} 
//               className="card-img-top" alt="..." 
//               style={{ width: '200px', height: "200px", borderRadius:'10px' ,border:'2px solid yellow'}} 
//               />
//             </Link>

//             <div className="card-body">
//               <h5 className="card-title">{product.title}</h5>
            
//               <button className="btn btn-primary mx-3">
//                 {product.price} {" Rs."}
//               </button>

//               <button className="btn btn-warning ">
//                 Add to Cart
//               </button>
//             </div>
//           </div>  

//         </div>
//       ))}
//       </div>
//       </div>

//     </div>
//       Related Products
//     </>
//   )
// }

// export default RelatedProduct


import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';

const RelatedProduct = ({ category, currentProductId }) => {
    const { products } = useContext(AppContext);
    const [relatedProduct, setRelatedProduct] = useState([]);

    useEffect(() => {
        setRelatedProduct(products.filter((data) =>
            data.category.toLowerCase() === category.toLowerCase() && data._id !== currentProductId
        ));
    }, [category, products, currentProductId]);

    return (
        <>
            <div className="container text-center">
                <h1>Related Products</h1>
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="row container d-flex justify-content-center align-items-center my-5">
                        {relatedProduct?.map((product) => (
                            <div key={product._id} className="my-3 col-md-4 d-flex justify-content-center align-items-center">
                                <div className="card bg-dark text-light text-center" style={{ width: "18rem" }}>
                                    <Link to={`/product/${product._id}`} className="d-flex justify-content-center align-items-center p-3">
                                        <img
                                            src={product.imgSrc}
                                            className="card-img-top"
                                            alt="..."
                                            style={{ width: '200px', height: "200px", borderRadius: '10px', border: '2px solid yellow' }}
                                        />
                                    </Link>
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <button className="btn btn-primary mx-3">
                                            {product.price} {" Rs."}
                                        </button>
                                        <button className="btn btn-warning">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RelatedProduct;
