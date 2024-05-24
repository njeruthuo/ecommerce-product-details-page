import nextIcon from "../images/icon-next.svg";
import cartIcon from "../images/icon-cart.svg";
import previous from "../images/icon-previous.svg";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import { useState } from "react";
import { shoes } from "../utils/data";
import useCart from "../utils/useCart";

const Home = () => {
  const [next, setNext] = useState(1);
  const [quantity, setQuantity] = useState(0);
  const { setCart } = useCart();

  function handleNext() {
    if (next >= 3) {
      setNext(next - 2);
    } else {
      setNext((prev) => prev + 1);
    }
  }

  function handlePrevious() {
    if (next <= 1) {
      setNext(next + 2);
    } else {
      setNext((prev) => prev - 1);
    }
  }

  function decreaseQuantity() {
    if (quantity < 1) {
      return;
    }
    setQuantity((prev) => prev - 1);
  }

  const img1 = shoes.find((shoe) => shoe.id === next)?.img?.img1;

  function handleAddToCart() {
    const obj = shoes.find((shoe) => shoe.id === next);
    if (obj) {
      setCart((prevCart) => {
        // Create a copy of the previous cart
        const newCart = { ...prevCart };

        // If the item already exists in the cart, update the quantity
        if (newCart[obj.id]) {
          newCart[obj.id].quantity += quantity;
        } else {
          // Add the new item to the cart
          newCart[obj.name] = { quantity, product: obj };
        }

        return newCart;
      });
    }
  }

  return (
    <div>
      <div className="relative">
        <img className="h-80 w-[100%]" src={img1} alt="" />
        <img
          onClick={handleNext}
          className="absolute top-[50%] right-4 bg-white rounded-full p-2"
          src={nextIcon}
          alt=""
        />
        <img
          onClick={handlePrevious}
          className="absolute top-[50%] left-4 bg-white rounded-full p-2"
          src={previous}
          alt=""
        />
      </div>

      <div className="w-4/5 mx-auto mt-6">
        <h2 className="font-bold text-DarkGrayishBlue">SNEAKER COMPANY</h2>
        <h1 className="text-3xl font-bold my-2">
          Fall Limited Edition Sneakers
        </h1>

        <p className="text-DarkGrayishBlue">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div>
          <div className="flex w-full justify-between py-3 my-3 place-items-center">
            <span className="font-bold text-2xl">${quantity * 125.0}</span>{" "}
            <span className="bg-black p-2 text-white">50%</span>{" "}
            <span className="crossed-text"> $250.00</span>
          </div>

          <div className="flex w-full place-items-center mt-4 bg-LightGrayishBlue py-3 justify-between px-4">
            <span>
              <img onClick={decreaseQuantity} src={minus} alt="" />
            </span>{" "}
            <span>{quantity}</span>
            <span>
              <img
                onClick={() => setQuantity((prev) => prev + 1)}
                src={plus}
                alt=""
              />
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full flex justify-center space-x-8 rounded-lg mt-4 bg-Orange py-4"
          >
            <img src={cartIcon} alt="" />
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
