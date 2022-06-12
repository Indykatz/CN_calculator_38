import "./App.css";
import { useState } from "react";
import { evaluate } from "mathjs";
import HeaderBanner from "./component/Header";
import FooterBanner from "./component/Footer";
import Operators from "./component/Operators";
import Numbers from "./component/Numbers";

const App = () => {
  // calcultor state
  const [input, setInput] = useState("");
  // function to caluclate result
  const calculate = (aButton) => {
    if (aButton === "=") {
      const result = evaluate(input);
      setInput(result);
    } else if (aButton === "c") {
      setInput("");
    } else setInput(input + aButton);
  };
  // handle click
  const handleClick = (e) => {
    const display = e.target.textContent;
    calculate(display);
  };

  return (
    <div className="App">
      Header
      <div className="header">
        <HeaderBanner
          name="Katherine Ayers"
          masters="38"
          description="Calculator"
        />
      </div>
      {/* Body */}
      <div className="content">
        <div className="calculator">
          {/* <h1>Calculator</h1> */}
          <h1 className="display" data-testid="display">
            {input}
          </h1>
          <div className="calc-box">
            <div className="numbers">
              <Numbers handleClick={handleClick} />
            </div>
            
            <Operators handleClick={handleClick} />
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="footer">
        <FooterBanner name="Katherine Ayers" github="Indykatz" />
      </div>
      {/* End of App div */}
    </div>
  );
};

export default App;
