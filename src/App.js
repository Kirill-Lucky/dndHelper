import Navbar from "./pageComponents/Navbar";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Creation from "./pages/Creation";
import { Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/creation" element={<Creation />} />
        </Routes>
      
      </div>
    </div>
)}

export default App;
