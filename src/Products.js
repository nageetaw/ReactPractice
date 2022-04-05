import React from "react";
import { createSearchParams, NavLink, useSearchParams } from "react-router-dom";
import { Outlet, useNavigate, useParams } from "react-router";
import { useEffect } from "react";
class Products extends React.Component {
  render() {
    return (
      <>
        <h1>Products</h1>
        <ul>
          <NavLink to={"women"}>
            <li>Women</li>
          </NavLink>
          <NavLink to={"men"}>
            <li>Men</li>
          </NavLink>
          <NavLink to={"product/bodyWash"}>
            <li>product</li>
          </NavLink>
        </ul>
        <Outlet></Outlet>
      </>
    );
  }
}
export default Products;

function Women() {
  return <h1>Women</h1>;
}
function Men() {
  return <h1>Men</h1>;
}
function Product() {
  const { id, name } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = createSearchParams();
  return (
    <>
      <h1>
        Product no. {id} : {name}
      </h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back to Home
      </button>
      <button
        onClick={() => {
          // searchParams.set("price", 200);
          // console.log(params.get("price"));
          params.set("price", 200);
          // params.set("color", "grey");
          setSearchParams(params);
        }}
      >
        price : 200
      </button>
      <button
        onClick={() => {
          // // console.log(params.get("price"));
          // searchParams.set("color", "grey");
          // // console.log(params.get("color"));
          params.set("color", "grey");
          setSearchParams(...searchParams, params);
        }}
      >
        colors : grey
      </button>
    </>
  );
}
export { Women, Men, Product };
