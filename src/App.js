import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from './Contact';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from "styled-components";

const App = () => {
  const theme = {
    colors:{
      bg:"#000"
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/singleproducts/:id" element={<SingleProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
