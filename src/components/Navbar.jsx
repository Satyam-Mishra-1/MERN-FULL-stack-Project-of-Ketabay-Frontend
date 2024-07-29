import React ,{useContext, useState} from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import AppContext from '../context/AppContext';

const Navbar = () => {
  const [searchTerm ,setSearchTerm ] = useState("")
  const navigate = useNavigate();
  const location = useLocation();

  const {setFilteredData , products , logout , isAuthenticated , cart } = useContext(AppContext);
  // console.log("User Cart = ",cart)

  const filterbyCategory = ( cat ) => {
       setFilteredData(products.filter((data) => data.category.toLowerCase() == cat.toLowerCase() ))
  }

   
  const filterbyPrice = ( price ) => {
    setFilteredData(products.filter((data) => data.price > price ))
}


  const submitHandler =(e)=>{
      e.preventDefault();
      navigate(`product/search/${searchTerm}`)
      setSearchTerm("")
  };

  return (
    <div className="nav sticky-top">
      <div className="nav_bar">
        <Link to={'/'} className="left" style={{textDecoration:'none',color:'white' }} >
          <h3>Kitabay</h3>
        </Link>
        <form className="search_bar" onSubmit={submitHandler}>
           <span className="material-symbols-outlined">search</span>{" "}
          <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} type="text" placeholder="Search Products..."/>
        </form>
        <div className="right">
          { isAuthenticated && (
           <> 
            
            <Link to={"/cart"} type="button" className="btn btn-primary position-relative mx-3">
                  <span className="material-symbols-outlined">
                         shopping_cart
                  </span>
               
                  { cart?.items?.length > 0 && (

               <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart?.items?.length} 
                  <span className="visually-hidden">unread messages</span>
              </span>
              
            )}
            </Link>          

   
             <Link to={'/profile'} className="btn btn-info mx-3">Profile</Link>
             <button className="btn btn-danger mx-3" onClick={()=>{
              logout();
              navigate("/");
             }}>Logout</button>

           </>
         )}

         { !isAuthenticated && (
           <>
             <Link to={'/login'} className="btn btn-secondary mx-3"> 
             Login</Link>
             <Link to={'/register'} className="btn btn-info mx-3">Register</Link>
           </>
         )}
          
        </div>
        </div>

       { location.pathname == "/" && (
            <div className="sub_bar">
           <div className="items" onClick={()=>setFilteredData(products)}>No Filter</div>
           <div className="items" onClick={()=>filterbyCategory("Child & Young Adult")}>Child & Young Adult</div>
           <div className="items" onClick={()=>filterbyCategory("Motivational")}>Motivational</div>
           <div className="items" onClick={()=>filterbyCategory("Politics")}>Politics</div>
           <div className="items" onClick={()=>filterbyCategory("Science")}>Science</div>
           <div className="items" onClick={()=>filterbyPrice(200)}>Price  &gt;200</div>
           <div className="items" onClick={()=>filterbyPrice(300)}>Price  &gt;300</div>
           <div className="items" onClick={()=>filterbyPrice(400)}>Price  &gt;400</div>
           <div className="items" onClick={()=>filterbyPrice(500)}>Price  &gt;500</div>
           <div className="items" onClick={()=>filterbyPrice(600)}>Price  &gt;600</div>   
            </div>
      )}
      
      </div>
  )
}

export default Navbar ;