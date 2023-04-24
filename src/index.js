import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/stores/configureStore";
import App from "./App";
import MyComponent from "./components/MyComponent";
import Exchange from "./components/Exchange";
import Search from "./components/Search";

const store = configureStore();

ReactDOM.render(
	
	<React.StrictMode>
		<Provider store={store}>
		
			<div className="border border-black pt-20">
  <div className="max-w-[1200px] grid grid-cols-1 lg:grid-cols-3 gap-5  lg:grid-rows-[auto,1fr,1fr,auto] grid-auto-rows-min-[100px]  sm:grid-cols-1 ">
    
    
    {/* <div className="col-span-2  h-60">
				<div className=" py-5 sm:grid-row-4 min-h-0 border  border-black rounded-lg mx-2 md:ml-0 md:mr-2 w-full md:w-250 px-4 mb-4 flex-grow-1">
					<MyComponent />
				</div> */}
    
    
    {/*chart component*/}
    <div className="lg:col-span-2  lg:h-60">
    <div className="py-5 sm:grid-row-4 min-h-0 border border-black rounded-lg mx-2 md:ml-0 md:mr-2 w-full md:w-250 px-4 mb-4  flex-grow-1">
      <MyComponent />
    </div>

    {/**holdings form data component */}
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 md:p-4 md:py-45 md:grid-row-4 md:h-65 " >
        <div className="text-sm max-w-[400px] leading-5 border border-black rounded-lg md:h-85" >
          <App />
        </div>
      </div>
      <div className="flex-1 md:py-45 md:h-65 md:grid-rows-3">
        <div className="p-6 text-sm leading-5 border border-black rounded-lg">
          <Exchange />
        </div>
      </div>
    </div>
    </div>

    {/**marketcap data component */}
    <div className="col-span-1">
      <div className="py-5 sm:grid-row:1 mx-2 md:ml-0 md:mr-2 md:flex md:flex-col md:order-3 md:grid-row-1 sm:col-span-1 sm:flex sm:flex-col sm:order-1 overflow-y: auto border border-black rounded-lg" style={{ overflowY: "scroll", maxHeight: "800px" }}>
        <Search className="md:h-96 md:grid-row-1" />
      </div>
    </div>

    <div className="sm:col-span-3"></div>
  </div>
</div>

		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
