import { actions } from "./StateAndActions";

const productReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_PRODUCT:
      console.log("from reducer");
      console.log(action);
      return {
        products: [
          ...state.products,
          {
            id: state.products.length,
            productName: action.productName,
          },
        ],
      };

    case actions.REMOVE_PRODUCT:
      console.log(action);
      const filteredProducts = state.products.filter(
        (item) => item.id !== action.productId
      );
      return { products: [...filteredProducts] };

    default:
      return state;
  }
};
export { productReducer };
