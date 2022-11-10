const Tab = (props)=>{
    return (
      <div className="py-1 border-b outline-none group" tabindex={props.index}>
        {/* <!-- Tab Flex Container --> */}
        <div className="flex items-center justify-between py-3 text-gray-500  cursor-pointer group ">
          {/* <!-- Tab Title --> */}
          <div className="transform duration-500 ease group-hover:text-red-500">
            {props.title}
          </div>
          {/* <!-- Arrow --> */}
          <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                d="M1 1l8 8 8-8"
              />
            </svg>
          </div>
        </div>

        {/* <!-- Tab Inner Content --> */}
        <div className="overflow-hidden transition-all duration-1000 group-focus:max-h-screen max-h-0 ease ">
          <p className="py-2 text-justify text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            repellat amet doloribus consequuntur eos similique provident tempora
            voluptates iure quia fuga dicta voluptatibus culpa mollitia
            recusandae delectus id suscipit labore?
          </p>
        </div>
      </div>
    );
};
export default Tab;