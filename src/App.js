import "./App.css";

import HeaderBanner from "./component/Header";
import FooterBanner from "./component/Footer";

function App() {
  // list
  return (
    <div className="App">
      {/* Header */}
      <div className="header">
        <HeaderBanner
          name="Katherine Ayers"
          masters="38"
          description="Calculator"
        />
      </div>
      {/* Body */}
      <div className="content"></div>
      {/* Footer */}
      <div className="footer">
        <FooterBanner name="Katherine Ayers" github="Indykatz" />
      </div>
      {/* End of App div */}
    </div>
  );
}

export default App;
