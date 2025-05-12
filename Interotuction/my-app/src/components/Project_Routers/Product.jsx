import React from "react";
import CartProduct from "./CartProduct";
function Product() {
  return (
    <div>
      <h1 className="text-center text-blue-500 font-serif m-2">
        Products Page
      </h1>
      <div className="flex flex-wrap">
        <CartProduct
          img={
            "https://cdn.pixabay.com/photo/2015/07/14/06/09/man-844212_640.jpg"
          }
        />
        <CartProduct
          img={
            "https://cdn.pixabay.com/photo/2015/07/14/06/09/man-844212_640.jpg"
          }
        />
        <CartProduct
          img={
            "https://cdn.pixabay.com/photo/2015/07/14/06/09/man-844212_640.jpg"
          }
        />
        <CartProduct
          img={
            "https://cdn.pixabay.com/photo/2015/07/14/06/09/man-844212_640.jpg"
          }
        />
        <CartProduct
          img={
            "https://cdn.pixabay.com/photo/2015/07/14/06/09/man-844212_640.jpg"
          }
        />
      </div>
    </div>
  );
}

export default Product;
