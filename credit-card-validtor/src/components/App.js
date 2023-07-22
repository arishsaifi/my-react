import React from "react";
// //import CardForm from "./cardform";
import Form from "./form"
// import CardDetailsForm from "./form";
import Front from "./Front";
import Rear from "./Rear";
function App() {
   return (
      <div className="main">
         <div className="left">
            <Front />
            <Rear />
         </div>

         <div className="right">
            <Form />
            
            {/* <CardDetailsForm /> */}
         </div>
      </div>
   )
}

export default App;
