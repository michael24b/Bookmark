import chrome from "../../images/logo-chrome.svg";
import firefox from "../../images/logo-firefox.svg";
import opera from "../../images/logo-opera.svg";
import Box from "./Box";


const Download = ()=>{
    return (
      <section id="download">
        <div className="container mx-auto px-6 py-6">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Download the extension
          </h2>
          <p className="max-w-lg mx-auto text-center text-grayishBlue">
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>

        {/* <!-- Download Boxes --> */}

        {/* <!-- Boxes Container --> */}
        <div className="relative flex flex-col items-center py-12 max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          {/* <!-- Boxes --> */}
          <Box img={chrome} title="Chrome" version="62" />
          <Box img={firefox} title="Firefox" version="55" />
          <Box img={opera} title="Opera"version='46'/>
        </div>
      </section>
    );
};
export default Download;