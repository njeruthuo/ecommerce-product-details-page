import logo from "../images/logo.svg";
import cartIcon from "../images/icon-cart.svg";
import hamburger from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";
import profile from "../images/image-avatar.png";
import { useState } from "react";
import useCart from "../utils/useCart";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [cartOpen, setOpenCart] = useState(false);
  const { cart } = useCart();

  console.log(cart);
  return (
    <>
      <div className="py-8 px-6 sm:py-0 border-b border-GrayishBlue flex place-items-center justify-between sm:pr-10">
        <div className="flex space-x-6 lg:space-x-10 place-items-center">
          <div id="hamburger" className="sm:hidden">
            {mobile ? (
              <img
                onClick={() => setMobile((prev) => !prev)}
                className="sm:w-0 sm:hidden hover:cursor-pointer"
                src={close}
                alt=""
              />
            ) : (
              <img
                onClick={() => setMobile((prev) => !prev)}
                className="sm:w-0 sm:hidden hover:cursor-pointer"
                src={hamburger}
                alt=""
              />
            )}
          </div>
          <div>
            <img src={logo} alt="" />
          </div>

          <div
            id="navlinks"
            className="hidden sm:flex lg:space-x-4 space-x-2 text-DarkGrayishBlue"
          >
            <p>
              <a href="">Collections</a>
            </p>
            <p>
              <a href="">Men</a>
            </p>
            <p>
              <a href="">Women</a>
            </p>
            <p>
              <a href="">About</a>
            </p>
            <p>
              <a href="">Contact</a>
            </p>
          </div>
        </div>

        <div id="nav-right" className="flex space-x-10 place-items-center">
          <img
            onClick={() => setOpenCart((prev) => !prev)}
            id="cart"
            src={cartIcon}
            alt="cart"
          />
          <img id="profile" src={profile} alt="profile" />
        </div>
      </div>

      {mobile && (
        <div className="absolute bg-white top-28 left-0 sm:hidden z-40">
          <div className="flex sm:hidden flex-col space-y-8 text-DarkGrayishBlue m-8">
            <p>
              <a onClick={() => setMobile((prev) => !prev)} href="#">
                Collections
              </a>
            </p>
            <p>
              <a onClick={() => setMobile((prev) => !prev)} href="#">
                Men
              </a>
            </p>
            <p>
              <a onClick={() => setMobile((prev) => !prev)} href="#">
                Women
              </a>
            </p>
            <p>
              <a onClick={() => setMobile((prev) => !prev)} href="#">
                About
              </a>
            </p>
            <p>
              <a onClick={() => setMobile((prev) => !prev)} href="#">
                Contact
              </a>
            </p>
          </div>
        </div>
      )}

      {cartOpen && (
        <div className="z-40 bg-white absolute top-28 border right-5 left-5 sm:left-auto flex justify-center rounded sm:right-28 ">
          {cart.length ? (
            <div>Hello</div>
          ) : (
            <div className="text-xl mx-6 my-2">
              <h1 className="text-black font-bold py-4">Cart</h1>
              <hr />
              <div className="text-DarkGrayishBlue mt-4">
                <p>Your cart is empty</p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default Navbar;
