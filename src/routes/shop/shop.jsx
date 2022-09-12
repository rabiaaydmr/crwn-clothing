import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category";
import "./shop.styles.scss";

const Shop = () => {

  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}></Route>
      <Route path=":category" index element={<Category/>}></Route>

    </Routes>
  );
};

export default Shop;
