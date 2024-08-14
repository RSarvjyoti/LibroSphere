import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import BookBoard from "./pages/BookBoard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
   <div className="container">
   <Navbar />
   <div className="content">
    <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/store" element={<Store />}/>
       <Route path="/board" element={<BookBoard />}/>
       <Route path="/signup" element={<Signup />}/>
       <Route path="/login" element={<Login />}/>
    </Routes>
   </div>
   <Footer />
   </div>
  );
}

export default App;
