const Box = (props)=>{
    return (
      <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
        {/* <!-- Image --> */}
        <div className="flex justify-center">
          <img src={props.img} alt="" />
        </div>
        {/* <!-- Text --> */}
        <h5 className="pt-6 text-xl font-bold">Add to {props.title}</h5>
        <p className="text-gray-400">Minimum Version {props.version}</p>

        {/* <!-- Dots --> */}
        <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
          <a
            href
            className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
          >
            Add & Install Extension
          </a>
        </div>
      </div>
    );
};
export default Box;