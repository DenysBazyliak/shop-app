import { Box } from "@mui/material";

import { Product } from "./Product/Product.tsx";

import "./ProductList.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.tsx";
import { getProducts, setForm, setProduct } from "../../store/productsSlice.ts";
import { SelectedProduct } from "./SelectedProduct/SelectedProduct.tsx";
import { FormComponent } from "../Form/Form.tsx";
import { productId } from "../../utilities/utilities.tsx";

export const ProductList = () => {
  const dispatch = useAppDispatch();

  const productsData = useAppSelector((state) => state.products.products);
  const product = useAppSelector((state) => state.products.product);
  console.log("productsData", productsData);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const formState = useAppSelector((state) => state.products.formState);

  const products = productsData.map((product) => (
    <Product key={productId()} {...product} />
  ));

  if (product) {
    return (
      <Box className={"main"}>
        <div
          className={"dimmingDiv"}
          onClick={() => {
            return dispatch(setProduct(null));
          }}
        >
          <div className={"wrapper"}>{products}</div>
        </div>
        <div className={"selected"}>
          <SelectedProduct key={product.id} {...product} />
        </div>
      </Box>
    );
  } else if (formState) {
    return (
      <Box className={"main"}>
        <div
          className={"dimmingDiv"}
          onClick={() => {
            return dispatch(setForm(false));
          }}
        >
          <div className={"wrapper"}>{products}</div>
        </div>
        <div className="selected">
          <FormComponent />
        </div>
      </Box>
    );
  } else {
    return (
      <Box className={"main"}>
        <div className={"wrapper"}>{products}</div>
      </Box>
    );
  }
};
