import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import prodCategoryReducer from "../features/prodCategory/prodCategorySlice";
import blogReducer from "../features/blogs/blogSlice";
import blogCategoryReducer from "../features/blogCategory/blogCategorySlice";
import uploadReducer from "../features/upload/uploadSlice";


export const Store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    prodCategory: prodCategoryReducer,
    blog: blogReducer,
    blogCategory: blogCategoryReducer,
    upload: uploadReducer,
  },
});
