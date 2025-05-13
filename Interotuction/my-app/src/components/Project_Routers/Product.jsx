import React from "react";
import CartProduct from "./CartProduct";
function Product() {
  return (
    <div>
      <h1 className="text-center text-blue-500 font-serif m-2">
        Products Page
      </h1>
      <div className="flex flex-wrap justify-evenly">
        <CartProduct
          img={
            "https://cdn.pixabay.com/photo/2015/07/14/06/09/man-844212_640.jpg"
          }
        />
        <CartProduct
          img={
            "https://media.istockphoto.com/id/1250272967/fr/photo/verticale-de-lhomme-a%C3%AEn%C3%A9-choqu%C3%A9.webp?s=612x612&w=is&k=20&c=m6suLyXhRsfg78_NAvOSM5zojUOCP5E7RJYlELPwfi8="
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
