import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProductsData = createAsyncThunk("products/productData", async () => {

  const [productRes, categoriesRes] = await Promise.all(
    [
      fetch("https://fakestoreapi.com/products"),
      fetch("https://fakestoreapi.com/products/categories")
    ]
  );

  const productsData = await productRes.json();
  const productsCategories = await categoriesRes.json();

  return {
    productsData,
    productsCategories
  };

});

export const fetchSingleProduct = createAsyncThunk("products/fetchSingleProduct", async (id) => {
  const SingleProductRes = await fetch(`https://fakestoreapi.com/products/${id}`);
  const singleProduct = await SingleProductRes.json();
  return singleProduct;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    categories: [],
    singleProduct: null,
    search: "",
    filterCategory: "",
    sort: "",
    loading: false,
    error: ""
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilterCategory: (state, action) => {
      state.filterCategory = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.productsData;
        state.categories = action.payload.productsCategories;
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.payload;
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.payload;
      })
  }
});

export default productsSlice.reducer;
export const { setSearch, setFilterCategory, setSort } = productsSlice.actions;