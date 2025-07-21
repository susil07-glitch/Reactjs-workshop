import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useParams } from 'react-router-dom'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from "./pages/Home"
import EditPage from "./pages/EditPage"
import SinglePage from "./pages/SinglePage"
import Create from "./pages/Create"
import LearningUsestate from "./Component/LearningUsestate"
import NewPage from './pages/NewPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<div className="bg-yellow-500 text-red-700 p-40 text-2xl rounded-lg mx-80 mt-50"><h1 className="text-2xl font-bold">WelCome</h1><p className="mt-2">Click the menu above to explore various sections..</p></div>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="newpage"element={<NewPage/>}></Route>
      <Route path="edit" element={<EditPage/>}/>      
      <Route path="edit/:id" element={<EditPage/>}/>
      <Route path="single/:id" element={<SinglePage/>}/>
      <Route path="single" element={<SinglePage/>}/>
      <Route path="create" element={<Create/>}/>
      <Route path="learning" element={<LearningUsestate/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)