import logo from "./logo.svg";
import "./App.css";
import { ErrorMessage, useFormik, yupToFormErrors } from "formik";
import { useState } from "react";
// import Post from "./post";
import { useEffect } from "react";
import { useRef } from "react";
import { useContext } from "react";
import ProductListContext, { ProductProvider } from "./State/toDoListContext";
import ParentComponent from "./ParentComponent";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import * as Yup from "yup";
import Products, { Men, Product, Women } from "./Products";
import React from "react";
import TitleHover from "./TitleHiver";
//----------------------------------------------------------------formik----------------------------------------
// function App() {
//   const { firstName, setFirstName } = useState();

//   var validationSchema = Yup.object().shape({
//     password: Yup.string()
//       .min(2, "Too Short!")
//       .max(70, "Too Long!")
//       .required("Required"),
//     email: Yup.string().email("Invalid email").required("Required"),
//   });
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       console.log(values);
//     },
//     validate: (values) => {
//       if (!values.email) {
//         //console.log("email is missing");
//         formik.errors.email = "email is required";
//       } else if (
//         !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//           values.email
//         )
//       ) {
//         formik.errors.email = "email is not valid";
//       } else {
//         formik.errors.email = "";
//       }
//       if (!values.password) {
//         //console.log("password is missing");
//         formik.errors.password = "password is required";
//       } else {
//         formik.errors.password = "";
//       }
//     },
//   });

//   return (
//     // <Post />
//     <div>
//       {console.log(JSON.stringify(formik.touched))}
//       {console.log(formik.errors)}
//       <form>
//         <input
//           type={"text"}
//           name="email"
//           value={formik.values.email}
//           placeholder={"email"}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.errors.email && formik.touched.email ? (
//           <h6 style={{ color: "red" }}>{formik.errors.email}</h6>
//         ) : (
//           <></>
//         )}
//         <input
//           type={"password"}
//           name="password"
//           value={formik.values.password}
//           placeholder={"password"}
//           onBlur={formik.handleBlur}
//           onChange={formik.handleChange}
//         />
//         {formik.errors.password && formik.touched.password ? (
//           <h6 style={{ color: "red" }}>{formik.errors.password}</h6>
//         ) : (
//           <></>
//         )}
//         <button type="submit" onClick={formik.handleSubmit}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
//---------------------------------------------------------------------render props------------------------------
// function Counter(props) {
//   // ------------- statefull logic-------------
//   const [count, setCounter] = useState(0);
//   function Increament() {
//     setCounter(count + 1);
//   }
//   //-----------------------------------
//   // reneder props executed here
//   return <>{props.render(count, Increament)}</>;
// }

// function ClickCounter({ count, Increament }) {
//   // useEffect(() => {
//   //   console.log("in use Effect " + count);
//   // }, []);
//   return <button onClick={Increament}>Click Me -{count}</button>;
// }
//------------------------------------------------------------------------------use Ref hook-------------------------------
// function App() {
//   const name = useRef("");
//   return;
//   // return (
//   //   <>
//   //     <Counter
//   //       render={(count, inc) => <ClickCounter count={count} Increament={inc} />}
//   //     ></Counter>
//   //   </>
//   // );
// }

// function BookHolder() {
//   return (
//     <ToDoListConsumer>
//       {(book) => (
//         <>
//           <h1>{book.name}</h1>
//           <h2>{book.author}</h2>
//         </>
//       )}
//     </ToDoListConsumer>
//   );
// }

// function App() {
//   const Book = { name: "Programming Fundamentals", author: "John Rophsen" };
//   return (
//     <ToDoListProvider value={Book}>
//       <BookHolder />
//     </ToDoListProvider>
//   );
// }

// function AddProduct() {
//   const [productName, setProductName] = useState("");
//   const { addProduct } = useContext(ProductListContext);
//   return (
//     <>
//       <input
//         value={productName}
//         onChange={(e) => {
//           console.log(e.target.value);
//           setProductName(e.target.value);
//         }}
//       ></input>
//       <button
//         onClick={() => {
//           addProduct(productName);
//         }}
//       >
//         Add Product
//       </button>
//     </>
//   );
// }
// function ProductList() {
//   const { removeProduct, products } = useContext(ProductListContext);
//   return (
//     <ul>
//       {products.map((product) => (
//         <li key={product.productId}>
//           {product.productName}
//           <button
//             onClick={() => {
//               removeProduct(product.id);
//             }}
//           >
//             Delete product
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }
// function App() {
//   return (
//     <ProductProvider>
//       <AddProduct />
//       <ProductList />
//     </ProductProvider>
//   );
// }
//-----------------------------------------------------------------------routing----------------------------

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/about" element={<About />}></Route>
//         <Route path="/products" element={<Products />}>
//           <Route index element={<Women />}></Route>
//           <Route path="women" element={<Women />}></Route>
//           <Route path="men" element={<Men />}></Route>
//           <Route path="product/:id" element={<Product />}></Route>
//         </Route>
//         <Route path="*" element={<h1>Page Not Found</h1>}></Route>
//       </Routes>
//     </>
//   );
// }
//---------------------------------------------------------------------------------------------------

//--------------------------------higher order function-----------------------------------------------------
// function App() {
//   return (
//     <>
//       <ClickCounter name="nageeta" /> <TitleHover />
//     </>
//   );
// }

// --------------------------------render props----------------------------------------------

// function Counter(props) {
//   const [count, setCount] = useState(0);
//   function increament() {
//     setCount(count + 1);
//   }
//   return <>{props.render(count, increament)}</>; // render function will execute here
// }

// function ClickCounter({ count, increament }) {
//   return <button onClick={increament}>+ {count}</button>;
// }
// function App() {
//   return (
//     <Counter
//       render={(count, inc) => <ClickCounter count={count} increament={inc} />} // render function defination is here
//     ></Counter>
//   );
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       greetings: "Hello world",
//     };
//     this.sayHello = this.sayHello.bind(this);
//   }
//   sayHello() {
//     this.setState({ greetings: "Hello nigeeta " }, () =>
//       console.log(this.state.greetings)
//     );
//   }
//   render() {
//     return (
//       <>
//         <h1>{this.state.greetings}</h1>{" "}
//         <button onClick={this.sayHello}>Greet</button>
//       </>
//     );
//   }
// }
function App() {
  const [count, setCount] = useState(0);
  function Increament() {
    setCount(count + 1, ()=>setCount(count+1));
  
  }
  return <button onClick={Increament}>{count}</button>;
}
export default App;
