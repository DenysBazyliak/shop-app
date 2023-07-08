import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Product} from "../components/Model/model.ts";

type State = {
    products: Product[];
    product: Product;
    status: string;
};
const initialState: State = {
    products: [],
    product: {
        id:'',
        imageUrl:'',
        name:'',
        count:0,
        size:{
            width:0,
            height:0,
        },
        weight:''
    },
    status: "idle",
};
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = "idle";
            })
            .addCase(getProducts.rejected, (state) => {
                state.status = "error";
            })
    },
});

export const {} = productSlice.actions;
export const getProducts = createAsyncThunk("products/get", async () => {
    const data = await fetch("http://localhost:3001/products");
    return await data.json();
});

export default productSlice.reducer;