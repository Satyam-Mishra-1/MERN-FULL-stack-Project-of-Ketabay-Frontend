// import React, { useContext } from 'react'
// import { useState } from 'react'
// import AppContext from '../../context/AppContext'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//   const { login } = useContext(AppContext)
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//      email:"",
//      password:"",
//   })

//    const onChangeHandler = async(e) =>{
//       const {name, value} = e.target 
//       setFormData({...formData,[name]:value})
//    }

//   const {email,password} = formData  
//   const submitHandler = async (e) =>{
//       e.preventDefault();
//       // alert("Your Form has been Submited")
//      const result = await login(email,password)

     
//      if(result.success){
//       navigate('/')
//      }

//       //console.log(formData);
//   } 

//   return (
//     <>
//     <div className="container my-5 p-4" style={{width:"600px",border:'2px solid yellow',borderRadius:'10px'}}>
//       <h1>User Login </h1>
//        <form onSubmit={submitHandler} className='my-3'>
       

//        <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//           <input name="email" value={formData.email} onChange={onChangeHandler} type="email" className="form-control" 
//           id="exampleInputEmail1" aria-describedby="emailHelp" />
//        </div>    
  
//        <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//           <input name="password" value={formData.password} onChange={onChangeHandler} type="password" className="form-control" 
//           id="exampleInputPassword1" /> 
//        </div>

//        <div className="d-grid col-6 mx-auto my-3">
//            <button type="submit" className="btn btn-primary">Login</button>
//        </div>
      
  
// </form>
//    </div>
//     </>
//   )
// }

// export default Login



// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AppContext from '../../context/AppContext';
// import { ToastContainer, toast, Bounce } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const { login } = useContext(AppContext);
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const { email, password } = formData;

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const result = await login(email, password);

//     if (result.success) {
//       toast.success(result.message, {
//         position: "top-right",
//         autoClose: 1499,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//         transition: Bounce,
//       });
//       navigate('/');
//     } else {
//       toast.error(result.message, {
//         position: "top-right",
//         autoClose: 1499,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//         transition: Bounce,
//       });
//     }
//   };

//   return (
//     <>
//       <div className="container my-5 p-4" style={{ width: "600px", border: '2px solid yellow', borderRadius: '10px' }}>
//         <h1>User Login</h1>
//         <form onSubmit={submitHandler} className='my-3'>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//             <input name="email" value={formData.email} onChange={onChangeHandler} type="email" className="form-control"
//               id="exampleInputEmail1" aria-describedby="emailHelp" />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//             <input name="password" value={formData.password} onChange={onChangeHandler} type="password" className="form-control"
//               id="exampleInputPassword1" />
//           </div>

//           <div className="d-grid col-6 mx-auto my-3">
//             <button type="submit" className="btn btn-primary">Login</button>
//           </div>
//         </form>
//         <ToastContainer />
//       </div>
//     </>
//   );
// };

// export default Login;


// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AppContext from '../../context/AppContext';
// import { ToastContainer, toast, Bounce } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const { login } = useContext(AppContext);
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const { email, password } = formData;

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const result = await login(email, password);

//     if (result.success) {
//       toast.success(result.message || 'Login successful!', {
//         position: "top-right",
//         autoClose: true,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//         transition: Bounce,
//       });
//       setTimeout(() => navigate('/'), 1500); // Delayed navigation to allow toast display
//     } else {
//       toast.error(result.message || 'Login failed!', {
//         position: "top-right",
//         autoClose: 1500,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//         transition: Bounce,
//       });
//     }
//   };

//   return (
//     <>
//       <div className="container my-5 p-4" style={{ width: "600px", border: '2px solid yellow', borderRadius: '10px' }}>
//         <h1>User Login</h1>
//         <form onSubmit={submitHandler} className='my-3'>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//             <input name="email" value={formData.email} onChange={onChangeHandler} type="email" className="form-control"
//               id="exampleInputEmail1" aria-describedby="emailHelp" />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//             <input name="password" value={formData.password} onChange={onChangeHandler} type="password" className="form-control"
//               id="exampleInputPassword1" />
//           </div>

//           <div className="d-grid col-6 mx-auto my-3">
//             <button type="submit" className="btn btn-primary">Login</button>
//           </div>
//         </form>
//         <ToastContainer />
//       </div>
//     </>
//   );
// };

// export default Login;


import React, { useContext } from "react";
import { useState } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    
    email: "",
    password: "",
  });
  const onChangerHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const {  email, password } = formData;
  const submitHandler = async (e) => {
    e.preventDefault();
    // alert("Your form has been submited")

    const result = await login( email, password);

    if (result.success) {
      navigate("/");
    }

    // console.log(formData);
  };
  return (
    <>
      <div
        className="container my-5 p-4"
        style={{
          width: "600px",
          border: "2px solid yellow",
          borderRadius: "10px",
        }}
      >
        <h1 className="text-center">User Login</h1>
        <form onSubmit={submitHandler} className="my-3">
          
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={onChangerHandler}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              value={formData.password}
              onChange={onChangerHandler}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="d-grid col-6 mx-auto my-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;