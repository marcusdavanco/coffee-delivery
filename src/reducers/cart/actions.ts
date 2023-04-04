import { Product } from "./reducer";

export enum ActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
}

export function addProductAction(newProduct: Product) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      product: {
        newProduct,
      },
    },
  };
}

export function removeProductAction(id: number) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      id,
    },
  };
}
