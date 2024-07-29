// import React, { useContext, useEffect, useState } from 'react';
// import AppContext from '../../context/AppContext';
// import { Link , useParams} from 'react-router-dom';

// const SearchProduct = () => {
//     const { products } = useContext(AppContext);
//     const [searchProduct, setSearchProduct] = useState([]);

//     const {term} = useParams()

//     useEffect(() => {
//         setSearchProduct(products.filter((data) =>
//             data?.title?.toLowerCase().includes(term.toLowerCase())
//         ));
//     }, [term, products]);

//     return (
//         <>
//             <div className="container text-center">
//                 <h1>Related Products</h1>
//                 <div className="container d-flex justify-content-center align-items-center">
//                     <div className="row container d-flex justify-content-center align-items-center my-5">
//                         {searchProduct?.map((product) => (
//                             <div key={product._id} className="my-3 col-md-4 d-flex justify-content-center align-items-center">
//                                 <div className="card bg-dark text-light text-center" style={{ width: "18rem" }}>
//                                     <Link to={`/product/${product._id}`} className="d-flex justify-content-center align-items-center p-3">
//                                         <img
//                                             src={product.imgSrc}
//                                             className="card-img-top"
//                                             alt="..."
//                                             style={{ width: '200px', height: "200px", borderRadius: '10px', border: '2px solid yellow' }}
//                                         />
//                                     </Link>
//                                     <div className="card-body">
//                                         <h5 className="card-title">{product.title}</h5>
//                                         <button className="btn btn-primary mx-3">
//                                             {product.price} {" Rs."}
//                                         </button>
//                                         <button className="btn btn-warning">
//                                             Add to Cart
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default SearchProduct;


import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { Link, useParams } from 'react-router-dom';

const SearchProduct = () => {
    const { products } = useContext(AppContext);
    const [searchProduct, setSearchProduct] = useState([]);
    const { id: term } = useParams(); // Use 'id' instead of 'term'

    useEffect(() => {
        if (products.length > 0 && term) {
            setSearchProduct(products.filter((data) =>
                data.title.toLowerCase().includes(term.toLowerCase())
            ));
        }
    }, [term, products]);

    return (
        <>
            <div className="container text-center">
                <h1>Related Products</h1>
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="row container d-flex justify-content-center align-items-center my-5">
                        {searchProduct?.map((product) => (
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

export default SearchProduct;
