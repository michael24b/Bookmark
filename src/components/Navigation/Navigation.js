import { useState } from 'react';
import img from '../../images/logo-bookmark.svg';
import logo from "../../images/logo-bookmark-footer.svg";
import {Link} from 'react-scroll';

const Navigation = ()=>{
  const [visible, isVisible] = useState(false);

  const navHandler= ()=>{
isVisible(!visible);
  };

  const hamburgerHandler = ()=>{
    isVisible(false);
  }
    return (
      <nav className="container relative mx-auto p-6 ">
        {/* <!-- Flex Container For Nav Items --> */}
        <div className="flex items-center justify-between space-x-20 my-6">
          {/* <!-- Logo --> */}
          <div className="z-30">
            {!visible ? (
              <img src={img} alt="" id="logo" />
            ) : (
              <img src={logo} alt="" id="logo" />
            )}
          </div>

          {/* <!-- Menu Items --> */}
          <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="tracking-widest hover:text-softRed"
            >
              Features
            </Link>
            <Link
              to="download"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="tracking-widest hover:text-softRed"
            >
              Download
            </Link>
            <Link
              to="faq"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="tracking-widest hover:text-softRed"
            >
              FAQ
            </Link>

            <Link
              href
              className="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white"
            >
              Login
            </Link>
          </div>
          {/* <!-- Hamburger Button --> */}
          <button
            id="menu-btn"
            className={`z-30 block md:hidden focus:outline-none hamburger ${
              visible && "open"
            }`}
            onClick={navHandler}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* <!-- Mobile Menu --> */}
        <div
          id="menu"
          className={`fixed inset-0 z-20 ${
            !visible && "hidden"
          } flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue`}
        >
          <div className="w-full py-3 text-center">
            <Link
              onClick={hamburgerHandler}
              to="features"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="block hover:text-softRed"
            >
              Features
            </Link>
          </div>
          <div className="w-full py-3 text-center">
            <Link
              onClick={hamburgerHandler}
              to="download"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="block hover:text-softRed"
            >
              Download
            </Link>
          </div>
          <div className="w-full py-3 text-center">
            <Link
              onClick={hamburgerHandler}
              to="faq"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="block hover:text-softRed"
            >
              FAQ
            </Link>
          </div>
          <div className="w-full py-3 text-center">
            <Link href className="block hover:text-softRed">
              Login
            </Link>
          </div>
        </div>
      </nav>
    );
};


export default Navigation;