import logo from "../../images/logo-bookmark-footer.svg";
import fb from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import { Link } from "react-scroll";
const Footer = ()=>{
    return (
      <footer class="py-16 bg-veryDarkBlue">
        {/* <!-- Footer Flex Container --> */}
        <div class="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
          {/* <!-- Logo/Menu Container --> */}
          <div class="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
            <img src={logo} alt="" class="mb-1" />

            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              class="transform duration-500 uppercase hover:text-softRed"
            >
              Features
            </Link>
            <Link
              to="download"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              class="transform duration-500 uppercase hover:text-softRed"
            >
              Download
            </Link>
            <Link
              to="faq"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              class="transform duration-500 uppercase hover:text-softRed"
            >
              FAQ
            </Link>
          </div>

          {/* <!-- Social Container --> */}
          <div class="flex space-x-10">
            <a href>
              <img src={fb} alt="" class="transform duration-500 h-6 ficon" />
            </a>
            <a href>
              <img
                src={twitter}
                alt=""
                class="transform duration-500 h-6 ficon"
              />
            </a>
          </div>
        </div>
      </footer>
    );
};
export default Footer;