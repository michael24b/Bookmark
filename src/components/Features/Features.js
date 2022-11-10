import Tabs from "./Tabs";
import img1 from '../../images/illustration-features-tab-1.svg'
import img2 from '../../images/illustration-features-tab-2.svg'
import img3 from '../../images/illustration-features-tab-3.svg'
import Panels from "./Panels";
import { useState } from "react";
const Features = ()=>{
  const [visible, setVisible] = useState(1)
  const visiblePanel =(event)=>{
setVisible(event);

  }
  console.log(visible)
return(
    <section id="features">
      <div className="container mx-auto mt-16 px-6">
        <h2 className="mb-6 text-4xl font-semibold text-center">Features</h2>
        <p className="max-w-md mx-auto text-center text-grayishBlue">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
    

    {/* // <!-- Features Tabs --> */}
    <div>
        {/* <!-- Tabs/Panels Container --> */}
        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <div className="bg-tabs"></div>
          {/* <!-- Tabs Flex Container --> */}
          <div
            className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row"
          >
            {/* <!-- Tab 1 --> */}
            <Tabs valueHandler={visiblePanel} data={1} border={visible ===1 &&'border-b-4 border-softRed'} title='Simple Bookmarking'/>

            {/* <!-- Tab 2 --> */}
            <Tabs valueHandler={visiblePanel} data={2} title='Speedy Searching' border={visible ===2 &&'border-b-4 border-softRed'}/>
  
            {/* <!-- Tab 3 --> */}
            <Tabs valueHandler={visiblePanel} data={3} title='Easy Sharing' border={visible ===3 &&'border-b-4 border-softRed'}/>
            </div>
  
          {/* <!-- Tab Panels --> */}
          <div id="panels" className="container mx-auto">
            {/* <!-- Panel 1 --> */}
            {visible === 1 && <Panels img={img1} title='Bookmark in one click' text='Organize your bookmarks however you like. Our simple
            drag-and-drop interface gives you complete control over how you
            manage your favourite sites.'/>}
            {/* <!-- Panel 2 --> */}
            {visible === 2 && <Panels className='transform duration-500' img={img2} title='Intelligent search' text='Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'/>}
  
            {/* <!-- Panel 3 --> */}
            {visible === 3 && <Panels className='transform duration-500' img={img3} title='Share your bookmarks' text='Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.'/>}
          </div>
        
      </div>
      </div>
    </section>
)
};
export default Features;