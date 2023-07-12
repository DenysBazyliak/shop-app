import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductInterface } from "../utilities/model/model.ts";

type State = {
  products: ProductInterface[];
  product: ProductInterface | null;
  status: string;
  formState: boolean;
};
const initialState: State = {
  products: [],
  product: null,
  status: "idle",
  formState: false,
};
const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct(state, action) {
      state.product = action.payload;
    },
    setForm(state, action) {
      state.formState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        console.log("action.payload", action.payload);
        state.products = action.payload;
        state.status = "idle";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { setProduct, setForm } = productsSlice.actions;
export const getProducts = createAsyncThunk("products/get", async () => {
  let result = [];
  try {
    const data = await fetch("http://localhost:3001/products");
    if (data) {
      result = await data.json();
    }
    return result;
  } catch (e) {
    console.error("Error", e);
  }
  return result;
});
export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id: string, thunkAPI) => {
    try {
      const data = await fetch("http://localhost:3001/products/" + id, {
        method: "DELETE",
      });
      if (data.ok) {
        thunkAPI.dispatch(getProducts());
      }
    } catch (e) {
      console.error("Error", e);
    }
  }
);
export const postProduct = createAsyncThunk(
  "products/post",
  async (obj: object, thunkAPI) => {
    console.log(JSON.stringify(obj));
    try {
      const data = await fetch("http://localhost:3001/products/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });
      console.log("data", data);
      if (data.ok) {
        thunkAPI.dispatch(getProducts());
      }
    } catch (e) {
      console.error("Error", e);
    }
  }
);

export default productsSlice.reducer;
