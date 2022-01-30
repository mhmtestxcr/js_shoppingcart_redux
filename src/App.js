import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Cart from "./component/Cart";
import { connect } from "react-redux";

// import { data } from "./data";

const App = (props) => {
  console.log(props.bookList);
  return (
    <div className="App">
      <h1>
        Alışveriş Sepeti Yapımı
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
        />{" "}
        React Dersleri
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

const mapStateToProps = state =>{
  return{
    bookList: state.bookList
  }
}


export default connect(mapStateToProps)(App);

// export default App();
