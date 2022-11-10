

const Tabs = (props)=>{
 
  const onClickHandler = ()=>{
  
  props.valueHandler(props.data);
  }
    return(<div
        className="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
        data-target={props.data}
        onClick={onClickHandler}
      >
        <div className={`py-5  ${props.border}`} data-target="panel-1">
          {props.title}
        </div>
      </div>)
};

export default Tabs;