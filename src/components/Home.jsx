import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
const img1 =
  "https://th.bing.com/th/id/OIP.qYXruQDUjv_NNypoOPWDVAHaE8?pid=ImgDet&rs=1";
const img2 =
  "https://th.bing.com/th/id/OIP.GpGHhezp0miQAurW5k7iKAHaHZ?pid=ImgDet&rs=1";
const Home = () => {
  const productList = [
    { name: "Mac Book", price: 125000, imgSrc: img1, id: "fghyjtsafve" },
    {
      name: "Black berry",
      price: 109,
      imgSrc: img2,
      id: "dfbsdffv",
    },
  ];
  const dispatch = useDispatch();
  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    toast.success("Added To Cart");
    dispatch({type:"calculatePrice"})
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => {
  return (
    <div className="productCard">
      <img src={imgSrc} alt="" />
      <p>{name}</p>
      <h4>${price}</h4>
      <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
        Add to Cart
      </button>
    </div>
  );
};
export default Home;
