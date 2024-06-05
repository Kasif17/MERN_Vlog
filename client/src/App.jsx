import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Projects from "./pages/Projects"
function App() {


  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/sign-up" element={<SignIn/>}></Route>
      <Route path="/sign-in" element={<SignUp/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
