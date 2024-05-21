import Layout from "./components/Layout"
import LoginPage from "./components/LoginPage"
import Nav from "./components/Nav"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import RegisterPage from "./components/RegisterPage"
import CreatePost from "./components/CreatePost"
import IndexPage from "./components/IndexPage"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
      <Route index element={
    <IndexPage></IndexPage>
   }></Route>
      <Route path='/login' element={
   <LoginPage></LoginPage>}></Route>
   <Route path="/register" element={
   <RegisterPage></RegisterPage>}></Route>
   <Route path='/create' 
   element={<CreatePost></CreatePost>}></Route>
      </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
