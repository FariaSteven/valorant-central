import { Routes as RoutesWrapper, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Agents from "./pages/Agents/Agents";
import Landing from "./pages/Landing/Landing";

import "./global/globalStyles.css";
import Footer from "./components/Footer/Footer";

const Routes = () => {
  return (
    <>
      <Header/>
      <RoutesWrapper>
        <Route path="/" element={<Landing/>} />
        <Route path="/agentes" element={<Agents/>} />
      </RoutesWrapper>
      <Footer/>
    </>
  )
}

export default Routes;