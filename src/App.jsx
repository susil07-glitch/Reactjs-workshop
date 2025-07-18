import { BrowserRouter,Routes,Route } from "react-router-dom"

import Navbar from "./Component/Navbar"
import Card from "./Component/Card"
import Create from "./pages/create"
import EditPage from "./pages/EditPage"
import SinglePage from "./pages/SinglePage"
import LearningUsestate from "./pages/LearningUsestate"


function App() {

   

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/Navbar"element={<Navbar/>}></Route>
      <Route path="/Card" element={<Card/>}></Route>
      <Route path="/Create"element={<Create/>}></Route>
      <Route path="/EditPage"element={<EditPage/>}></Route>
       <Route path="/SinglePage"element={<SinglePage/>}></Route>
       <Route path="/LearningUsestate" element={<LearningUsestate/>}></Route>
     </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
