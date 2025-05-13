import React from "react";

function CartProduct(props) {
  return (
    <div className="flex flex-col justify-around items-center h-[600px] w-96 mx-3 my-4 border-purple-400 border-2 overflow-hidden shadow-[0_0_10px_black] rounded-3xl">
      <div className="h-3/5 w-full bg-red-600 overflow-hidden">
        <img src={props.img} alt="" className="object-cover h-full w-full" />
      </div>
      <div className="h-2/5 w-full bg-blue-700">
        <div className="h-1/3 w-full p-2">
          {" "}
          <h1>Titles product</h1>
        </div>
        <div className="h-2/3 w-full flex flex-row bg-red-50 text-center justify-around items-center p-2">
          <div className="h-full w-4/5">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              sunt repellat beatae error corporis explicabo consectetur minus
              unde, harum exercitationem ex dolor ratione voluptatum. Ad
              deleniti explicabo eligendi cupiditate rerum?
            </p>
          </div>
          <div className="h-full w-1/5 bg-red-500 flex justify-center items-center text-center">
            price
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
