import React from "react";
import { useReducer } from "react";
import { productReducer } from "./Reducer";
import { actions, initialState } from "./StateAndActions";
const ProductListContext = React.createContext();

const ProductProvider = (props) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const value = {
    products: state.products,
    addProduct: (productName) => {
      dispatch({ type: actions.ADD_PRODUCT, productName: productName }); // dispatch takes action
    },
    removeProduct: (productId) => {
      console.log("++++++" + productId);
      dispatch({ type: actions.REMOVE_PRODUCT, productId: productId });
    },
  };
  return (
    <ProductListContext.Provider value={value}>
      {props.children}
    </ProductListContext.Provider>
  );
};
export default ProductListContext;
export { ProductProvider };
