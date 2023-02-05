
// importing React from react library
import React from "react";

// importing css file 
import "./css_files/app.css";


// creating functional component
function App() {
  // options for dropdown list
  const options = ["JAVA+DSA", "HTML", "CSS","JavaScript", "REACTJS", "NODEJS"];

  return (
    <div className="App">
      <div className="container">
        <h3>Select Your Option</h3>

        <h4>Select Option</h4>

        {/* creating drop down */}

        <select>
          {options.map(function (option) {
            return <option className="option">{option}</option>;
          })}
          ;
        </select>
      </div>
    </div>
  );

}

export default App;
