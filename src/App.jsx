import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse";
import WishlistPage from "./pages/WishList/WishlistPage";
import AddToCartPage from "./pages/AddToCartPage/AddToCartPage";
import SearchProductPage from "./pages/SearchProductPage/SearchProductPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage/ProductDescriptionPage";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<SignInPage />} />
        <Route path='signup' element={<SignUpPage />} />
        <Route path='home' element={<HomePage />} />
        <Route path='results' element={<ResultsPage />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path='privacyPolicy' element={<PrivacyPolicy />} />
        <Route path='termsofuse' element={<TermsOfUse />} />
        <Route path='wishlist' element={<WishlistPage />} />
        <Route path='productdetails' element={<ProductDescriptionPage />} />
        <Route path='cart' element={<AddToCartPage />} />
        <Route path='searchPage' element={<SearchProductPage />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;
