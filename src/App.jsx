// import "./App.css";

import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer"
import SurveyPage from "./Pages/SurveyPage"
import TaskPage from "./Pages/TaskPage"
import WalletPage from "./Pages/WalletPage"
import DashboardPage from "./Pages/DashboardPage"
import AboutPage from "./Pages/AboutPage"
import HelpPage from "./Pages/HelpPage"
import ContactPage from "./Pages/ContactPage"
import RegistrationPage from "./Pages/RegistrationPage"
import LoginPage from "./Pages/LoginPage"
import UserdetailsPage from "./Pages/UserdetailsPage"
import ReviewPage from "./Pages/ReviewPage"


const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"element={
            <>
              <Hero />
              <Testimonial />
            </>
          }
        />
        <Route path="/surveys" element={<SurveyPage />} />
          <Route path="/Tasks" element={<TaskPage />} />
          <Route path="/Wallet" element={<WalletPage />} />
          <Route path="/Dashboard" element={<DashboardPage />} />
          <Route path="/About-page" element={<AboutPage />} />
          <Route path="/Help" element={<HelpPage />} />
          <Route path="/Contact" element={<ContactPage />} />
           <Route path="/Register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
             <Route path="/user-details/:id" element={<UserdetailsPage/>} />{" "}
              <Route path="/Survey-page" element={<SurveyPage />} />
              <Route path="/Wallet-page" element={<WalletPage />} />
              <Route path="/Task-page" element={<TaskPage />} />
              <Route path="/Reviews/:id" element={<ReviewPage />} />
          
      </Routes>

      <Footer />
    </div>
  );
};

export default App;