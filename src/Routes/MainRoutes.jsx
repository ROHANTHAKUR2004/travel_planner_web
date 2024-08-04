import { Route, Routes } from "react-router-dom";
import LoadingPage from "../Pages/Loadingpage/LoadingPage";
import Layout from "../Layout/Layout";
import Character from "../Pages/character/Character";


export default function MainRoutes() {
  return (
     
     <Routes>
         <Route path='/'  element={<LoadingPage/>}/>
         <Route path='/main' element={<Layout/>} />
         <Route path='/characters' element={<Character/>} />
     </Routes>
  )
}
