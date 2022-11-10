import Tab from "./Tab";

const Faq = ()=>{
    return (
      <section id="faq">
        <div className="container mx-auto">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-lg px-6 mx-auto text-center text-graishBlue">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>

        {/* <!-- FAQ Accordion --> */}

        {/* <!-- Main Container --> */}
        <div className="container mx-auto px-6 mb-32">
          {/* <!-- Accordion Container --> */}
          <div className="max-w-2xl m-8 mx-auto overflow-hidden">
            {/* <!-- Tabs --> */}
            <Tab index="1" title="What is Bookmark?" />
            <Tab index="2" title="How can I request a new browser?" />
            <Tab index="3" title="Is ther a mobile app?" />
            <Tab index="4" title="What about other Chromium browsers" />
          </div>
        </div>
      </section>
    );
};
export default Faq;