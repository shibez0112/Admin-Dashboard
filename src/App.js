import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import MainLayout from "./components/MainLayout";
import Enquiries from "./pages/Enquiries";
import BlogList from "./pages/BlogList";
import BlogCatList from "./pages/BlogCatList";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ColorList from "./pages/ColorList";
import CategoryList from "./pages/CategoryList";
import BrandList from "./pages/BrandList";
import ProductList from "./pages/ProductList";
import AddBlog from "./pages/AddBlog";
import AddBlogCat from "./pages/AddBlogCat";
import AddColor from "./pages/AddColor";
import AddCategory from "./pages/AddCategory";
import AddBrand from "./pages/AddBrand";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="enquiries" element={<Enquiries />}></Route>
          <Route path="blog-list" element={<BlogList />}></Route>
          <Route path="blog-category-list" element={<BlogCatList />}></Route>
          <Route path="blog-category" element={<AddBlogCat />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="customers" element={<Customers />}></Route>
          <Route path="color" element={<AddColor />}></Route>
          <Route path="color-list" element={<ColorList />}></Route>
          <Route path="category" element={<AddCategory />}></Route>
          <Route path="category-list" element={<CategoryList />}></Route>
          <Route path="brand" element={<AddBrand />}></Route>
          <Route path="brand-list" element={<BrandList />}></Route>
          <Route path="product-list" element={<ProductList />}></Route>
          <Route path="product" element={<AddProduct />}></Route>
          <Route path="blog" element={<AddBlog />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
