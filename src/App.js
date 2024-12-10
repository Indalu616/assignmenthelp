import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import SignUp from "./components/SignInSignUp/SignUp";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/assignmenthelp/sign-up" element={<SignUp />}></Route>
        <Route path="/assignmenthelp" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
