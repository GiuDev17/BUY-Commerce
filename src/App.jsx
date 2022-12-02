import { HashRouter, Routes, Route } from "react-router-dom";
import Login from './components/pages/Login.jsx'
import ProductsDetail from './components/pages/ProductsDetail.jsx'
import Purchases from './components/pages/Purchases.jsx'
import LoadingScreen from './components/LoadingScreen.jsx';
import './App.css'
import Home from "./components/pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import ProtectedRoutes from "./components/protectorRoutes.jsx";



function App() {

  const isLoading = useSelector ((state) =>state.isLoading)

  return (

      <HashRouter>
        <NavBar/>
         {isLoading && <LoadingScreen />}  
         <Container className="my-5">
         <Routes>
           <Route path= '/' element={<Home/>}/>
           <Route path= '/products/:id' element={<ProductsDetail/>}/>
           <Route path= '/purchases' element={<Purchases/>}/>
           <Route path= '/login' element={<Login/>}/>
          <Route elemint={<ProtectedRoutes/>}> 
          <Route path= '/purchases' element={<Purchases/>}/>
          </Route>
         </Routes>
         </Container>
       </HashRouter> 
    
  );
}

export default App;
